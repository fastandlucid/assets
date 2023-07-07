function getFullView() {
    var elementalID = document.getElementById("elementalID").value;
    var url = "https://raw.githubusercontent.com/fastandlucid/assets/main/stripped_data.json";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var jsonData = data.find(elemental => elemental.name === elementalID);

            var fullViewDiv = document.getElementById("fullView");
            if (!jsonData) {
                fullViewDiv.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%;">Not bean revealed... yet...</div>';
                return;
            }

            var newImageURL = "https://elementals-images.azuki.com/" + jsonData.image + "-bigazuki.png";
            fullViewDiv.innerHTML = '<img src="' + newImageURL + '">';
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

function getRandomElemental() {
    var url = "https://raw.githubusercontent.com/fastandlucid/assets/main/stripped_data.json";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var randomElemental = data[Math.floor(Math.random() * data.length)];
            document.getElementById("elementalID").value = randomElemental.name;
            getFullView();
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

document.getElementById('randomButton').addEventListener('click', function() {
    const colors = ['3d3431', 'f4ebdb', '715381', 'b53c46', 'a09d99', '452d30', 'bf635d', 'd7d5ea', 'dea6c6', '403e51', '84c7b0', 'b53c46', '7e7c58', '7885dd', '363749', 'b3c6d5', '462e31', 'c09378', 'a09d99', '7f625c', 'eff2f1', '50568e'];
    let i = 0;

    function changeColor() {
        if (i < colors.length) {
            document.getElementById('randomButton').style.backgroundColor = '#' + colors[i];
            i++;
            setTimeout(changeColor, 70);  // Change color every 0.1 seconds (100 milliseconds)
        } else {
            document.getElementById('randomButton').style.backgroundColor = 'transparent';  // Reset to transparent after animation
        }
    }

    changeColor();
});