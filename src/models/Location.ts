import type { Item } from "@/models/Item";
import { useDataStore } from "@/stores/data";

interface ConstructorArgument {
  id: string;
  area: string;
  locationName: string;
  sphere: number | null;
  itemName: string;
  player: null;
  world: number;
}

export class Location {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _area: string;
  private readonly _itemIdentifier: string;
  private readonly _sphere: number | null;
  private readonly _accessible: boolean;

  constructor({ id, area, sphere, itemName, locationName }: ConstructorArgument, accessible: boolean) {
    this._id = id;
    this._area = area;
    this._sphere = sphere;
    this._itemIdentifier = itemName;
    this._name = locationName;
    this._accessible = accessible;
  }

  getItem(): Item {
    return useDataStore().getItemByLocationId(this._id) as Item;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get area(): string {
    return this._area;
  }

  get itemIdentifier(): string {
    return this._itemIdentifier;
  }

  get sphere(): number | null {
    return this._sphere;
  }

  get accessible(): boolean {
    return this._accessible;
  }
}
