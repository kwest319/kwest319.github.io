function searchTaniti() {
    var searchIn = document.getElementById("searchTaniti")
    alert("user searched for \"" + searchIn.value + "\"");
}

function mapInteract() {
    var selectedLocations = document.querySelectorAll('input[type=checkbox]:checked');
    var searched = "";
    selectedLocations.forEach(element => {
        searched += " " + element.getAttribute("name");
    });
    alert("user searched for" + searched);
}