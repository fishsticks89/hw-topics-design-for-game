## Kontra.js
- #1 option
- https://straker.github.io/kontra/getting-started
- lightweight, and made specifically for simple games (like pong). You can use sprites for the pong ball/pong paddles, allows you to use different colors, etc. Collisions are also possible for actually hitting the ball. Has tutorials on the website for your convenience.

## p5.js
- https://p5js.org/
- easy to learn, lightweight, simple.

## Architecture

**Game Manager**
- score  
  `int`  
  Current score of the game.
- isGameOver
  `boolean`  
  Flag indicating if the game is over.
- Paddles 
  `List<Paddle>`  
  Tracks all 4 paddles.
- Paddle  
  `Paddle`  
  Represents a paddle entity.
- gameTime  
  `double`  
  The elapsed time during the game.
- gameState  
  `Enum`  
  The state of the game: `paused`, `running`, `over`.
- scoreLimit  
  `int`  
  The score limit that determines when the game ends.
- scores  
  `int[]`  
  Array holding the scores for each player.
- numPlayers  
  `int`  
  Number of players in the game.

- initializeGame  
    - **Behavior**:Sets all initial conditions for the game
- pause  
    - **Behavior**:Pauses the game.
- unpause
    - **Behavior**:Unpauses the game.
- endGame
    - **Behavior**:Ends the game.
- updateScore
    - **Behavior**:Adds points to the score.
- checkGameOver
    - **Behavior**:Checks if the game is over.
- resetGame  
    - **Behavior**:Resets the score, stage, and other game variables.
- listenForInput
    - **Behavior**:Event listener for player input (e.g., up, down movement).
- handleInput  
    - Handles or reacts to player input.
- draw
    - **Behavior**:Renders the paddle, ball, stage, and scoreboard display.


**ball**
- **position**  
  `Point`  
  The current position of the ball.
- **color**  
  `String`  
  The color of the ball.
- **respawnPoint**  
  `Point`  
  The point where the ball respawns after being reset.
- **xspeed**  
  `int`  
  The horizontal speed of the ball.
- **yspeed**  
  `int`  
  The vertical speed of the ball.
- **radius**  
  `int`  
  The radius of the ball.
- **lastHitBy**  
  `int`  
  The player or paddle that last hit the ball.

- **resetPosition**  
  Resets the position of the ball to the respawn point.
- **checkCollisionWithPaddle**  
  Checks for collision between the ball and a paddle.
- **checkCollisionWithWall**  
  Checks for collision between the ball and a wall.
- **checkCollisionWithGoal**  
  Checks if the ball has collided with the back wall (the goal).
- **bounce**  
  Changes the direction of the ball upon collision.
- **updatePosition**  
  Updates the position of the ball based on its speed and direction.

**paddle**
- **position**  
  `Point`  
  The current position of the paddle.
- **direction**  
  `String`  
  The direction of paddle movement (e.g., "up", "down").
- **width**  
  `int`  
  The width (dimension) of the paddle.
- **height**  
  `int`  
  The height (dimension) of the paddle.
- **yspeed**  
  `int`  
  The movement speed of the paddle along the y-axis.

- **move**  
  Moves the paddle based on the current direction, checking for collisions.
- **resetPosition**  
  Resets the paddle to its spawn point.
- **updatePosition**  
  Updates the paddle's position based on its speed and direction.
- **atBoundary**  
  Checks if the paddle has hit a wall or boundary.

**player**
- **color**  
  `String`  
  The color representing the player.
- **id**  
  `int`  
  Identifier for the player (0, 1, 2, 3).
- **respawnPoint**  
  `Point`  
  The point where the player respawns.
- **score**  
  `int`  
  The player's current score.
- **paddle**  
  `Paddle`  
  The paddle associated with the player.
- **controls**  
  `Map<String, String>`  
  Maps input keys to paddle movement directions (e.g., `{"W": "up", "S": "down"}`).
- **dimensions**  
  `int`  
  Width and length of the player's paddle (assumed to be a square or rectangular paddle).

- **updateScore**  
  Updates the player's score.

**stage**
- **width**  
  `int`  
  The width (dimension) of the stage.
- **length**  
  `int`  
  The length (dimension) of the stage.

- **loadStage**  
  Loads the stage map or layout.
- **updateScoreBoard**  
  Updates the scoreboard, changing the display to reflect current scores.
- **loadScore**  
  Loads the scoreboard, displaying the current scores for players.

