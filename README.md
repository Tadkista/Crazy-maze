<h1>Maze Game on Canvas</h1>

<p>This is a maze game where the player moves across a canvas, avoiding obstacles in the form of walls, and tries to reach the victory point, represented by a red square. The game features a clone of the player that moves in the opposite direction, adding an extra layer of challenge. The game resets when the player reaches the victory point or when the player and the clone meet.</p>

<h2>Features</h2>

- <h3>One player and a clone:<h3>
  <p>The player moves across the canvas, avoiding obstacles and attempting to reach the victory point. The player's clone moves in the opposite direction (e.g., if the player moves up, the clone moves down).</p>

- <h3>Maze walls:<h3>
  <p>The canvas contains walls that the player must avoid. The game detects collisions with these walls and prevents movement in the direction of the wall.</p>

- <h3>Victory condition:<h3>
  <p>Player wins when they reach the red square, which is located at the clone's starting position (the victory point).</p>

- <h3>Game reset:<h3>
  <p>The game resets if the player reaches the victory point or if the player and the clone meet on the canvas. After the reset, a victory message is displayed, and the game starts over.</p>

<h2>How to Play</h2>

- <h3>Movement:<h3>
  <p>The player moves using the arrow keys or WASD:</p>
  - `W` or `Up Arrow`: Move up<br>
  - `S` or `Down Arrow`: Move down<br>
  - `A` or `Left Arrow`: Move left<br>
  - `D` or `Right Arrow`: Move right<br>

- <h3>Victory point:<h3>
  <p>The goal of the game is to reach the red square at the end of the path (where the clone starts). When the player reaches this point, the game resets, and a victory message is displayed.</p>

- <h3>Clone:<h3>
  <p>The player's clone moves in the opposite direction to the player (e.g., if the player moves up, the clone moves down). The game ends if the player and clone meet.</p>

- <h3>Collisions:<h3>
  <p>If the player or the clone hits a wall, the script prevents further movement in that direction.</p>

<h2>Installation</h2>

1. Clone or download the repository to your device.<br>
2. Open the `maze.html` file in your browser to start playing the game.</p>

