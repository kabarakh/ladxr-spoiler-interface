import type { Location } from "@/models/Location";
import { useDataStore } from "@/stores/data";

enum ITEM_IDENTIFIER_TO_NAME {
  SWORD = "Sword",
  FEATHER = "Roc's Feather",
  HOOKSHOT = "Hookshot",
  BOW = "Bow",
  BOMB = "Bombs",
  MAGIC_POWDER = "Magic Powder",
  MAGIC_ROD = "Magic Rod",
  OCARINA = "Ocarina",
  PEGASUS_BOOTS = "Pegasus Boots",
  POWER_BRACELET = "Power Bracelet",
  SHIELD = "Shield",
  SHOVEL = "Shovel",
  ROOSTER = "Rooster",
  TOADSTOOL = "Toadstool",
  BOOMERANG = "Boomerang",
  TAIL_KEY = "Tail Key",
  ANGLER_KEY = "Angler Key",
  FACE_KEY = "Face Key",
  BIRD_KEY = "Bird Key",
  SLIME_KEY = "Slime Key",
  GOLD_LEAF = "Golden Leaf",
  FLIPPERS = "Flippers",
  BOWWOW = "Bowwow",
  SONG1 = "Ballad of the Wind Fish",
  SONG2 = "Manbo's Mambo",
  SONG3 = "Frog's Song of Soul",
  BLUE_TUNIC = "Blue Tunic",
  RED_TUNIC = "Red Tunic",
  MAX_ARROWS_UPGRADE = "Max Arrow capacity upgrade",
  MAX_BOMBS_UPGRADE = "Max Bombs capacity upgrade",
  MAX_POWDER_UPGRADE = "Max Magic Powder capacity upgrade",
  HEART_CONTAINER = "Heart Container",
  HEART_PIECE = "Heart Piece",
  RUPEES_500 = "500 Rupees",
  RUPEES_200 = "200 Rupees",
  RUPEES_100 = "100 Rupees",
  RUPEES_50 = "50 Rupees",
  RUPEES_20 = "20 Rupees",
  ARROWS_10 = "10 Arrows",
  SINGLE_ARROW = "Single Arrow",
  SEASHELL = "Secret Seashell",
  MEDICINE = "Medicine",
  GEL = "Gel Trap",
  MESSAGE = "Master Stalfo's Message",
  COMPASS1 = "Compass (Tail Cave)",
  KEY1 = "Small Key (Tail Cave)",
  MAP1 = "Map (Tail Cave)",
  NIGHTMARE_KEY1 = "Nightmare Key (Tail Cave)",
  STONE_BEAK1 = "Stone Beak (Tail Cave)",
  COMPASS2 = "Compass (Bottle Grotto)",
  KEY2 = "Small Key (Bottle Grotto)",
  MAP2 = "Map (Bottle Grotto)",
  NIGHTMARE_KEY2 = "Nightmare Key (Bottle Grotto)",
  STONE_BEAK2 = "Stone Beak (Bottle Grotto)",
  COMPASS3 = "Compass (Key Cavern)",
  KEY3 = "Small Key (Key Cavern)",
  MAP3 = "Map (Key Cavern)",
  NIGHTMARE_KEY3 = "Nightmare Key (Key Cavern)",
  STONE_BEAK3 = "Stone Beak (Key Cavern)",
  COMPASS4 = "Compass (Angler's Tunnel)",
  KEY4 = "Small Key (Angler's Tunnel)",
  MAP4 = "Map (Angler's Tunnel)",
  NIGHTMARE_KEY4 = "Nightmare Key (Angler's Tunnel)",
  STONE_BEAK4 = "Stone Beak (Angler's Tunnel)",
  COMPASS5 = "Compass (Catfish's Maw)",
  KEY5 = "Small Key (Catfish's Maw)",
  MAP5 = "Map (Catfish's Maw)",
  NIGHTMARE_KEY5 = "Nightmare Key (Catfish's Maw)",
  STONE_BEAK5 = "Stone Beak (Catfish's Maw)",
  COMPASS6 = "Compass (Face Shrine)",
  KEY6 = "Small Key (Face Shrine)",
  MAP6 = "Map (Face Shrine)",
  NIGHTMARE_KEY6 = "Nightmare Key (Face Shrine)",
  STONE_BEAK6 = "Stone Beak (Face Shrine)",
  COMPASS7 = "Compass (Eagle's Tower)",
  KEY7 = "Small Key (Eagle's Tower)",
  MAP7 = "Map (Eagle's Tower)",
  NIGHTMARE_KEY7 = "Nightmare Key (Eagle's Tower)",
  STONE_BEAK7 = "Stone Beak (Eagle's Tower)",
  COMPASS8 = "Compass (Turtle Rock)",
  KEY8 = "Small Key (Turtle Rock)",
  MAP8 = "Map (Turtle Rock)",
  NIGHTMARE_KEY8 = "Nightmare Key (Turtle Rock)",
  STONE_BEAK8 = "Stone Beak (Turtle Rock)",
  COMPASS9 = "Compass (Color Dungeon)",
  KEY9 = "Small Key (Color Dungeon)",
  MAP9 = "Map (Color Dungeon)",
  NIGHTMARE_KEY9 = "Nightmare Key (Color Dungeon)",
  STONE_BEAK9 = "Stone Beak (Color Dungeon)",
  INSTRUMENT1 = "Full Moon Cello",
  INSTRUMENT2 = "Conch Horn",
  INSTRUMENT3 = "Sea Lily's Bell",
  INSTRUMENT4 = "Surf Harp",
  INSTRUMENT5 = "Wind Marimba",
  INSTRUMENT6 = "Coral Triangle",
  INSTRUMENT7 = "Organ of Evening Calm",
  INSTRUMENT8 = "Thunder Drum",
  TRADING_ITEM_YOSHI_DOLL = "Yoshi Doll",
  TRADING_ITEM_RIBBON = "Ribbon",
  TRADING_ITEM_DOG_FOOD = "Dog Food",
  TRADING_ITEM_BANANAS = "Bananas",
  TRADING_ITEM_STICK = "Stick",
  TRADING_ITEM_HONEYCOMB = "Honeycomb",
  TRADING_ITEM_PINEAPPLE = "Pineapple",
  TRADING_ITEM_HIBISCUS = "Hibiscus",
  TRADING_ITEM_LETTER = "Letter",
  TRADING_ITEM_BROOM = "Broom",
  TRADING_ITEM_FISHING_HOOK = "Fishing Hook",
  TRADING_ITEM_NECKLACE = "Necklace",
  TRADING_ITEM_SCALE = "Scale",
  TRADING_ITEM_MAGNIFYING_GLASS = "Magnifying Lens",
  BAD_HEART_CONTAINER = "Bad Heart Container",
}

export enum CATEGORIES {
  INVENTORY = "Inventory Items",
  PASSIVE = "Passive Items",
  ENTRANCE_KEY = "Entrance Keys",
  COLLECTIBLE = "Collectibles",
  SONG = "Songs",
  UPGRADES = "Ammo upgrades",
  LIFE = "Life upgrades",
  INSTRUMENT = "Instruments",
  DUNGEON_ONE = "Tail Cave Items",
  DUNGEON_TWO = "Bottle Grotto Items",
  DUNGEON_THREE = "Key Cavern Items",
  DUNGEON_FOUR = "Angler's Tunnel Items",
  DUNGEON_FIVE = "Catfish's Maw Items",
  DUNGEON_SIX = "Face Shrine Items",
  DUNGEON_SEVEN = "Eagle's Tower Items",
  DUNGEON_EIGHT = "Turtle Rock Items",
  DUNGEON_COLOR = "Color Dungeon Items",
  TRADING = "Trade sequence items",
  TRASH = "Trash and Rupees",
}

enum ITEM_TO_CATEGORY_MAP {
  SWORD = CATEGORIES.INVENTORY,
  FEATHER = CATEGORIES.INVENTORY,
  HOOKSHOT = CATEGORIES.INVENTORY,
  BOW = CATEGORIES.INVENTORY,
  BOMB = CATEGORIES.INVENTORY,
  MAGIC_POWDER = CATEGORIES.INVENTORY,
  MAGIC_ROD = CATEGORIES.INVENTORY,
  OCARINA = CATEGORIES.INVENTORY,
  PEGASUS_BOOTS = CATEGORIES.INVENTORY,
  POWER_BRACELET = CATEGORIES.INVENTORY,
  SHIELD = CATEGORIES.INVENTORY,
  SHOVEL = CATEGORIES.INVENTORY,
  ROOSTER = CATEGORIES.INVENTORY,
  TOADSTOOL = CATEGORIES.INVENTORY,
  BOOMERANG = CATEGORIES.INVENTORY,
  TAIL_KEY = CATEGORIES.ENTRANCE_KEY,
  ANGLER_KEY = CATEGORIES.ENTRANCE_KEY,
  FACE_KEY = CATEGORIES.ENTRANCE_KEY,
  BIRD_KEY = CATEGORIES.ENTRANCE_KEY,
  SLIME_KEY = CATEGORIES.ENTRANCE_KEY,
  GOLD_LEAF = CATEGORIES.COLLECTIBLE,
  FLIPPERS = CATEGORIES.PASSIVE,
  BOWWOW = CATEGORIES.PASSIVE,
  SONG1 = CATEGORIES.SONG,
  SONG2 = CATEGORIES.SONG,
  SONG3 = CATEGORIES.SONG,
  BLUE_TUNIC = CATEGORIES.PASSIVE,
  RED_TUNIC = CATEGORIES.PASSIVE,
  MAX_ARROWS_UPGRADE = CATEGORIES.UPGRADES,
  MAX_BOMBS_UPGRADE = CATEGORIES.UPGRADES,
  MAX_POWDER_UPGRADE = CATEGORIES.UPGRADES,
  HEART_CONTAINER = CATEGORIES.LIFE,
  HEART_PIECE = CATEGORIES.LIFE,
  RUPEES_500 = CATEGORIES.TRASH,
  RUPEES_200 = CATEGORIES.TRASH,
  RUPEES_100 = CATEGORIES.TRASH,
  RUPEES_50 = CATEGORIES.TRASH,
  RUPEES_20 = CATEGORIES.TRASH,
  ARROWS_10 = CATEGORIES.TRASH,
  SINGLE_ARROW = CATEGORIES.TRASH,
  SEASHELL = CATEGORIES.COLLECTIBLE,
  MEDICINE = CATEGORIES.PASSIVE,
  GEL = CATEGORIES.TRASH,
  MESSAGE = CATEGORIES.TRASH,
  COMPASS1 = CATEGORIES.DUNGEON_ONE,
  KEY1 = CATEGORIES.DUNGEON_ONE,
  MAP1 = CATEGORIES.DUNGEON_ONE,
  NIGHTMARE_KEY1 = CATEGORIES.DUNGEON_ONE,
  STONE_BEAK1 = CATEGORIES.DUNGEON_ONE,
  COMPASS2 = CATEGORIES.DUNGEON_TWO,
  KEY2 = CATEGORIES.DUNGEON_TWO,
  MAP2 = CATEGORIES.DUNGEON_TWO,
  NIGHTMARE_KEY2 = CATEGORIES.DUNGEON_TWO,
  STONE_BEAK2 = CATEGORIES.DUNGEON_TWO,
  COMPASS3 = CATEGORIES.DUNGEON_THREE,
  KEY3 = CATEGORIES.DUNGEON_THREE,
  MAP3 = CATEGORIES.DUNGEON_THREE,
  NIGHTMARE_KEY3 = CATEGORIES.DUNGEON_THREE,
  STONE_BEAK3 = CATEGORIES.DUNGEON_THREE,
  COMPASS4 = CATEGORIES.DUNGEON_FOUR,
  KEY4 = CATEGORIES.DUNGEON_FOUR,
  MAP4 = CATEGORIES.DUNGEON_FOUR,
  NIGHTMARE_KEY4 = CATEGORIES.DUNGEON_FOUR,
  STONE_BEAK4 = CATEGORIES.DUNGEON_FOUR,
  COMPASS5 = CATEGORIES.DUNGEON_FIVE,
  KEY5 = CATEGORIES.DUNGEON_FIVE,
  MAP5 = CATEGORIES.DUNGEON_FIVE,
  NIGHTMARE_KEY5 = CATEGORIES.DUNGEON_FIVE,
  STONE_BEAK5 = CATEGORIES.DUNGEON_FIVE,
  COMPASS6 = CATEGORIES.DUNGEON_SIX,
  KEY6 = CATEGORIES.DUNGEON_SIX,
  MAP6 = CATEGORIES.DUNGEON_SIX,
  NIGHTMARE_KEY6 = CATEGORIES.DUNGEON_SIX,
  STONE_BEAK6 = CATEGORIES.DUNGEON_SIX,
  COMPASS7 = CATEGORIES.DUNGEON_SEVEN,
  KEY7 = CATEGORIES.DUNGEON_SEVEN,
  MAP7 = CATEGORIES.DUNGEON_SEVEN,
  NIGHTMARE_KEY7 = CATEGORIES.DUNGEON_SEVEN,
  STONE_BEAK7 = CATEGORIES.DUNGEON_SEVEN,
  COMPASS8 = CATEGORIES.DUNGEON_EIGHT,
  KEY8 = CATEGORIES.DUNGEON_EIGHT,
  MAP8 = CATEGORIES.DUNGEON_EIGHT,
  NIGHTMARE_KEY8 = CATEGORIES.DUNGEON_EIGHT,
  STONE_BEAK8 = CATEGORIES.DUNGEON_EIGHT,
  COMPASS9 = CATEGORIES.DUNGEON_COLOR,
  KEY9 = CATEGORIES.DUNGEON_COLOR,
  MAP9 = CATEGORIES.DUNGEON_COLOR,
  NIGHTMARE_KEY9 = CATEGORIES.DUNGEON_COLOR,
  STONE_BEAK9 = CATEGORIES.DUNGEON_COLOR,
  INSTRUMENT1 = CATEGORIES.INSTRUMENT,
  INSTRUMENT2 = CATEGORIES.INSTRUMENT,
  INSTRUMENT3 = CATEGORIES.INSTRUMENT,
  INSTRUMENT4 = CATEGORIES.INSTRUMENT,
  INSTRUMENT5 = CATEGORIES.INSTRUMENT,
  INSTRUMENT6 = CATEGORIES.INSTRUMENT,
  INSTRUMENT7 = CATEGORIES.INSTRUMENT,
  INSTRUMENT8 = CATEGORIES.INSTRUMENT,
  TRADING_ITEM_YOSHI_DOLL = CATEGORIES.TRADING,
  TRADING_ITEM_RIBBON = CATEGORIES.TRADING,
  TRADING_ITEM_DOG_FOOD = CATEGORIES.TRADING,
  TRADING_ITEM_BANANAS = CATEGORIES.TRADING,
  TRADING_ITEM_STICK = CATEGORIES.TRADING,
  TRADING_ITEM_HONEYCOMB = CATEGORIES.TRADING,
  TRADING_ITEM_PINEAPPLE = CATEGORIES.TRADING,
  TRADING_ITEM_HIBISCUS = CATEGORIES.TRADING,
  TRADING_ITEM_LETTER = CATEGORIES.TRADING,
  TRADING_ITEM_BROOM = CATEGORIES.TRADING,
  TRADING_ITEM_FISHING_HOOK = CATEGORIES.TRADING,
  TRADING_ITEM_NECKLACE = CATEGORIES.TRADING,
  TRADING_ITEM_SCALE = CATEGORIES.TRADING,
  TRADING_ITEM_MAGNIFYING_GLASS = CATEGORIES.TRADING,
  BAD_HEART_CONTAINER = CATEGORIES.TRASH,
}

interface ConstructorArgument {
  id: string;
  area: string;
  locationName: string;
  sphere: number | null;
  itemName: keyof typeof ITEM_IDENTIFIER_TO_NAME;
  player: null;
  world: number;
}

export class Item {
  private readonly _name: ITEM_IDENTIFIER_TO_NAME;
  private readonly _identifier: string;
  private readonly _category: CATEGORIES;
  private readonly _locationId: string;
  private readonly _accessible: boolean;
  private readonly _sphere: number | null;

  constructor({ itemName, id, sphere }: ConstructorArgument, accessible: boolean) {
    this._identifier = itemName;
    this._name = ITEM_IDENTIFIER_TO_NAME[itemName];
    this._category = ITEM_TO_CATEGORY_MAP[itemName] as CATEGORIES;
    this._locationId = id;
    this._accessible = accessible;
    this._sphere = sphere;
  }

  getLocation(): Location {
    return useDataStore().getLocationById(this._locationId) as Location;
  }

  get name(): ITEM_IDENTIFIER_TO_NAME {
    return this._name;
  }

  get identifier(): string {
    return this._identifier;
  }

  get category(): CATEGORIES {
    return this._category;
  }

  get locationId(): string {
    return this._locationId;
  }

  get accessible(): boolean {
    return this._accessible;
  }

  get sphere(): number | null {
    return this._sphere;
  }
}
