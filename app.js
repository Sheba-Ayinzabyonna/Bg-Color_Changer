document
  .getElementById("colorChangeBtn")
  .addEventListener("click", function () {
    const colors = [
      "#f28b82",
      "#fbbc04",
      "#fff475",
      "#ccff90",
      "#a7ffeb",
      "#cbf0f8",
      "#aecbfa",
      "#d7aefb",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  });
