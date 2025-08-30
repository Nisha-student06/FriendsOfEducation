// Function to load HTML into a container
function loadHTML(id, file) {
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error("Error loading " + file);
        return response.text();
      })
      .then(data => {
        document.getElementById(id).innerHTML = data;
      })
      .catch(err => console.error(err));
}

// Load header and footer
window.addEventListener("DOMContentLoaded", () => {
  loadHTML("header", "header.htm");
  loadHTML("footer", "footer.htm");
});
