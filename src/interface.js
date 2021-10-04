/* eslint-disable radix */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#send-frames').addEventListener('submit', (event) => {
    event.preventDefault();
    const frame1 = new Frame([
      parseInt(document.querySelector('#frame1-roll1').value),
      parseInt(document.querySelector('#frame1-roll2').value),
    ]);
    const frame2 = new Frame([
      parseInt(document.querySelector('#frame2-roll1').value),
      parseInt(document.querySelector('#frame2-roll2').value),
    ]);
    const frame3 = new Frame([
      parseInt(document.querySelector('#frame3-roll1').value),
      parseInt(document.querySelector('#frame3-roll2').value),
    ]);
    const frame4 = new Frame([
      parseInt(document.querySelector('#frame4-roll1').value),
      parseInt(document.querySelector('#frame4-roll2').value),
    ]);
    const frame5 = new Frame([
      parseInt(document.querySelector('#frame5-roll1').value),
      parseInt(document.querySelector('#frame5-roll2').value),
    ]);
    const frame6 = new Frame([
      parseInt(document.querySelector('#frame6-roll1').value),
      parseInt(document.querySelector('#frame6-roll2').value),
    ]);
    const frame7 = new Frame([
      parseInt(document.querySelector('#frame7-roll1').value),
      parseInt(document.querySelector('#frame7-roll2').value),
    ]);
    const frame8 = new Frame([
      parseInt(document.querySelector('#frame8-roll1').value),
      parseInt(document.querySelector('#frame8-roll2').value),
    ]);
    const frame9 = new Frame([
      parseInt(document.querySelector('#frame9-roll1').value),
      parseInt(document.querySelector('#frame9-roll2').value),
    ]);
    const frame10 = new Frame([
      parseInt(document.querySelector('#frame10-roll1').value),
      parseInt(document.querySelector('#frame10-roll2').value),
    ]);

    /* Frame 1 */
    document.querySelector(
      '#frame1-roll1-output'
    ).innerText = `${frame1.pinsKnocked[0]}`;
    document.querySelector(
      '#frame1-roll2-output'
    ).innerText = `${frame1.pinsKnocked[1]}`;
    document.querySelector('#frame1-sos').innerText = `${frame1.strikeOrSpare}`;

    /* Frame 2 */
    document.querySelector(
      '#frame2-roll1-output'
    ).innerText = `${frame2.pinsKnocked[0]}`;
    document.querySelector(
      '#frame2-roll2-output'
    ).innerText = `${frame2.pinsKnocked[1]}`;
    document.querySelector('#frame2-sos').innerText = `${frame2.strikeOrSpare}`;

    /* Frame 3 */
    document.querySelector(
      '#frame3-roll1-output'
    ).innerText = `${frame3.pinsKnocked[0]}`;
    document.querySelector(
      '#frame3-roll2-output'
    ).innerText = `${frame3.pinsKnocked[1]}`;
    document.querySelector('#frame3-sos').innerText = `${frame3.strikeOrSpare}`;

    /* Frame 4 */
    document.querySelector(
      '#frame4-roll1-output'
    ).innerText = `${frame4.pinsKnocked[0]}`;
    document.querySelector(
      '#frame4-roll2-output'
    ).innerText = `${frame4.pinsKnocked[1]}`;
    document.querySelector('#frame4-sos').innerText = `${frame4.strikeOrSpare}`;

    /* Frame 5 */
    document.querySelector(
      '#frame5-roll1-output'
    ).innerText = `${frame5.pinsKnocked[0]}`;
    document.querySelector(
      '#frame5-roll2-output'
    ).innerText = `${frame5.pinsKnocked[1]}`;
    document.querySelector('#frame5-sos').innerText = `${frame5.strikeOrSpare}`;

    /* Frame 6 */
    document.querySelector(
      '#frame6-roll1-output'
    ).innerText = `${frame6.pinsKnocked[0]}`;
    document.querySelector(
      '#frame6-roll2-output'
    ).innerText = `${frame6.pinsKnocked[1]}`;
    document.querySelector('#frame6-sos').innerText = `${frame6.strikeOrSpare}`;

    /* Frame 7 */
    document.querySelector(
      '#frame7-roll1-output'
    ).innerText = `${frame7.pinsKnocked[0]}`;
    document.querySelector(
      '#frame7-roll2-output'
    ).innerText = `${frame7.pinsKnocked[1]}`;
    document.querySelector('#frame7-sos').innerText = `${frame7.strikeOrSpare}`;

    /* Frame 8 */
    document.querySelector(
      '#frame8-roll1-output'
    ).innerText = `${frame8.pinsKnocked[0]}`;
    document.querySelector(
      '#frame8-roll2-output'
    ).innerText = `${frame8.pinsKnocked[1]}`;
    document.querySelector('#frame8-sos').innerText = `${frame8.strikeOrSpare}`;

    /* Frame 9 */
    document.querySelector(
      '#frame9-roll1-output'
    ).innerText = `${frame9.pinsKnocked[0]}`;
    document.querySelector(
      '#frame9-roll2-output'
    ).innerText = `${frame9.pinsKnocked[1]}`;
    document.querySelector('#frame9-sos').innerText = `${frame9.strikeOrSpare}`;

    /* Frame 10 */
    document.querySelector(
      '#frame10-roll1-output'
    ).innerText = `${frame10.pinsKnocked[0]}`;
    document.querySelector(
      '#frame10-roll2-output'
    ).innerText = `${frame10.pinsKnocked[1]}`;
    document.querySelector(
      '#frame10-sos'
    ).innerText = `${frame10.strikeOrSpare}`;
  });
});
