describe("Frame", function () {
  beforeEach(function () {
    testFrame = new Frame();
  });
  it("can store the pins knocked for each roll", function () {
    testFrame.rolls(9, 0);
    expect(testFrame.pinsKnocked).toEqual([9, 0]);
  });
  it("can return the total pins knocked for both rolls", function () {
    testFrame.rolls(10, null);
    expect(testFrame.total()).toBe(10);
  });
  it("can return that a frame contains a strike", function () {
    testFrame.rolls(10, 0);
    expect(testFrame.strikeOrSpare()).toBe("Strike");
  });
  it("can return that a frame contains a spare", function () {
    testFrame.rolls(6, 4);
    expect(testFrame.strikeOrSpare()).toBe("Spare");
  });
  it("can return null when frame contains neither a strike or spare", function () {
    testFrame.rolls(4, 5);
    expect(testFrame.strikeOrSpare()).toEqual(null);
  });
});
