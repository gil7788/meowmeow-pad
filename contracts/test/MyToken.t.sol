// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/MyToken.sol";

contract MyTokenTest is Test {
    MyToken public token;
    address public alice;
    address public bob;

    function setUp() public {
        token = new MyToken();
        alice = address(0xA11CE);
        bob = address(0xB0B);

        // Give some initial tokens to Alice for testing
        vm.prank(address(this));
        token.transfer(alice, 1_000 * 1e18);
    }

    function testNameAndSymbol() public view {
        assertEq(token.name(), "MyToken");
        assertEq(token.symbol(), "MTK");
    }

    function testTotalSupply() public view {
        // Constructor doesn't mint anything, so totalSupply should be 0
        assertEq(token.totalSupply(), 1000000000000000000000000);
    }

    function testTransfer() public {
        vm.startPrank(alice);
        token.transfer(bob, 100 * 1e18);
        vm.stopPrank();

        assertEq(token.balanceOf(bob), 100 * 1e18);
        assertEq(token.balanceOf(alice), 900 * 1e18);
    }

    function testApproveAndTransferFrom() public {
        vm.startPrank(alice);
        token.approve(bob, 200 * 1e18);
        vm.stopPrank();

        vm.prank(bob);
        token.transferFrom(alice, bob, 200 * 1e18);

        assertEq(token.balanceOf(bob), 200 * 1e18);
        assertEq(token.balanceOf(alice), 800 * 1e18);
    }

    function testPermit() public {
        uint256 privateKey = 0xA11CE;
        address owner = vm.addr(privateKey);
        address spender = bob;
        uint256 value = 500 * 1e18;
        uint256 deadline = block.timestamp + 1 hours;

        // Give tokens to the owner (so we can test later allowance & transferFrom if desired)
        token.transfer(owner, value);

        uint256 nonce = token.nonces(owner);

        // Compute the permit digest manually
        bytes32 structHash = keccak256(
            abi.encode(
                keccak256("Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)"),
                owner,
                spender,
                value,
                nonce,
                deadline
            )
        );

        bytes32 digest = keccak256(abi.encodePacked("\x19\x01", token.DOMAIN_SEPARATOR(), structHash));

        (uint8 v, bytes32 r, bytes32 s) = vm.sign(privateKey, digest);

        // Run the permit
        token.permit(owner, spender, value, deadline, v, r, s);

        // Check allowance
        assertEq(token.allowance(owner, spender), value);
    }
}
