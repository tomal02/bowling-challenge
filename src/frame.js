"use_strict";

class Frame {
  constructor() {
    const maximumTotal = 10;
    this.pinsKnocked = [];
  }

  rolls(rollOne, rollTwo) {
    this.pinsKnocked = [rollOne, rollTwo];
  }

  total() {
    let total = 0;
    this.pinsKnocked.forEach((pins) => (total += pins));
    return total;
  }
}
