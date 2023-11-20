document.addEventListener("DOMContentLoaded", function () {
  const countSpan = document.getElementById("count");
  let count = 0;

  document.getElementById("increment").addEventListener("click", function () {
    count++;
    countSpan.textContent = count;
  });

  document.getElementById("decrement").addEventListener("click", function () {
    count--;
    countSpan.textContent = count;
  });
});
