"use client";

import RoomForm from "@/components/services/room-form";
import RoomTable from "@/components/services/room-table";
import { useRooms } from "@/features/services/hooks/se-rooms";

export default function RoomsPage() {
    const { rooms, isLoading, submitRoom, removeRoom } = useRooms();

    return (
        <div className="space-y-5">
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-[28px] font-extrabold text-[#0f172a]">
                        Xonalar
                    </h1>
                    <p className="mt-2 text-[16px] text-[#64748b]">
                        Xizmat xonalarini boshqarish
                    </p>
                </div>

                <span className="text-[15px] font-medium text-[#1d2c44]">
                    {rooms.length} ta
                </span>
            </div>

            <RoomForm onSubmit={submitRoom} />

            <RoomTable
                rooms={rooms}
                isLoading={isLoading}
                onDelete={removeRoom}
            />
        </div>
    );
}