export enum LOGIC {
    "" = "Normal",
    casual = "Casual",
    normal = "Normal",
    hard = "Hard",
    glitched = "Glitched",
    hell = "Hell",
}

export enum OWLSTATUES {
    "" = "None",
    dungeon = "Dungeon",
    overworld = "Overworld",
    both = "Both",
}

export enum DUNGEON_ITEMS {
    "" = "Standard",
    "smallkeys" = "Small Keys everywhere",
    "localkeys" = "Compass/Maps/Beaks everywhere",
    "localknightmarekey" = "Everything besides Nightmare Keys everywhere",
    "keysanity" = "Keysanity",
    "keysy" = "Doors open",
}

export enum ENTRANCE_SHUFFLE {
    none = "None",
    simple = "Simple",
    advanced = "Advanced",
    expert = "Expert",
    insanity = "Insanity",
}

export enum BOOMERANG_GIFT {
    default = "Default",
    trade = "Trade",
    gift = "Gift",
}

export enum STEAL {
    always = "Always",
    never = "Never",
    default = "Default",
}

export const GOALS = {
    0: "No instruments",
    1: "1 Instrument",
    2: "2 Instrument",
    3: "3 Instrument",
    4: "4 Instrument",
    5: "5 Instrument",
    6: "6 Instrument",
    7: "7 Instrument",
    8: "8 Instrument",
    open: "Egg open",
    random: "Random instrument count",
    "open-4": "Random short game (0-4 Instruments)",
    "5-8": "Random long game (5-8 Instruments)",
    seashells: "Seashell hunt (20)",
    bingo: "Bingo!",
    "bingo-full": "Bingo-25!",
};

export enum ACCESSIBILITY_RULE {
    all= "100% Locations",
    goal= "Beatable",
}

export enum BOWWOW {
    normal = "Normal",
    always = "Always",
    swordless = "No Sword, beat the game with Bowwow",
}

export enum ITEMPOOL {
    "" = "Normal",
    casual = "Easier casual mode",
    pain = "Path of Pain",
    keyup = "More Keys",
}

export enum OVERWORLD {
    normal = "Normal",
    dungeondive = "Dungeon Dive",
    nodungeon = "No Dungeons",
    random = "Random",
}

export interface Options {
    logic: LOGIC,
    heartpiece: boolean,
    seashells: boolean,
    heartcontainers: boolean,
    tradequest: boolean,
    instruments: boolean,
    owlstatues: OWLSTATUES,
    dungeonItems: DUNGEON_ITEMS,
    randomstartlocation: boolean,
    dungeonshuffle: boolean,
    entranceshuffle: ENTRANCE_SHUFFLE,
    witch: boolean,
    rooster: boolean,
    boomerang: BOOMERANG_GIFT,
    steal: STEAL,
    goal: typeof GOALS[keyof typeof GOALS],
    accessibilityRule: string,
    bowwow: BOWWOW,
    itempool: ITEMPOOL,
    overworld: OVERWORLD,
}
