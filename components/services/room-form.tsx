"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

interface RoomFormProps {
    onSubmit: (payload: { name: string }) => Promise<void>;
}

export default function RoomForm({ onSubmit }: RoomFormProps) {
    const [name, setName] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const value = name.trim();
        if (!value) return;

        await onSubmit({ name: value });
        setName("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-[18px] border border-[#dde6f0] bg-white px-4 py-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
        >
            <div className="flex items-center gap-3">
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Xona nomi"
                    className="h-[44px] flex-1 rounded-[12px] border border-[#dbe4ee] bg-white px-4 text-[15px] text-[#0f172a] outline-none placeholder:text-[#94a3b8]"
                />

                <button
                    type="submit"
                    className="inline-flex h-[44px] items-center gap-2 rounded-[12px] bg-[#62c3a4] px-5 text-[15px] font-bold text-white transition hover:bg-[#10b981]"
                >
                    <Plus className="h-4 w-4" />
                    Qo‘shish
                </button>
            </div>
        </form>
    );
}