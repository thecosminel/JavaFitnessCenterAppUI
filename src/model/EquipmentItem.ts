import { ItemCondition } from "./enums/ItemCondition";

export class EquipmentItem{
    constructor(
        public id: number,
        public name: string,
        public condition: ItemCondition
    ) {}
}