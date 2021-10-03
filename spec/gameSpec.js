/* eslint-env jasmine */

describe('Game', function () {
  it('can return all the scores with the correct bonus added on top', function () {
    testGame = new Game();
    testGame.enterScores(
      [6, 0],
      [6, 0],
      [10, null],
      [2, 0],
      [6, 1],
      [4, 1],
      [4, 1],
      [9, 1],
      [6, 1],
      [6, 1]
    );
    expect(testGame.scores()).toBe([6, 6, 12, 2, 7, 5, 5, 16, 7, 7]);
  });
});
