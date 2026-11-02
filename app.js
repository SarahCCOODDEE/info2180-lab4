document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("search-btn");

  btn.addEventListener("click", () => {
    fetch("superheroes.php")
      .then(response => response.text())
      .then(data => alert(data))
      .catch(err => console.error("Error:", err));
  });
});
