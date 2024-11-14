## Kontra.js
- #1 option
- https://straker.github.io/kontra/getting-started
- lightweight, and made specifically for simple games (like pong). You can use sprites for the pong ball/pong paddles, allows you to use different colors, etc. Collisions are also possible for actually hitting the ball. Has tutorials on the website for your convenience.

## p5.js
- https://p5js.org/
- easy to learn, lightweight, simple.

## Architecture

**Game Manager**
- score `p 2`
  `int`  
  Current score of the game. 
- isGameOver `p 1`
  `boolean`  
  Flag indicating if the game is over.
- Paddles `p 0`
  `List<Paddle>`  
  Tracks all 4 paddles.
- Paddle  `p 0`
  `Paddle`  
  Represents a paddle entity.
- gameTime  `p 2`
  `double`  
  The elapsed time during the game.
- gameState  `p 2`
  `Enum`  
  The state of the game: `paused`, `running`, `over`.
- scoreLimit  `p 2`
  `int`  
  The score limit that determines when the game ends.
- scores  `p 1`
  `int[]`  
  Array holding the scores for each player.
- numPlayers  `p 2`
  `int`  
  Number of players in the game.

- initializeGame  `p 0`
    - **Behavior**:Sets all initial conditions for the game
- pause  `p 2`
    - **Behavior**:Pauses the game.
- unpause `p 2`
    - **Behavior**:Unpauses the game.
- endGame `p 1`
    - **Behavior**:Ends the game.
- updateScore `p 1`
    - **Behavior**:Adds points to the score.
- checkGameOver `p 1`
    - **Behavior**:Checks if the game is over.
- resetGame  `p 1`
    - **Behavior**:Resets the score, stage, and other game variables.
- listenForInput `p 0`
    - **Behavior**:Event listener for player input (e.g., up, down movement).
- handleInput `p 0`
    - Handles or reacts to player input.
- draw `p 0`
    - **Behavior**:Renders the paddle, ball, stage, and scoreboard display.


**ball**
- **position**  `p 0`
  `Point`  
  The current position of the ball.
- **color**  `p 2`
  `String`  
  The color of the ball.
- **respawnPoint**  `p 1`
  `Point`  
  The point where the ball respawns after being reset.
- **xspeed**  `p 0`
  `int`  
  The horizontal speed of the ball.
- **yspeed**  `p 0`
  `int`  
  The vertical speed of the ball.
- **radius**  `p 1`
  `int`  
  The radius of the ball.
- **lastHitBy**  `p 2`
  `int`  
  The player or paddle that last hit the ball.

- **resetPosition**  `p 0`
  Resets the position of the ball to the respawn point.
- **checkCollisionWithPaddle**  `p 0`
  Checks for collision between the ball and a paddle.
- **checkCollisionWithWall**  `p 0`
  Checks for collision between the ball and a wall.
- **checkCollisionWithGoal**  `p 0`
  Checks if the ball has collided with the back wall (the goal).
- **bounce**  `p 0`
  Changes the direction of the ball upon collision.
- **updatePosition**  `p 0`
  Updates the position of the ball based on its speed and direction.

**paddle**
- **position**  `p 0`
  `Point`  
  The current position of the paddle.
- **direction**  `p 0`
  `String`  
  The direction of paddle movement (e.g., "up", "down").
- **width**  `p 1`
  `int`  
  The width (dimension) of the paddle.
- **height**  `p 1`
  `int`  
  The height (dimension) of the paddle.
- **yspeed**  `p 0`
  `int`  
  The movement speed of the paddle along the y-axis.

- **move**  `p 0`
  Moves the paddle based on the current direction, checking for collisions.
- **resetPosition**  `p 2`
  Resets the paddle to its spawn point.
- **updatePosition**  `p 0`
  Updates the paddle's position based on its speed and direction.
- **atBoundary**  `p 1`
  Checks if the paddle has hit a wall or boundary.

**player**
- **color**  `p 2`
  `String`  
  The color representing the player.
- **id**  `p 2`
  `int`  
  Identifier for the player (0, 1, 2, 3).
- **respawnPoint** `p 1` 
  `Point`  
  The point where the player respawns.
- **score**  `p 2`
  `int`  
  The player's current score.
- **paddle** `p 0`
  `Paddle`  
  The paddle associated with the player.
- **controls**  `p 0`
  `Map<String, String>`  
  Maps input keys to paddle movement directions (e.g., `{"W": "up", "S": "down"}`).
- **dimensions**  `p 2`
  `int`  
  Width and length of the player's paddle (assumed to be a square or rectangular paddle).

- **updateScore**  `p 2`
  Updates the player's score.

**stage**
- **width** `p 1` 
  `int`  
  The width (dimension) of the stage.
- **length**  `p 1`
  `int`  
  The length (dimension) of the stage.

- **loadStage**  `p 2`
  Loads the stage map or layout.
- **updateScoreBoard**  `p 2`
  Updates the scoreboard, changing the display to reflect current scores.
- **loadScore**  `p 2`
  Loads the scoreboard, displaying the current scores for players.

