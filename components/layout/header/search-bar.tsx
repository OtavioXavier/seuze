import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
    return (
        <div className="flex items-center w-full max-w-sm space-x-2 rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-900 px-3.5 py-2 h-12">
            <Search className="h-4 w-4" />
            <Input type="search" placeholder="Search" className="w-full border-0 h-8 font-semibold" />
        </div>
    );
}