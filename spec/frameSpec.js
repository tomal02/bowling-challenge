describe("Frame", function () {
  it("can store the pins knocked for each roll", function () {
    testFrame = new Frame();
    testFrame.rolls(9, 0);
    expect(testFrame.pinsKnocked).toEqual([9, 0]);
  });
  it("can return the total pins knocked for both rolls", function () {
    testFrame = new Frame();
    testFrame.rolls(10, null);
    expect(testFrame.total()).toBe(10);
  });
});
