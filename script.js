function getFullView() {
    var elementalID = document.getElementById("elementalID").value;
    var url = "https://gist.githubusercontent.com/fastandlucid/0e80ac73f973a2b25ec1d94da73bf4fe/raw/a24241758506679112c10e9a5f4523a879f84d50/stripped_elementals_data.json";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var jsonData = data.find(elemental => elemental.name === `Elemental #${elementalID}`);

            var fullViewDiv = document.getElementById("fullView");
            if (!jsonData) {
                fullViewDiv.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%;">Not bean revealed... yet...</div>';
                return;
            }

            var imageURLPrefix = jsonData.image.split(".png")[0];
            var newImageURL = imageURLPrefix + "-bigazuki.png";

            fullViewDiv.innerHTML = '<img src="' + newImageURL + '">';
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

function getRandomElemental() {
    var url = "https://gist.githubusercontent.com/fastandlucid/0e80ac73f973a2b25ec1d94da73bf4fe/raw/a24241758506679112c10e9a5f4523a879f84d50/stripped_elementals_data.json";
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            var randomElemental = data[Math.floor(Math.random() * data.length)];
            document.getElementById("elementalID").value = randomElemental.name.split(" ")[1].substring(1);
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