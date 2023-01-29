export const DUNGEON_LIST = [
    "Tail Cave",
    "Bottle Grotto",
    "Key Cavern",
    "Angler's Tunnel",
    "Catfish's Maw",
    "Face Shrine",
    "Eagle's Tower",
    "Turtle Rock",
    "Color Dungeon",
];

export interface Location {
    id: string;
    name: string;
    area: string;
    itemIdentifier: string;
    sphere: number | null;
    accessible: boolean;
    type: "overworld" | "cave" | "dungeon";
}
