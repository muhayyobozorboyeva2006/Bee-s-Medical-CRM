"use client";

import { useCallback, useEffect, useState } from "react";
import { createRoom, deleteRoom, getRooms } from "../api/roome.api";
import type { RoomItem, RoomPayload } from "../types/rooms.types";

export const useRooms = () => {
    const [rooms, setRooms] = useState<RoomItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const loadRooms = useCallback(async () => {
        setIsLoading(true);

        try {
            const result = await getRooms();
            setRooms(Array.isArray(result.items) ? result.items : []);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const submitRoom = async (payload: RoomPayload) => {
        await createRoom(payload);
        await loadRooms();
    };

    const removeRoom = async (id: number) => {
        const ok = window.confirm("Xonani o‘chirishni xohlaysizmi?");
        if (!ok) return;

        await deleteRoom(id);
        await loadRooms();
    };

    useEffect(() => {
        loadRooms();
    }, [loadRooms]);

    return {
        rooms,
        isLoading,
        submitRoom,
        removeRoom,
    };
};