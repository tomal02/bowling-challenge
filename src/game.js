'use_strict';

class Game {
  getScores(frames) {
    let arr = [];
    frames.forEach((item, index) => {
      let total = item.total();
      if (item.strikeOrSpare === 'Strike') {
        arr.push(total + frames[index + 1].total());
      } else if (item.strikeOrSpare === 'Spare') {
        arr.push(total + frames[index + 1].pinsKnocked[0]);
      } else {
        arr.push(total);
      }
    });

    this.scores = arr;
  }
}
