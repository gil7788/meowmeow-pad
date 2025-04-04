import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export default function CreateCoinPage() {
    const [form, setForm] = useState({
        name: "",
        ticker: "",
        description: "",
        media: "",
        telegram: "",
        website: "",
        x: "",
    });

    const handleChange = (field: string, value: string) => {
        setForm({ ...form, [field]: value });
    };

    const handleSubmit = () => {
        console.log("Creating coin:", form);
        // TODO: Implement submission logic
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Sidebar />
            <div className="pl-64 p-8 max-w-3xl mx-auto">
                <h1 className="text-2xl font-bold mb-6">🐱 Create a New Cat Coin</h1>
                <div className="space-y-4">
                    <Input
                        placeholder="Coin name"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                    />
                    <Input
                        placeholder="Coin ticker (e.g. $MEOW)"
                        value={form.ticker}
                        onChange={(e) => handleChange("ticker", e.target.value)}
                    />
                    <Input
                        placeholder="Coin description"
                        value={form.description}
                        onChange={(e) => handleChange("description", e.target.value)}
                    />
                    <Input
                        placeholder="Image or video URL"
                        value={form.media}
                        onChange={(e) => handleChange("media", e.target.value)}
                    />

                    <div className="pt-4 border-t border-gray-200 mt-6">
                        <h2 className="text-lg font-semibold mb-2">More Options</h2>
                        <Input
                            placeholder="Telegram link"
                            value={form.telegram}
                            onChange={(e) => handleChange("telegram", e.target.value)}
                        />
                        <Input
                            placeholder="Website link"
                            value={form.website}
                            onChange={(e) => handleChange("website", e.target.value)}
                        />
                        <Input
                            placeholder="X (Twitter) link"
                            value={form.x}
                            onChange={(e) => handleChange("x", e.target.value)}
                        />
                    </div>

                    <Button className="mt-6" onClick={handleSubmit}>
                        🚀 Create Coin
                    </Button>
                </div>
            </div>
        </div>
    );
}
