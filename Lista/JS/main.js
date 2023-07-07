const searchInput = document.getElementById("searchInput");
const list = document.getElementById("list");
const items = list.getElementsByTagName("li");

searchInput.addEventListener("input", filterList);

function filterList() {
const searchTerm = searchInput.value.toLowerCase();

    for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const text = item.textContent.toLowerCase();

    if (text.includes(searchTerm)) {
        item.style.display = "block";
    } else {
        item.style.display = "none";
    }
    }
}