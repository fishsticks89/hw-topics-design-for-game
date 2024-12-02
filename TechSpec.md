# Technical Specification for Four-Player Pong Game

## Overview

This technical specification outlines the architecture, components, and functionality of a four-player pong game implemented using Svelte and TypeScript. The game features paddles on all four sides of a square playing field, a moving ball, autonomous paddle modes, and a scoring system. Players control paddles via keyboard inputs, and the game is designed for both single and multiplayer experiences.

## Architecture

The game consists of two main Svelte components:

1. **Main Game Component** (`App.svelte`): Manages game logic, state, and user interactions.
2. **Field Component** (`Field.svelte`): Renders the visual elements of the game, including the paddles and the ball.

## Components

### 1. Main Game Component (`App.svelte`)

#### Game Settings

- **`squareSize`** (`number`): Size of the game field in pixels (default: `600`).
- **`paddleWidth`** (`number`): Width of the paddles in pixels (default: `100`).
- **`paddleThickness`** (`number`): Thickness of the paddles in pixels (default: `10`).
- **`paddleSpeed`** (`number`): Paddle movement speed as a percentage per frame (default: `1`).
- **`ballSpeedInitial`** (`number`): Initial speed of the ball (default: `0.35`).

#### Computed Percentages

- **`paddleWidthPercentage`** (`number`): `(paddleWidth / squareSize) * 100`.
- **`paddleThicknessPercentage`** (`number`): `(paddleThickness / squareSize) * 100`.

#### Paddle Positions (0 to 100%)

- **`paddleTop`** (`number`): Position of the top paddle (default: `50`).
- **`paddleBottom`** (`number`): Position of the bottom paddle (default: `50`).
- **`paddleLeft`** (`number`): Position of the left paddle (default: `50`).
- **`paddleRight`** (`number`): Position of the right paddle (default: `50`).

#### Autonomous Mode Flags

- **`isTopAutonomous`** (`boolean`): Top paddle autonomous mode (default: `false`).
- **`isBottomAutonomous`** (`boolean`): Bottom paddle autonomous mode (default: `false`).
- **`isLeftAutonomous`** (`boolean`): Left paddle autonomous mode (default: `false`).
- **`isRightAutonomous`** (`boolean`): Right paddle autonomous mode (default: `false`).

#### Scores

- **`scoreTop`** (`number`): Top player's score (default: `0`).
- **`scoreBottom`** (`number`): Bottom player's score (default: `0`).
- **`scoreLeft`** (`number`): Left player's score (default: `0`).
- **`scoreRight`** (`number`): Right player's score (default: `0`).

#### Ball State

- **`ballPosition`** (`{ x: number; y: number }`): Ball's current position (default: `{ x: 50, y: 50 }`).
- **`ballVelocity`** (`{ x: number; y: number }`): Ball's current velocity (initialized in `resetBall()`).

#### Keyboard State

- **`keysPressed`** (`{ [key: string]: boolean }`): Tracks the state of pressed keys.

#### Key Bindings

```typescript
const keyBindings = {
  paddleTop: { left: "q", right: "a" },
  paddleBottom: { left: "l", right: "p" },
  paddleLeft: { up: "z", down: "x" },
  paddleRight: { up: "m", down: "n" },
};
```

#### Event Handlers

- **`handleKeyDown(event: KeyboardEvent): void`**: Updates `keysPressed` when a key is pressed.
- **`handleKeyUp(event: KeyboardEvent): void`**: Updates `keysPressed` when a key is released.

#### Game Loop Functions

- **`gameLoop(): void`**: Main game loop executed on each animation frame.
- **`movePaddles(): void`**: Updates paddle positions based on user input or autonomous mode.
- **`moveBall(): void`**: Updates ball position and checks for collisions and scoring.
- **`checkPaddleCollision(): void`**: Detects and handles collisions between the ball and paddles.
- **`resetBall(): void`**: Resets the ball's position and velocity after a score.

#### Lifecycle Hooks

- **`onMount()`**: Initializes event listeners and starts the game loop.
- **`onDestroy()`**: Cleans up event listeners and stops the game loop.

### 2. Field Component (`Field.svelte`)

#### Props

- **`squareSize`** (`number`): Size of the game field in pixels.
- **`paddleWidth`** (`number`): Width of the paddles in pixels.
- **`paddleThickness`** (`number`): Thickness of the paddles in pixels.
- **`paddleTop`**, **`paddleBottom`**, **`paddleLeft`**, **`paddleRight`** (`number`): Paddle positions.
- **`ballPosition`** (`{ x: number; y: number }`): Ball's current position.

#### Computed Values

- **`paddleWidthPercentage`** (`number`): Computed from props.
- **`paddleThicknessPercentage`** (`number`): Computed from props.
- **`ballSize`** (`number`): Ball size in pixels (default: `10`).

#### Template Structure

- **Game Field**: A square container representing the playing area.
- **Paddles**: Four paddles positioned on each side of the field.
- **Ball**: A circle representing the ball, positioned based on `ballPosition`.

## Game Mechanics

### Paddle Movement

- **User-Controlled Paddles**: Move based on keyboard inputs defined in `keyBindings`.
- **Autonomous Paddles**: Automatically align with the ball's position along their movement axis.
- **Movement Constraints**: Paddles cannot move beyond the boundaries of the field.

### Ball Movement

- **Position Update**: Ball's position is updated each frame based on its velocity.
- **Collision Detection**: Ball can collide with paddles and field boundaries.
- **Velocity Normalization**: After collisions, the ball's speed is normalized to maintain consistent gameplay.

### Collision Handling

- **Paddle Collisions**: Reverse the ball's velocity along the axis perpendicular to the paddle.
- **Boundary Collisions**: Result in a score for the opposing player and reset the ball.

### Scoring

- **Score Update**: When the ball exits the field, the opposing player's score increments.
- **Score Display**: Scores are displayed on the scoreboard with click-to-toggle autonomous mode.

### Autonomous Mode

- **Activation**: Toggled by clicking on the player's score on the scoreboard.
- **Behavior**: Paddle automatically follows the ball along its movement axis.

## User Interface

### Scoreboard

- **Layout**: Displays scores for all four players.
- **Interactivity**: Clicking on a score toggles autonomous mode for that paddle.
- **Visual Feedback**: Autonomous mode is indicated by a background color change.

### Controls Display

- **Instructions**: Provides keyboard controls for each paddle.
- **Autonomous Mode Note**: Informs players about the autonomous mode toggle feature.

### Styling

- **Game Field**: Black background with a white border.
- **Paddles**: White rectangles positioned on each side of the field.
- **Ball**: White circle that moves within the field.
- **Scoreboard and Controls**: Styled for readability and user interaction.

## Controls

- **Top Paddle**: Q (Left), A (Right)
- **Bottom Paddle**: L (Left), P (Right)
- **Left Paddle**: Z (Up), X (Down)
- **Right Paddle**: M (Up), N (Down)

## Event Handling

- **Keyboard Events**: Captured globally to control paddle movement.
- **Click Events**: Used to toggle autonomous mode for paddles via the scoreboard.

## Animation and Timing

- **Game Loop**: Uses `requestAnimationFrame` for smooth animations.
- **Background Color Change**: An interval changes the background color randomly every 50 milliseconds (for visual effect).

## Development Considerations

### Performance

- **Efficient Rendering**: Components are optimized to update only when necessary.
- **Resource Management**: Event listeners and intervals are properly cleaned up.

### Responsiveness

- **Percentage-Based Sizing**: Game elements use percentages for positions and sizes, allowing for scalability.

### Accessibility

- **Keyboard Controls**: Ensures the game is playable without a mouse.
- **Visual Cues**: Background color changes and paddle highlights enhance gameplay feedback.

## Future Enhancements

- **Difficulty Levels**: Adjust paddle speed and ball speed for varying difficulty.
- **Multiplayer Networking**: Enable online multiplayer capabilities.
- **Mobile Support**: Implement touch controls for mobile devices.
- **Sound Effects**: Add audio feedback for collisions and scoring.
- **Power-Ups**: Introduce items that affect gameplay when collected.

## Conclusion

This four-player pong game combines interactive gameplay with customizable controls and autonomous features. The architecture leverages Svelte's reactivity and TypeScript's type safety to create a responsive and engaging game experience. The modular design allows for easy maintenance and future expansion.
