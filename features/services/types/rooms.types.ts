export interface RoomItem {
    id: number;
    name: string;
    services_count: number;
}

export interface RoomsResponse {
    items: RoomItem[];
    total: number;
}

export interface RoomPayload {
    name: string;
}