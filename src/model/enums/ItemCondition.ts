export enum ItemCondition {
    NEW, GOOD, WORN, BROKEN, UNKNOWN
}

export function getItemConditionString(condition: ItemCondition): string {
    switch (condition) {
      case ItemCondition.NEW:
        return 'New';
      case ItemCondition.GOOD:
        return 'Good';
      case ItemCondition.WORN:
        return 'Worn';
      case ItemCondition.BROKEN:
        return 'Broken';
      case ItemCondition.UNKNOWN:
        return 'Unknown';
      default:
        return 'Unknown';
    }
  }