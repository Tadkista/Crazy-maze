 const canvas = document.getElementById('gameCanvas');
 const ctx = canvas.getContext('2d');

 canvas.width = window.innerWidth * 0.9;
 canvas.height = window.innerHeight * 0.9;

 const gridSize = 10;
 const cellWidth = canvas.width / gridSize;
 const cellHeight = canvas.height / gridSize;

 const player = {
     x: 11,
     y: 11,
     width: 19,
     height: 19,
     speed: 3
 };
 const player2 = {
     x: 1650,
     y: 800,
     width: 19,
     height: 19,
     speed: 2.5
 };

 const keys = {};

 const walls = [
     { x: 0, y: 0, width: canvas.width, height: 10 },
     { x: 0, y: 0, width: 10, height: canvas.height },
     { x: 0, y: canvas.height - 10, width: canvas.width, height: 10 },
     { x: canvas.width - 10, y: 0, width: 10, height: canvas.height },
     { x: 32, y: 0, width: 10, height: 75 },
     { x: 10, y: 96, width: 221, height: 10 },
     { x: 41 , y: 65, width: 150, height: 10 },
     { x: 221, y: 65, width: 10, height: 31 },
     { x: 65 , y: 33, width: 350, height: 10 },
     { x: 261, y: 41, width: 10, height: 86 },
     { x: 35, y: 126, width: 236, height: 10 },
     { x: 35, y: 166, width: 275, height: 10 },
     { x: 300, y: 65, width: 10, height: 110 },
     { x: 300 , y: 65, width: 370, height: 10 },
     { x: 415, y: 0, width: 10, height: 43 },
     { x: 450, y: 35, width: 10, height: 40 },
     { x: 485, y: 0, width: 10, height: 43 },
     { x: 520, y: 35, width: 10, height: 40 },
     { x: 555, y: 0, width: 10, height: 43 },
     { x: 590, y: 35, width: 10, height: 40 },
     { x: 625, y: 0, width: 10, height: 43 },
     { x: 660, y: 35, width: 10, height: 40 },
     { x: 695, y: 0, width: 10, height: 100 },
     { x: 335 , y: 100, width: 370, height: 10 },
     { x: 300 , y: 136, width: 370, height: 10 },
     { x: 731, y: 35, width: 10, height: 105 },
     { x: 700, y: 136, width: 41, height: 10 },
     { x: 700, y: 145, width: 10, height: 35 },
     { x: 570, y: 145, width: 10, height: 70 },
     { x: 605, y: 170, width: 95, height: 10 },
     { x: 570, y: 209, width: 200, height: 10 },
     { x: 35, y: 176, width: 10, height: 43 },
     { x: 70, y: 201, width: 10, height: 40 },
     { x: 105, y: 176, width: 10, height: 43 },
     { x: 140, y: 201, width: 10, height: 40 },
     { x: 175, y: 176, width: 10, height: 43 },
     { x: 210, y: 201, width: 10, height: 75 },
     { x: 10, y: 241, width: 177, height: 10 },
     { x: 35, y: 276, width: 10, height: 40 },
     { x: 70, y: 241, width: 10, height: 43 },
     { x: 105, y: 276, width: 10, height: 40 },
     { x: 140, y: 241, width: 10, height: 43 },
     { x: 175, y: 276, width: 10, height: 40 },
     { x: 43, y: 306, width: 177, height: 10 },
     { x: 210, y: 200, width: 335, height: 10 },
     { x: 242, y: 233, width: 177, height: 10 },
     { x: 345, y: 233, width: 235, height: 10 },
     { x: 345, y: 170, width: 200, height: 10 },
     { x: 210, y: 266, width: 177, height: 10 },
     { x: 210, y: 306, width: 200, height: 10 },
     { x: 410, y: 233, width: 10, height: 83 },
     { x: 337, y: 170, width: 10, height: 35 },
     { x: 570, y: 200, width: 10, height: 35 },
     { x: 35, y: 310, width: 10, height: 75 },
     { x: 10, y: 406, width: 221, height: 10 },
     { x: 41 , y: 375, width: 150, height: 10 },
     { x: 221, y: 375, width: 10, height: 31 },
     { x: 67 , y: 343, width: 350, height: 10 },
     { x: 261, y: 351, width: 10, height: 86 },
     { x: 445, y: 275, width: 10, height: 43 },
     { x: 480, y: 305, width: 10, height: 40 },
     { x: 515, y: 275, width: 10, height: 43 },
     { x: 550, y: 305, width: 10, height: 40 },
     { x: 585, y: 275, width: 10, height: 43 },
     { x: 620, y: 242, width: 10, height: 150 },
     { x: 415, y: 343, width: 180, height: 10 },
     { x: 415, y: 275, width: 180, height: 10 },
     { x: 300, y: 382, width: 320, height: 10 },
     { x: 270, y: 427, width: 730, height: 10 },
     { x: 762, y: 0, width: 10, height: 75 },
     { x: 740, y: 96, width: 221, height: 10 },
     { x: 771, y: 65, width: 150, height: 10 },
     { x: 951, y: 65, width: 10, height: 31 },
     { x: 795, y: 33, width: 350, height: 10 },
     { x: 991, y: 41, width: 10, height: 86 },
     { x: 765, y: 126, width: 236, height: 10 },
     { x: 765, y: 166, width: 275, height: 10 },
     { x: 1030, y: 65, width: 10, height: 110 },
     { x: 1030, y: 65, width: 370, height: 10 },
     { x: 1145, y: 0, width: 10, height: 43 },
     { x: 1180, y: 35, width: 10, height: 40 },
     { x: 1215, y: 0, width: 10, height: 43 },
     { x: 1250, y: 35, width: 10, height: 40 },
     { x: 1285, y: 0, width: 10, height: 43 },
     { x: 1320, y: 35, width: 10, height: 40 },
     { x: 1355, y: 0, width: 10, height: 43 },
     { x: 1390, y: 35, width: 10, height: 40 },
     { x: 1425, y: 0, width: 10, height: 100 },
     { x: 1065, y: 100, width: 370, height: 10 },
     { x: 1030, y: 136, width: 370, height: 10 },
     { x: 1461, y: 35, width: 10, height: 105 },
     { x: 1430, y: 136, width: 41, height: 10 },
     { x: 1430, y: 145, width: 10, height: 35 },
     { x: 1300, y: 145, width: 10, height: 70 },
     { x: 1335, y: 170, width: 95, height: 10 },
     { x: 1300, y: 205, width: 190, height: 10 },
     { x: 1461, y: 35, width: 190, height: 10 },
     { x: 1495, y: 70, width: 190, height: 10 },
     { x: 1461, y: 105, width: 190, height: 10 },
     { x: 1495, y: 140, width: 190, height: 10 },
     { x: 1440, y: 170, width: 211, height: 10 },
     { x: 1520, y: 205, width: 190, height: 10 },
     { x: 1461, y: 240, width: 190, height: 10 },
     { x: 1495, y: 270, width: 190, height: 10 },
     { x: 1461, y: 305, width: 190, height: 10 },
     { x: 1495, y: 340, width: 190, height: 10 },
     { x: 1461, y: 370, width: 190, height: 10 },
     { x: 1495, y: 405, width: 190, height: 10 },
     { x: 1460, y: 240, width: 10, height: 195 },
     { x: 1360, y: 427, width: 110, height: 10 },
     { x: 765, y: 176, width: 10, height: 43 },
     { x: 800, y: 201, width: 10, height: 40 },
     { x: 835, y: 176, width: 10, height: 43 },
     { x: 870, y: 201, width: 10, height: 40 },
     { x: 905, y: 176, width: 10, height: 43 },
     { x: 940, y: 201, width: 10, height: 75 },
     { x: 630, y: 242, width: 320, height: 10 },
     { x: 765, y: 276, width: 10, height: 40 },
     { x: 800, y: 241, width: 10, height: 43 },
     { x: 835, y: 276, width: 10, height: 40 },
     { x: 870, y: 241, width: 10, height: 43 },
     { x: 905, y: 276, width: 10, height: 40 },
     { x: 773, y: 306, width: 177, height: 10 },
     { x: 940, y: 200, width: 335, height: 10 },
     { x: 972, y: 233, width: 177, height: 10 },
     { x: 1075, y: 233, width: 235, height: 10 },
     { x: 1075, y: 170, width: 200, height: 10 },
     { x: 940, y: 266, width: 177, height: 10 },
     { x: 940, y: 306, width: 200, height: 10 },
     { x: 1140, y: 233, width: 10, height: 83 },
     { x: 1067, y: 170, width: 10, height: 35 },
     { x: 1300, y: 200, width: 10, height: 35 },
     { x: 765, y: 310, width: 10, height: 75 },
     { x: 771, y: 375, width: 150, height: 10 },
     { x: 797, y: 343, width: 350, height: 10 },
     { x: 991, y: 351, width: 10, height: 86 },
     { x: 1175, y: 275, width: 10, height: 43 },
     { x: 1210, y: 305, width: 10, height: 40 },
     { x: 1245, y: 275, width: 10, height: 43 },
     { x: 1280, y: 305, width: 10, height: 40 },
     { x: 1315, y: 275, width: 10, height: 43 },
     { x: 1350, y: 305, width: 10, height: 75 },
     { x: 1145, y: 343, width: 180, height: 10 },
     { x: 1040, y: 380, width: 320, height: 10 },
     { x: 1145, y: 275, width: 180, height: 10 },
     { x: 1040, y: 390, width: 10, height: 15},
     { x: 1075, y: 417, width: 10, height: 15 },
     { x: 1110, y: 390, width: 10, height: 15 },
     { x: 1145, y: 417, width: 10, height: 15 },
     { x: 1180, y: 390, width: 10, height: 15 },
     { x: 1215, y: 417, width: 10, height: 15 },
     { x: 1250, y: 390, width: 10, height: 15 },
     { x: 1295, y: 417, width: 10, height: 15 },
     { x: 1320, y: 390, width: 10, height: 15 },
     { x: 1000, y: 427, width: 360, height: 10 },
     { x: 300, y: 390, width: 10, height: 15},
     { x: 335, y: 417, width: 10, height: 15 },
     { x: 370, y: 390, width: 10, height: 15 },
     { x: 405, y: 417, width: 10, height: 15 },
     { x: 440, y: 390, width: 10, height: 15 },
     { x: 475, y: 417, width: 10, height: 15 },
     { x: 510, y: 390, width: 10, height: 15 },
     { x: 545, y: 417, width: 10, height: 15 },
     { x: 580, y: 390, width: 10, height: 15 },
     { x: 765, y: 385, width: 10, height: 20},
     { x: 800, y: 417, width: 10, height: 15 },
     { x: 835, y: 385, width: 10, height: 20 },
     { x: 870, y: 417, width: 10, height: 15 },
     { x: 905, y: 385, width: 10, height: 20 },
     { x: 656, y: 350, width: 10, height: 85 },
     { x: 692, y: 330, width: 10, height: 75 },
     { x: 727, y: 350, width: 10, height: 85 },
     { x: 630, y: 320, width: 107, height: 10 },
     { x: 660, y: 276, width: 107, height: 10 },
     { x: 1385, y: 370, width: 10, height: 60 },
     { x: 1420, y: 340, width: 10, height: 60 },
     { x: 1360, y: 340, width: 70, height: 10 },
     { x: 1390, y: 305, width: 70, height: 10 },
     { x: 1320, y: 275, width: 110, height: 10 },
     { x: 1350, y: 240, width: 110, height: 10 },
     { x: 32, y: 435, width: 10, height: 75 },
     { x: 10, y: 531, width: 221, height: 10 },
     { x: 41, y: 500, width: 150, height: 10 },
     { x: 221, y: 500, width: 10, height: 31 },
     { x: 65, y: 468, width: 350, height: 10 },
     { x: 261, y: 476, width: 10, height: 86 },
     { x: 35, y: 561, width: 236, height: 10 },
     { x: 35, y: 601, width: 275, height: 10 },
     { x: 300, y: 500, width: 10, height: 110 },
     { x: 300, y: 500, width: 370, height: 10 },
     { x: 415, y: 435, width: 10, height: 43 },
     { x: 450, y: 470, width: 10, height: 40 },
     { x: 485, y: 435, width: 10, height: 43 },
     { x: 520, y: 470, width: 10, height: 40 },
     { x: 555, y: 435, width: 10, height: 43 },
     { x: 590, y: 470, width: 10, height: 40 },
     { x: 625, y: 435, width: 10, height: 43 },
     { x: 660, y: 470, width: 10, height: 40 },
     { x: 695, y: 435, width: 10, height: 100 },
     { x: 335, y: 535, width: 370, height: 10 },
     { x: 300, y: 571, width: 370, height: 10 },
     { x: 731, y: 470, width: 10, height: 105 },
     { x: 700, y: 571, width: 41, height: 10 },
     { x: 700, y: 580, width: 10, height: 35 },
     { x: 570, y: 580, width: 10, height: 70 },
     { x: 605, y: 605, width: 95, height: 10 },
     { x: 570, y: 644, width: 200, height: 10 },
     { x: 35, y: 611, width: 10, height: 43 },
     { x: 70, y: 636, width: 10, height: 40 },
     { x: 105, y: 611, width: 10, height: 43 },
     { x: 140, y: 636, width: 10, height: 40 },
     { x: 175, y: 611, width: 10, height: 43 },
     { x: 210, y: 636, width: 10, height: 75 },
     { x: 10, y: 676, width: 177, height: 10 },
     { x: 35, y: 711, width: 10, height: 40 },
     { x: 70, y: 676, width: 10, height: 43 },
     { x: 105, y: 711, width: 10, height: 40 },
     { x: 140, y: 676, width: 10, height: 43 },
     { x: 175, y: 711, width: 10, height: 40 },
     { x: 43, y: 741, width: 177, height: 10 },
     { x: 210, y: 635, width: 335, height: 10 },
     { x: 242, y: 668, width: 177, height: 10 },
     { x: 345, y: 668, width: 235, height: 10 },
     { x: 345, y: 605, width: 200, height: 10 },
     { x: 210, y: 701, width: 177, height: 10 },
     { x: 210, y: 741, width: 200, height: 10 },
     { x: 410, y: 668, width: 10, height: 83 },
     { x: 337, y: 605, width: 10, height: 35 },
     { x: 570, y: 635, width: 10, height: 35 },
     { x: 35, y: 745, width: 10, height: 50 },
     { x: 90, y: 778, width: 350, height: 10 },
     { x: 445, y: 710, width: 10, height: 43 },
     { x: 480, y: 740, width: 10, height: 40 },
     { x: 515, y: 710, width: 10, height: 43 },
     { x: 550, y: 740, width: 10, height: 40 },
     { x: 585, y: 710, width: 10, height: 43 },
     { x: 620, y: 677, width: 10, height: 150 },
     { x: 415, y: 778, width: 180, height: 10 },
     { x: 415, y: 710, width: 180, height: 10 },
     { x: 762, y: 435, width: 10, height: 75 },
     { x: 740, y: 531, width: 221, height: 10 },
     { x: 771, y: 500, width: 150, height: 10 },
     { x: 951, y: 500, width: 10, height: 31 },
     { x: 795, y: 468, width: 350, height: 10 },
     { x: 991, y: 476, width: 10, height: 86 },
     { x: 765, y: 561, width: 236, height: 10 },
     { x: 765, y: 601, width: 275, height: 10 },
     { x: 1030, y: 500, width: 10, height: 110 },
     { x: 1030, y: 500, width: 370, height: 10 },
     { x: 1145, y: 435, width: 10, height: 43 },
     { x: 1180, y: 470, width: 10, height: 40 },
     { x: 1215, y: 435, width: 10, height: 43 },
     { x: 1250, y: 470, width: 10, height: 40 },
     { x: 1285, y: 435, width: 10, height: 43 },
     { x: 1320, y: 470, width: 10, height: 40 },
     { x: 1355, y: 435, width: 10, height: 43 },
     { x: 1390, y: 470, width: 10, height: 40 },
     { x: 1425, y: 435, width: 10, height: 100 },
     { x: 1065, y: 535, width: 370, height: 10 },
     { x: 1030, y: 571, width: 370, height: 10 },
     { x: 1461, y: 470, width: 10, height: 105 },
     { x: 1430, y: 571, width: 41, height: 10 },
     { x: 1430, y: 580, width: 10, height: 35 },
     { x: 1300, y: 580, width: 10, height: 70 },
     { x: 1335, y: 605, width: 95, height: 10 },
     { x: 1300, y: 640, width: 190, height: 10 },
     { x: 1461, y: 470, width: 190, height: 10 },
     { x: 1495, y: 505, width: 190, height: 10 },
     { x: 1461, y: 540, width: 190, height: 10 },
     { x: 1495, y: 575, width: 190, height: 10 },
     { x: 1440, y: 605, width: 211, height: 10 },
     { x: 1520, y: 640, width: 190, height: 10 },
     { x: 1461, y: 675, width: 190, height: 10 },
     { x: 1495, y: 705, width: 190, height: 10 },
     { x: 1461, y: 740, width: 190, height: 10 },
     { x: 1495, y: 775, width: 190, height: 10 },
     { x: 1460, y: 675, width: 10, height: 195 },
     { x: 765, y: 611, width: 10, height: 43 },
     { x: 800, y: 636, width: 10, height: 40 },
     { x: 835, y: 611, width: 10, height: 43 },
     { x: 870, y: 636, width: 10, height: 40 },
     { x: 905, y: 611, width: 10, height: 43 },
     { x: 940, y: 636, width: 10, height: 75 },
     { x: 630, y: 677, width: 320, height: 10 },
     { x: 765, y: 711, width: 10, height: 40 },
     { x: 800, y: 676, width: 10, height: 43 },
     { x: 835, y: 711, width: 10, height: 40 },
     { x: 870, y: 676, width: 10, height: 43 },
     { x: 905, y: 711, width: 10, height: 40 },
     { x: 773, y: 741, width: 177, height: 10 },
     { x: 940, y: 635, width: 335, height: 10 },
     { x: 972, y: 668, width: 177, height: 10 },
     { x: 1075, y: 668, width: 235, height: 10 },
     { x: 1075, y: 605, width: 200, height: 10 },
     { x: 940, y: 701, width: 177, height: 10 },
     { x: 940, y: 741, width: 200, height: 10 },
     { x: 1140, y: 668, width: 10, height: 83 },
     { x: 1067, y: 605, width: 10, height: 35 },
     { x: 1300, y: 635, width: 10, height: 35 },
     { x: 765, y: 745, width: 10, height: 80 },
     { x: 820, y: 778, width: 330, height: 10 },
     { x: 1175, y: 710, width: 10, height: 43 },
     { x: 1210, y: 740, width: 10, height: 40 },
     { x: 1245, y: 710, width: 10, height: 43 },
     { x: 1280, y: 740, width: 10, height: 40 },
     { x: 1315, y: 710, width: 10, height: 43 },
     { x: 1350, y: 740, width: 10, height: 45 },
     { x: 1145, y: 778, width: 180, height: 10 },
     { x: 1145, y: 710, width: 180, height: 10 },
     { x: 692, y: 765, width: 10, height: 75 },
     { x: 727, y: 785, width: 10, height: 85 },
     { x: 630, y: 755, width: 107, height: 10 },
     { x: 660, y: 711, width: 107, height: 10 },
     { x: 1420, y: 775, width: 10, height: 60 },
     { x: 1360, y: 775, width: 70, height: 10 },
     { x: 1320, y: 710, width: 110, height: 10 },
     { x: 1350, y: 675, width: 110, height: 10 },

 ];
 

 window.addEventListener('keydown', (e) => {
     keys[e.key] = true;
 });

 window.addEventListener('keyup', (e) => {
     keys[e.key] = false;
 });

 const winPlace = {
x: 1650,
y: 800,
width: 20,
height: 20
};
function checkWinCondition() {
return player.x < winPlace.x + winPlace.width &&
    player.x + player.width > winPlace.x &&
    player.y < winPlace.y + winPlace.height &&
    player.y + player.height > winPlace.y;
}
function drawWinPlace() {
ctx.fillStyle = 'red';
ctx.fillRect(winPlace.x, winPlace.y, winPlace.width, winPlace.height);
}
function checkCollisionBetweenPlayers() {
return player.x < player2.x + player2.width &&
    player.x + player.width > player2.x &&
    player.y < player2.y + player2.height &&
    player.y + player.height > player2.y;
}

function movePlayer() {
const prevX = player.x;
const prevY = player.y;

if (keys['ArrowUp'] || keys['w']) player.y -= player.speed;
if (keys['ArrowDown'] || keys['s']) player.y += player.speed;
if (keys['ArrowLeft'] || keys['a']) player.x -= player.speed;
if (keys['ArrowRight'] || keys['d']) player.x += player.speed;

player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
player.y = Math.max(0, Math.min(canvas.height - player.height, player.y));

if (checkCollisionWithWalls()) {
 player.x = prevX;
 player.y = prevY;
}

const prevX2 = player2.x;
const prevY2 = player2.y;

if (keys['ArrowUp'] || keys['w']) player2.y += player2.speed;
if (keys['ArrowDown'] || keys['s']) player2.y -= player2.speed;
if (keys['ArrowLeft'] || keys['a']) player2.x += player2.speed;
if (keys['ArrowRight'] || keys['d']) player2.x -= player2.speed;

player2.x = Math.max(0, Math.min(canvas.width - player2.width, player2.x));
player2.y = Math.max(0, Math.min(canvas.height - player2.height, player2.y));

if (checkCollisionWithWalls2()) {
 player2.x = prevX2;
 player2.y = prevY2;
}

if (checkCollisionBetweenPlayers()) {
 alert("You lose");
 location.reload();
}
if (checkWinCondition()) {
 alert('You win!');
 player.x = 11;
 player.y = 11;
 player2.x = 1650;
 player2.y = 800;
}
}


 function checkCollisionWithWalls() {
     return walls.some(wall => 
         player.x < wall.x + wall.width &&
         player.x + player.width > wall.x &&
         player.y < wall.y + wall.height &&
         player.y + player.height > wall.y 
        
     );
 }
 function checkCollisionWithWalls2() {
     return walls.some(wall => 
         player2.x < wall.x + wall.width &&
         player2.x + player2.width > wall.x &&
         player2.y < wall.y + wall.height &&
         player2.y + player2.height > wall.y 
        
     );
 }

 function drawPlayer() {
     ctx.fillStyle = '#fff';
     ctx.fillRect(player.x, player.y, player.width, player.height);
     ctx.fillStyle = '#000';
     ctx.fillRect(player2.x, player2.y, player2.width, player2.height);
 }

 function drawWalls() {
     ctx.fillStyle = 'black';
     walls.forEach(wall => {
             ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
     });
 }

 function gameLoop() {
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     drawWinPlace();
     if(!checkCollisionBetweenPlayers() && !checkWinCondition()) movePlayer();
     drawWalls();
     drawPlayer();
     
     requestAnimationFrame(gameLoop);
 }

 gameLoop();