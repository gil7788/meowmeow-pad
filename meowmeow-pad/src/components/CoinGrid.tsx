import { Card, CardContent } from "./ui/card";

export default function CoinGrid({ coins }: { coins: string[] }) {
    return (
        <div className="pl-64 p-4 grid grid-cols-3 gap-4">
            {coins.map((coin, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4 text-center">
                        <div className="font-bold text-lg">{coin}</div>
                        <div className="text-sm text-gray-500">Freshly Meowed</div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
