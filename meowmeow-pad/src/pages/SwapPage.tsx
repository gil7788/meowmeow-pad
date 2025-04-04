import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { ChevronDown, Settings } from "lucide-react";

const swappableAssets = ["$MEOW", "$PURR", "$CATNIP"];

function SwapSettings({ onClose, onApply, settings, setSettings }: any) {
    return (
        <div className="absolute right-0 top-0 bg-white p-4 shadow-lg rounded-md w-80 z-10">
            <div className="text-lg font-semibold mb-4">Settings</div>

            <div className="mb-4">
                <label className="block mb-1 font-medium">Slippage</label>
                <div className="flex gap-2">
                    {["0.5", "1"].map((val) => (
                        <Button
                            key={val}
                            variant={settings.slippage === val ? "default" : "outline"}
                            onClick={() => setSettings({ ...settings, slippage: val })}
                        >
                            {val}%
                        </Button>
                    ))}
                    <Input
                        placeholder="Custom"
                        value={settings.slippage}
                        onChange={(e) => setSettings({ ...settings, slippage: e.target.value })}
                    />
                </div>
            </div>

            <div className="mb-4">
                <label className="block mb-1 font-medium">Speed</label>
                <div className="flex gap-2">
                    {["fast", "turbo", "ultra"].map((val) => (
                        <Button
                            key={val}
                            variant={settings.speed === val ? "default" : "outline"}
                            onClick={() => setSettings({ ...settings, speed: val })}
                        >
                            {val}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="mb-4">
                <label className="block mb-1 font-medium">Front-running protection</label>
                <Button
                    className="mb-2"
                    variant={settings.protection ? "default" : "outline"}
                    onClick={() => setSettings({ ...settings, protection: !settings.protection })}
                >
                    {settings.protection ? "On" : "Off"}
                </Button>
                {settings.protection && (
                    <Input
                        placeholder="Tip amount"
                        value={settings.tipAmount}
                        onChange={(e) => setSettings({ ...settings, tipAmount: e.target.value })}
                    />
                )}
            </div>

            <div className="flex justify-between mt-6">
                <Button variant="ghost" onClick={onClose}>Close</Button>
                <Button onClick={onApply}>Apply</Button>
            </div>
        </div>
    );
}

export default function SwapPage() {
    const [amount, setAmount] = useState("");
    const [selectedAsset, setSelectedAsset] = useState(swappableAssets[0]);
    const [showAssets, setShowAssets] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [settings, setSettings] = useState({
        slippage: "0.5",
        speed: "fast",
        protection: false,
        tipAmount: "",
    });

    return (
        <div className="bg-gray-50 min-h-screen relative">
            <Sidebar />
            <div className="pl-64 p-8 max-w-xl mx-auto relative">
                <h1 className="text-2xl font-bold mb-6">🔁 Swap</h1>

                <div className="bg-white shadow p-6 rounded-lg space-y-4 relative">
                    <div>
                        <label className="block font-medium mb-1">Amount</label>
                        <Input
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Asset</label>
                        <Button
                            className="w-full flex justify-between"
                            onClick={() => setShowAssets(!showAssets)}
                            variant="outline"
                        >
                            {selectedAsset} <ChevronDown className="ml-2 w-4 h-4" />
                        </Button>
                        {showAssets && (
                            <div className="mt-2 border rounded shadow bg-white absolute z-10 w-full">
                                {swappableAssets.map((asset) => (
                                    <div
                                        key={asset}
                                        className="p-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => {
                                            setSelectedAsset(asset);
                                            setShowAssets(false);
                                        }}
                                    >
                                        {asset}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="text-right">
                        <Button variant="ghost" onClick={() => setShowSettings(!showSettings)}>
                            <Settings className="w-5 h-5 mr-1 inline" /> Settings
                        </Button>
                    </div>

                    {showSettings && (
                        <SwapSettings
                            onClose={() => setShowSettings(false)}
                            onApply={() => setShowSettings(false)}
                            settings={settings}
                            setSettings={setSettings}
                        />
                    )}

                    <Button className="w-full mt-6">Swap Now</Button>
                </div>
            </div>
        </div>
    );
}
