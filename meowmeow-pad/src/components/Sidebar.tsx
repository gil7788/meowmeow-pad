import { Button } from "./ui/button";
import { Wallet } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="w-64 min-h-screen bg-white shadow p-4 flex flex-col justify-between fixed">
            <div>
                <div className="text-2xl font-bold mb-6">🐱 meowmeow-pad</div>
                <div className="space-y-4">
                    <Button className="w-full" variant="outline">
                        <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
                    </Button>

                    <Link to="/create">
                        <Button className="w-full" variant="default">
                            Create New Cat Coin
                        </Button>
                    </Link>

                    <Link to="/swap">
                        <Button className="w-full" variant="ghost">
                            Swap
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="mt-6">
                <div className="bg-pink-100 p-3 rounded-xl text-sm text-pink-800 font-semibold">
                    🐾 Trending Meows
                    <ul className="mt-2 list-disc list-inside">
                        <li>$MEOW</li>
                        <li>$PURR</li>
                        <li>$CATNIP</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
