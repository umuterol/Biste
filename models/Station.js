export default class Station{
  constructor(id, items, active = true) {
    this.id = id;
    this.items = items;
    this.active = active;
    this.itemsCount = items.length;
    this.bikeCount = this.setBikeCount();
    this.parkCount = this.itemsCount - this.bikeCount;
  }

  setBikeCount() {
    return this.items.filter((sItem) => sItem.bike).length;
  }
}
