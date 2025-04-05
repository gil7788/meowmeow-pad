// script/DeployMyToken.s.sol
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import {MyToken} from "../src/MyToken.sol";

contract DeployMyToken is Script {
    function run() external {
        uint256 privateKey = vm.envUint("DEV_PRIVATE_KEY");
        address account = vm.addr(privateKey);
        console.log("Account", account);
        vm.startBroadcast(privateKey); // Start sending txs using private key (set via env var or CLI)
        new MyToken();
        vm.stopBroadcast();
    }
}
