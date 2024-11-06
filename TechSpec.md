## Kontra.js
- #1 option
- https://straker.github.io/kontra/getting-started
- lightweight, and made specifically for simple games (like pong). You can use sprites for the pong ball/pong paddles, allows you to use different colors, etc. Collisions are also possible for actually hitting the ball. Has tutorials on the website for your convenience.

## p5.js
- https://p5js.org/
- easy to learn, lightweight, simple.

## Architecture

- score - int: team's scores
    - **`updateScore`**
    - **Input**: `int points` - The number of points to add.
    - **Behavior**: Adds points to `score` of team 1 or 2.
- hasWon - boolean: indicates if a team has won or not
- hasScored - boolean: indicates if a team scored
- paddles - List<paddles>: list of paddles (1-4)
- numPlayers - int: number of players (up to 4)
- paddlesOnTeam1(2) - List<paddles>: num of paddles/players per team
- ball - ball: instance of ball
- paddle - paddle: instance of paddle
- walls - 2D array of enums: represents location of walls

**for paddles**
- position - point: indicates current position of paddle 
- direction - string: indicates if movement is direction "UP" or "DOWN"
- move - method 
    - **Input**: `string direction` - direction of movement
    - **Behavior**: updates position based on 'direction'
- resetPosition
    - **Input**: 'boolean hasScored' - if a team has scored or not just now
    - **Behavior** resets position of paddle after point is scored

**for ball**
- position - point: indicates current position of paddle 
- direction - string: indicates if movement is direction "UP" or "DOWN"
- move - method 
    - **Input**: `string direction` - direction of movement
    - **Behavior**: updates position based on 'direction'
- resetPosition
    - **Input**: 'boolean hasScored' - if a team has scored or not just now
    - **Behavior** resets position of paddle after point is scored
- collide
    - **Input**: 'boolean collided' - if ball position == paddle position or == wall position
    - **Behavior**: ball bounces