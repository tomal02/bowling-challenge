describe('Frame', function () {
  it('can store the pins knocked for each roll', function () {
    testFrame = new Frame([9, 0]);

    expect(testFrame.pinsKnocked).toEqual([9, 0]);
  });

  it('can return the total pins knocked for both rolls', function () {
    testFrame = new Frame([10, 0]);

    expect(testFrame.total()).toBe(10);
  });

  it('can return that a frame contains a strike', function () {
    testFrame = new Frame([10, 0]);

    expect(testFrame.strikeOrSpare).toBe('Strike');
  });

  it('can return that a frame contains a spare', function () {
    testFrame = new Frame([6, 4]);

    expect(testFrame.strikeOrSpare).toBe('Spare');
  });

  it('can return null when frame contains neither a strike or spare', function () {
    testFrame = new Frame([4, 5]);

    expect(testFrame.strikeOrSpare).toEqual(null);
  });
});
