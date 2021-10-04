document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#send-frames').addEventListener('submit', (event) => {
    event.preventDefault();
    const frame1 = new Frame([
      document.querySelector('#frame1-roll1').value,
      document.querySelector('#frame1-roll2').value,
    ]);
    document.querySelector('h1').innerText = `${frame1.strikeOrSpare}`;
    console.log(frame1);
  });
});
