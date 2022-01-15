const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    const x = e.clientX; // mouse coordinates относительно окна
    const y = e.clientY;

    const rect = button.getBoundingClientRect();

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = `${y - rect.y}px`;
    circle.style.left = `${x - rect.x}px`;

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 5000);
  });
});
