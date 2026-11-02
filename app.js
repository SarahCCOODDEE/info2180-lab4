document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("search-btn");
  const input = document.getElementById("search-input");
  const result = document.getElementById("result");

  btn.addEventListener("click", () => {
    const query = encodeURIComponent(input.value.trim());

    fetch(`superheroes.php?query=${query}`)
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.text();
      })
      .then(data => {
        result.innerHTML = data;
      })
      .catch(err => {
        result.innerHTML = "<p class='error'>Something went wrong.</p>";
        console.error(err);
      });
  });
});
