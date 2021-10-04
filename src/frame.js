'use_strict';

class Frame {
  constructor(rolls) {
    const maximumTotal = 10;
    this.pinsKnocked = rolls;
    this.strikeOrSpare = this.strikeOrSpare();
  }

  total() {
    let total = 0;
    this.pinsKnocked.forEach((pins) => {
      total += pins;
    });
    return total;
  }

  strikeOrSpare() {
    if (this.pinsKnocked[0] === 10) {
      return 'Strike';
    }
    if (this.total() === 10) {
      return 'Spare';
    }
    return 'no';
  }
}
