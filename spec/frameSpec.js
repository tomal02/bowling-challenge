describe("Frame", function () {
  it("can store the pins knocked for each roll", function () {
    testFrame = new Frame();
    testFrame.rollOne(9);
    testFrame.rollTwo(0);
    expect(testFrame.pinsKnocked).toBe([9, 0]);
  });
  it("can return the total pins knocked for both rolls", function () {
    testFrame = new Frame();
    testFrame.rollOne(6);
    testFrame.rollTwo(4);
    expect(testFrame.total()).toBe(10);
  });
});
