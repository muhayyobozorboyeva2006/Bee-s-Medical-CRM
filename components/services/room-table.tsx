"use client";

import { Trash2 } from "lucide-react";
import type { RoomItem } from "@/features/services/types/rooms.types";

interface RoomTableProps {
    rooms: RoomItem[];
    isLoading: boolean;
    onDelete: (id: number) => void;
}

export default function RoomTable({
    rooms,
    isLoading,
    onDelete,
}: RoomTableProps) {
    return (
        <div className="overflow-hidden rounded-[18px] border border-[#dde6f0] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-[#fbfcfe] text-left text-[14px] font-extrabold uppercase text-[#52637a]">
                        <th className="px-4 py-4">#</th>
                        <th className="px-4 py-4">Nomi</th>
                        <th className="px-4 py-4">Xizmatlar</th>
                        <th className="px-4 py-4 text-right">Amallar</th>
                    </tr>
                </thead>

                <tbody>
                    {isLoading ? (
                        <tr>
                            <td colSpan={4} className="px-4 py-10 text-center text-[#64748b]">
                                Yuklanmoqda...
                            </td>
                        </tr>
                    ) : rooms.length ? (
                        rooms.map((room, index) => (
                            <tr
                                key={room.id}
                                className="border-t border-[#edf2f7] text-[15px] text-[#1d2c44]"
                            >
                                <td className="px-4 py-5 font-semibold">{index + 1}</td>
                                <td className="px-4 py-5">{room.name}</td>
                                <td className="px-4 py-5">{room.services_count} ta</td>
                                <td className="px-4 py-5">
                                    <div className="flex justify-end">
                                        <button
                                            type="button"
                                            onClick={() => onDelete(room.id)}
                                            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff1f2] text-[#e11d48] transition hover:bg-[#ffe4e6]"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4} className="px-4 py-10 text-center text-[#64748b]">
                                Xonalar yo‘q
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}