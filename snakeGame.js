const canvas = document.getElementById('canvasSnake');
const context = canvas.getContext("2d");

const backgroundImage = new Image();
backgroundImage.src = "https://ae01.alicdn.com/kf/HTB1sPGkRpXXXXXUaXXXq6xXFXXXF/5x7FT-Cartoon-Tropical-Forest-Palm-Leaves-Jungles-Custom-Photo-Studio-Backdrop-Background-Vinyl-220cm-x-150cm.jpg";
const rand = function(num) {
    return Math.floor(Math.random() * num) + 1;
};
const img1 = new Image();
img1.src = "https://vignette4.wikia.nocookie.net/moviepedia/images/5/59/Maurice_in_Madagascar.png/revision/latest?cb=20150205223409";
