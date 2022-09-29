enum LOGIC {
  casual = "Casual",
  normal = "Normal",
  hard = "Hard",
  glitched = "Glitched",
  hell = "Hell",
}

enum OWLSTATUES {
  none = "None",
  dungeon = "Dungeon",
  overworld = "Overworld",
  both = "Both",
}

enum DUNGEON_ITEMS {
  "standard" = "Standard",
  "smallkeys" = "Small Keys everywhere",
  "localkeys" = "Compass/Maps/Beaks everywhere",
  "localknightmarekey" = "Everything besides Nightmare Keys everywhere",
  "keysanity" = "Keysanity",
  "keysy" = "Doors open",
}

enum ENTRANCE_SUFFLE {
  none = "None",
  simple = "Simple",
  advanced = "Advanced",
  expert = "Expert",
  insanity = "Insanity",
}

enum BOOMERANG_GIFT {
  default = "Default",
  trade = "Trade",
  gift = "Gift",
}

enum STEAL {
  always = "Always",
  never = "Never",
  default = "Default",
}

const GOALS = {
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

enum ACCESSIBILITY_RULE {
  all = "100% Locations",
  goal = "Beatable",
}

enum BOWWOW {
  normal = "Normal",
  always = "Always",
  swordless = "No Sword, beat the game with Bowwow",
}

enum ITEMPOOL {
  normal = "Normal",
  casual = "Easier casual mode",
  pain = "Path of Pain",
  keyup = "More Keys",
}

enum OVERWORLD {
  normal = "Normal",
  dungeondive = "Dungeon Dive",
  nodungeon = "No Dungeons",
}

interface ConstructorArguments {
  input_filename: string;
  output_filename: string;
  dump: any;
  spoilerformat: string;
  spoiler_filename: string;
  test: boolean;
  seed: any;
  romdebugmode: boolean;
  exportmap: boolean;
  emptyplan: any;
  timeout: any;
  log_directory: any;
  plan: any;
  race: boolean;
  logic: keyof typeof LOGIC;
  multiworld: any;
  multiworld_config: any;
  forwardfactor: any;
  heartpiece: boolean;
  seashells: boolean;
  heartcontainers: boolean;
  tradequest: boolean;
  instruments: boolean;
  owlstatues: keyof typeof OWLSTATUES;
  dungeon_items: keyof typeof DUNGEON_ITEMS;
  randomstartlocation: boolean;
  dungeonshuffle: boolean;
  entranceshuffle: keyof typeof ENTRANCE_SUFFLE;
  boss: any;
  miniboss: any;
  doubletrouble: boolean;
  witch: boolean;
  rooster: boolean;
  hpmode: any;
  boomerang: keyof typeof BOOMERANG_GIFT;
  steal: keyof typeof STEAL;
  hardMode: any;
  superweapons: boolean;
  goal: keyof typeof GOALS;
  accessibility_rule: keyof typeof ACCESSIBILITY_RULE;
  bowwow: keyof typeof BOWWOW;
  itempool: keyof typeof ITEMPOOL;
  overworld: keyof typeof OVERWORLD;
  pymod: any;
  gfxmod: any;
  removeFlashingLights: boolean;
  quickswap: any;
  textmode: any;
  removeNagMessages: boolean;
  lowhpbeep: any;
  linkspalette: number;
  music: any;
}

export class Options {
  private readonly _logic: LOGIC;
  private readonly _heartpiece: boolean;
  private readonly _seashells: boolean;
  private readonly _heartcontainers: boolean;
  private readonly _tradequest: boolean;
  private readonly _instruments: boolean;
  private readonly _owlstatues: OWLSTATUES;
  private readonly _dungeonItems: DUNGEON_ITEMS;
  private readonly _randomstartlocation: boolean;
  private readonly _dungeonshuffle: boolean;
  private readonly _entranceshuffle: ENTRANCE_SUFFLE;
  private readonly _witch: boolean;
  private readonly _rooster: boolean;
  private readonly _boomerang: BOOMERANG_GIFT;
  private readonly _steal: STEAL;
  private readonly _goal: typeof GOALS[keyof typeof GOALS];
  private readonly _accessibilityRule: ACCESSIBILITY_RULE;
  private readonly _bowwow: BOWWOW;
  private readonly _itempool: ITEMPOOL;
  private readonly _overworld: OVERWORLD;

  constructor({
    logic,
    heartpiece,
    seashells,
    heartcontainers,
    tradequest,
    instruments,
    owlstatues,
    dungeon_items,
    randomstartlocation,
    dungeonshuffle,
    entranceshuffle,
    witch,
    rooster,
    boomerang,
    steal,
    goal,
    accessibility_rule,
    bowwow,
    itempool,
    overworld,
  }: ConstructorArguments) {
    if (!logic) {
      logic = "normal";
    }
    this._logic = LOGIC[logic];
    this._heartpiece = heartpiece;
    this._seashells = seashells;
    this._heartcontainers = heartcontainers;
    this._tradequest = tradequest;
    this._instruments = instruments;
    this._owlstatues = OWLSTATUES[owlstatues];
    this._dungeonItems = DUNGEON_ITEMS[dungeon_items];
    this._randomstartlocation = randomstartlocation;
    this._dungeonshuffle = dungeonshuffle;
    this._entranceshuffle = ENTRANCE_SUFFLE[entranceshuffle];
    this._witch = witch;
    this._rooster = rooster;
    this._boomerang = BOOMERANG_GIFT[boomerang];
    this._steal = STEAL[steal];
    this._goal = GOALS[goal];
    this._accessibilityRule = ACCESSIBILITY_RULE[accessibility_rule];
    this._bowwow = BOWWOW[bowwow];
    this._itempool = ITEMPOOL[itempool];
    this._overworld = OVERWORLD[overworld];
  }

  get logic(): LOGIC {
    return this._logic;
  }

  get heartpiece(): boolean {
    return this._heartpiece;
  }

  get seashells(): boolean {
    return this._seashells;
  }

  get heartcontainers(): boolean {
    return this._heartcontainers;
  }

  get tradequest(): boolean {
    return this._tradequest;
  }

  get instruments(): boolean {
    return this._instruments;
  }

  get owlstatues(): OWLSTATUES {
    return this._owlstatues;
  }

  get dungeonItems(): DUNGEON_ITEMS {
    return this._dungeonItems;
  }

  get randomstartlocation(): boolean {
    return this._randomstartlocation;
  }

  get dungeonshuffle(): boolean {
    return this._dungeonshuffle;
  }

  get entranceshuffle(): ENTRANCE_SUFFLE {
    return this._entranceshuffle;
  }

  get witch(): boolean {
    return this._witch;
  }

  get rooster(): boolean {
    return this._rooster;
  }

  get boomerang(): BOOMERANG_GIFT {
    return this._boomerang;
  }

  get steal(): STEAL {
    return this._steal;
  }

  get goal(): string {
    return this._goal;
  }

  get accessibilityRule(): ACCESSIBILITY_RULE {
    return this._accessibilityRule;
  }

  get bowwow(): BOWWOW {
    return this._bowwow;
  }

  get itempool(): ITEMPOOL {
    return this._itempool;
  }

  get overworld(): OVERWORLD {
    return this._overworld;
  }
}
