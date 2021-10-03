describe('Game', function () {
  it('can return all the scores with the correct bonus added on top', function () {
    testGame = new Game();
    frameNoBonus = new Frame([6, 1]);
    frameStrike = new Frame([10, 0]);
    frameSpare = new Frame([6, 4]);
    testGame.getScores([
      frameSpare,
      frameNoBonus,
      frameStrike,
      frameNoBonus,
      frameNoBonus,
      frameNoBonus,
      frameNoBonus,
      frameNoBonus,
      frameNoBonus,
      frameNoBonus,
    ]);
    expect(testGame.scores).toEqual([16, 7, 17, 7, 7, 7, 7, 7, 7, 7]);
  });
});
