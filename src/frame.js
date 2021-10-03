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

  strikeOrSpare() {
    if (this.pinsKnocked[0] == 10) {
      return "Strike";
    } else if (this.total() == 10) {
      return "Spare";
    } else {
      return null;
    }
  }
}
