# MVP Implementation Plan

## **MESSAGE TO THE PEASANT THAT INHERITED THIS PROJECT**

Please see the bottom of the file.

## Day 1-2 (Core Framework)

- Focusing on setting up the core game elements and basic functionality.BackGround paddles and ball without any collision detection or scoring system or movement.

*implemented*
- ## Paddles

Priority: P0
Implementation Timeline: Day 1-2

Core Requirements:

Define four paddle entities, each representing a player.
Ensure each paddle is initialized with position and movement attributes.
Technical Components:

Paddle class/object to manage paddle attributes (e.g., position, direction).
Initialize a List `<Paddle>` in Game Manager to track all paddles.
Simplifications:

Default all paddles to identical sizes and speeds.
Dependencies:

Requires initializeGame function in Game Manager to set paddle positions.

*implemented*
## initializeGame

Priority: P0
Implementation Timeline: Day 1-2

Core Requirements:

Set all initial conditions, including paddle and ball positions.
Reset scores and other game variables.
Technical Components:

Initialize paddle positions and ball position.
Set default scores to 0 for each player.
Simplifications:

No additional settings or configurations (e.g., fixed starting positions for MVP).
Dependencies:

None.

*implemented*
## listenForInput

Priority: P0
Implementation Timeline: Day 1-2

Core Requirements:

Set up event listeners for player input to control paddles.
Technical Components:

Attach keyboard event listeners for up/down or custom controls for each paddle.
Simplifications:

Basic key binding without customizable controls.
Dependencies:

Requires Paddles to be initialized.

*implemented*
## handleInput

Priority: P0
Implementation Timeline: Day 1-2

Core Requirements:

Respond to input events and update paddle movement.
Technical Components:

Function that interprets keyboard events to move paddles in their respective directions.
Simplifications:

Only handles basic up/down movement; no diagonal or complex moves.
Dependencies:

Depends on listenForInput to capture player input.

*implemented*
## draw

Priority: P0
Implementation Timeline: Day 1-2

Core Requirements:

Render paddles, ball, and basic game elements on the screen.
Technical Components:

Rendering function to draw paddles, ball, and field boundaries.
Simplifications:

Minimalist design for paddles and ball without animations or effects.
Dependencies:

Requires Paddles and Ball to be initialized.

*implemented*
## Ball Position and Movement

Priority: P0
Implementation Timeline: Day 1-2

Core Requirements:

Track ball’s current position.
Define xspeed and yspeed to control movement.
Technical Components:

Ball object with position attributes (position, xspeed, yspeed).
Update function to change position based on speed.
Simplifications:

Set constant speed for simplicity.
Dependencies:

initializeGame for setting initial ball position.

## Day 3-4 (Essential Features)

- Focus on implementing core game mechanics, such as collision detection, scoring, and basic ball movement.

*implemented*
## checkCollisionWithPaddle

Priority: P0
Implementation Timeline: Day 3-4

Core Requirements:

Detect collisions between ball and paddles.
Technical Components:

Collision detection function that checks for overlap between ball and paddle.
Simplifications:

Basic rectangle-based collision; no advanced physics.
Dependencies:

Depends on Ball and Paddles initialization.

*implemented*
## checkCollisionWithGoal

Priority: P0
Implementation Timeline: Day 3-4

Core Requirements:

Detect if the ball exits a player’s side (goal).
Technical Components:

Goal detection function that determines which side the ball exited.
Simplifications:

Basic detection without complex scoring zones.
Dependencies:

Depends on Ball and scoring system (updateScore).

*implemented*
## bounce

Priority: P0
Implementation Timeline: Day 3-4

Core Requirements:

Change the ball’s direction upon paddle or wall collision.
Technical Components:

Function to invert xspeed or yspeed based on collision.
Simplifications:

Simple inversion without angle variations.
Dependencies:

Relies on checkCollisionWithPaddle and checkCollisionWithWall.

*implemented*
## updatePosition (Ball and Paddle)

Priority: P0
Implementation Timeline: Day 1-2 (Paddle), Day 3-4 (Ball)

Core Requirements:

Update positions of paddles and ball based on input and speed.
Technical Components:

Functions within Ball and Paddle classes to update position attributes.
Simplifications:

Linear movement; no complex physics.
Dependencies:

Relies on handleInput for paddle position, bounce for ball movement.

## Day 5 (Enhancement & Testing)

*implemented*
- Revision and testing of the game to ensure all core features are functioning correctly. Implement any additional features or enhancements based on time and resources available.

## **For the code peasant**
### Unicorns
Priority: P0
Unicorns should be added to the game
Core Requirements:
Unicorns. Multiple.
Dependencies:
Happiness. Joy.
