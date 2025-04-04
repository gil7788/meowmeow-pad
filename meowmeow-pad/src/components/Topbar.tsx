import { Input } from "../components/ui/input";

interface TopbarProps {
    onSearch: (val: string) => void;
}

export default function Topbar({ onSearch }: TopbarProps) {
    return (
        <div className="pl-64 p-4 bg-gray-100 flex justify-between items-center">
            <div className="text-xl font-bold">Start a New Cat Coin</div>
            <Input
                type="text"
                placeholder="Search for meow coins..."
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSearch(e.target.value)}
                className="w-1/3"
            />
        </div>
    );
}
