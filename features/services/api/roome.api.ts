import type {
    RoomItem,
    RoomPayload,
    RoomsResponse,
} from "../types/rooms.types";

let mockRooms: RoomItem[] = [
    { id: 1, name: "101-xona", services_count: 2 },
    { id: 2, name: "205-xona", services_count: 1 },
];

export const getRooms = async (): Promise<RoomsResponse> => {
    return {
        items: mockRooms,
        total: mockRooms.length,
    };
};

export const createRoom = async (payload: RoomPayload): Promise<RoomItem> => {
    const newRoom: RoomItem = {
        id: Date.now(),
        name: payload.name,
        services_count: 0,
    };

    mockRooms = [newRoom, ...mockRooms];

    return newRoom;
};

export const deleteRoom = async (id: number) => {
    mockRooms = mockRooms.filter((room) => room.id !== id);

    return { success: true, id };
};