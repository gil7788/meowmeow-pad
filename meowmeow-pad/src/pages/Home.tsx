import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import CoinGrid from "../components/CoinGrid";

export default function Home() {
    const [search, setSearch] = useState("");
    const coins = Array.from({ length: 48 }, (_, i) => `$MEOW${i + 1}`);
    const filtered = coins.filter((c) => c.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="bg-gray-50 min-h-screen">
            <Sidebar />
            <Topbar onSearch={setSearch} />
            <CoinGrid coins={filtered} />
        </div>
    );
}
