<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import Field from "./Field.svelte";
    import { browser } from "$app/environment";

    // Game settings
    const squareSize = 600;
    const paddleWidth = 100;
    const paddleThickness = 10;
    const paddleSpeed = 1; // Paddle movement speed in percentage per frame
    const ballSpeedInitial = 0.35; // Initial ball speed

    // Convert paddle dimensions to percentages
    const paddleWidthPercentage = (paddleWidth / squareSize) * 100;
    const paddleThicknessPercentage = (paddleThickness / squareSize) * 100;

    // Paddle positions (0 to 100)
    let paddleTop = 50;
    let paddleBottom = 50;
    let paddleLeft = 50;
    let paddleRight = 50;

    // Autonomous mode flags
    let isTopAutonomous = false;
    let isBottomAutonomous = false;
    let isLeftAutonomous = false;
    let isRightAutonomous = false;

    // Scores
    let scoreTop = 0;
    let scoreBottom = 0;
    let scoreLeft = 0;
    let scoreRight = 0;

    // Ball position and velocity
    interface Position {
        x: number;
        y: number;
    }

    let ballPosition: Position = { x: 50, y: 50 };
    let ballVelocity: Position = { x: ballSpeedInitial, y: ballSpeedInitial };

    // Keyboard state
    let keysPressed: { [key: string]: boolean } = {};

    // Key mappings
    const keyBindings = {
        paddleTop: { left: "q", right: "a" },
        paddleBottom: { left: "l", right: "p" },
        paddleLeft: { up: "z", down: "x" },
        paddleRight: { up: "m", down: "n" },
    };

    // Event handlers
    function handleKeyDown(event: KeyboardEvent): void {
        keysPressed[event.key.toLowerCase()] = true;
    }

    function handleKeyUp(event: KeyboardEvent): void {
        keysPressed[event.key.toLowerCase()] = false;
    }

    // Game loop
    let animationFrame: number;

    function gameLoop(): void {
        movePaddles();
        moveBall();
        animationFrame = requestAnimationFrame(gameLoop);
    }

    function movePaddles(): void {
        // Top Paddle (moves left/right)
        if (isTopAutonomous) {
            // Move paddle to match ball's x position
            paddleTop = ballPosition.x;
            // Keep within bounds
            paddleTop = Math.max(
                paddleWidthPercentage / 2,
                Math.min(100 - paddleWidthPercentage / 2, paddleTop)
            );
        } else {
            if (keysPressed[keyBindings.paddleTop.left]) {
                paddleTop = Math.max(0, paddleTop - paddleSpeed);
            }
            if (keysPressed[keyBindings.paddleTop.right]) {
                paddleTop = Math.min(100, paddleTop + paddleSpeed);
            }
        }

        // Bottom Paddle (moves left/right)
        if (isBottomAutonomous) {
            paddleBottom = ballPosition.x;
            paddleBottom = Math.max(
                paddleWidthPercentage / 2,
                Math.min(100 - paddleWidthPercentage / 2, paddleBottom)
            );
        } else {
            if (keysPressed[keyBindings.paddleBottom.left]) {
                paddleBottom = Math.max(0, paddleBottom - paddleSpeed);
            }
            if (keysPressed[keyBindings.paddleBottom.right]) {
                paddleBottom = Math.min(100, paddleBottom + paddleSpeed);
            }
        }

        // Left Paddle (moves up/down)
        if (isLeftAutonomous) {
            paddleLeft = ballPosition.y;
            paddleLeft = Math.max(
                paddleWidthPercentage / 2,
                Math.min(100 - paddleWidthPercentage / 2, paddleLeft)
            );
        } else {
            if (keysPressed[keyBindings.paddleLeft.up]) {
                paddleLeft = Math.max(0, paddleLeft - paddleSpeed);
            }
            if (keysPressed[keyBindings.paddleLeft.down]) {
                paddleLeft = Math.min(100, paddleLeft + paddleSpeed);
            }
        }

        // Right Paddle (moves up/down)
        if (isRightAutonomous) {
            paddleRight = ballPosition.y;
            paddleRight = Math.max(
                paddleWidthPercentage / 2,
                Math.min(100 - paddleWidthPercentage / 2, paddleRight)
            );
        } else {
            if (keysPressed[keyBindings.paddleRight.up]) {
                paddleRight = Math.max(0, paddleRight - paddleSpeed);
            }
            if (keysPressed[keyBindings.paddleRight.down]) {
                paddleRight = Math.min(100, paddleRight + paddleSpeed);
            }
        }
    }

    function moveBall(): void {
        // Update ball position
        ballPosition.x += ballVelocity.x;
        ballPosition.y += ballVelocity.y;

        // Check collisions with paddles
        checkPaddleCollision();

        // Check if the ball goes off the field
        if (ballPosition.x <= 0) {
            // Ball went off the left side, Right player scores
            scoreRight += 1;
            resetBall();
        } else if (ballPosition.x >= 100) {
            // Ball went off the right side, Left player scores
            scoreLeft += 1;
            resetBall();
        }

        if (ballPosition.y <= 0) {
            // Ball went off the top side, Bottom player scores
            scoreBottom += 1;
            resetBall();
        } else if (ballPosition.y >= 100) {
            // Ball went off the bottom side, Top player scores
            scoreTop += 1;
            resetBall();
        }
    }

    function checkPaddleCollision(): void {
        const paddleEdge = paddleThicknessPercentage;

        // Collision with Top Paddle
        if (ballPosition.y <= paddleEdge && ballVelocity.y < 0) {
            const paddleStart = paddleTop - paddleWidthPercentage / 2;
            const paddleEnd = paddleTop + paddleWidthPercentage / 2;
            if (ballPosition.x >= paddleStart && ballPosition.x <= paddleEnd) {
                // Calculate offset from paddle center
                const offset =
                    (ballPosition.x -
                        (paddleStart + paddleWidthPercentage / 2)) /
                    (paddleWidthPercentage / 2);
                ballVelocity.y = -ballVelocity.y; // Reverse vertical direction
                ballVelocity.x += offset * 0.5; // Adjust horizontal velocity
                ballPosition.y = paddleEdge; // Prevent sticking
            }
        }

        // Collision with Bottom Paddle
        if (ballPosition.y >= 100 - paddleEdge && ballVelocity.y > 0) {
            const paddleStart = paddleBottom - paddleWidthPercentage / 2;
            const paddleEnd = paddleBottom + paddleWidthPercentage / 2;
            if (ballPosition.x >= paddleStart && ballPosition.x <= paddleEnd) {
                const offset =
                    (ballPosition.x -
                        (paddleStart + paddleWidthPercentage / 2)) /
                    (paddleWidthPercentage / 2);
                ballVelocity.y = -ballVelocity.y;
                ballVelocity.x += offset * 0.5;
                ballPosition.y = 100 - paddleEdge; // Prevent sticking
            }
        }

        // Collision with Left Paddle
        if (ballPosition.x <= paddleEdge && ballVelocity.x < 0) {
            const paddleStart = paddleLeft - paddleWidthPercentage / 2;
            const paddleEnd = paddleLeft + paddleWidthPercentage / 2;
            if (ballPosition.y >= paddleStart && ballPosition.y <= paddleEnd) {
                const offset =
                    (ballPosition.y -
                        (paddleStart + paddleWidthPercentage / 2)) /
                    (paddleWidthPercentage / 2);
                ballVelocity.x = -ballVelocity.x;
                ballVelocity.y += offset * 0.5;
                ballPosition.x = paddleEdge; // Prevent sticking
            }
        }

        // Collision with Right Paddle
        if (ballPosition.x >= 100 - paddleEdge && ballVelocity.x > 0) {
            const paddleStart = paddleRight - paddleWidthPercentage / 2;
            const paddleEnd = paddleRight + paddleWidthPercentage / 2;
            if (ballPosition.y >= paddleStart && ballPosition.y <= paddleEnd) {
                const offset =
                    (ballPosition.y -
                        (paddleStart + paddleWidthPercentage / 2)) /
                    (paddleWidthPercentage / 2);
                ballVelocity.x = -ballVelocity.x;
                ballVelocity.y += offset * 0.5;
                ballPosition.x = 100 - paddleEdge; // Prevent sticking
            }
        }

        // Normalize ball speed to maintain consistent gameplay
        const speed = Math.sqrt(ballVelocity.x ** 2 + ballVelocity.y ** 2);
        const normalizedSpeed = ballSpeedInitial / speed;
        ballVelocity.x *= normalizedSpeed;
        ballVelocity.y *= normalizedSpeed;
    }

    function resetBall(): void {
        // Reset ball position to center
        ballPosition = { x: 50, y: 50 };

        // Randomize initial direction
        const angle = Math.random() * 2 * Math.PI;
        const speed = ballSpeedInitial;
        ballVelocity = {
            x: speed * Math.cos(angle),
            y: speed * Math.sin(angle),
        };
    }

    if (browser) {
        onMount(() => {
            window.addEventListener("keydown", handleKeyDown);
            window.addEventListener("keyup", handleKeyUp);
            animationFrame = requestAnimationFrame(gameLoop);
        });

        onDestroy(() => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
            cancelAnimationFrame(animationFrame);
        });
    }
</script>

<div class="container">
    <div class="scoreboard">
        <div
            class="score"
            on:click={() => (isTopAutonomous = !isTopAutonomous)}
            style={"cursor: pointer;" + (isTopAutonomous ? "background-color:blue;" : "")}
        >
            Top: {scoreTop}
        </div>
        <div
            class="score"
            on:click={() => (isBottomAutonomous = !isBottomAutonomous)}
            style={"cursor: pointer;" + (isBottomAutonomous ? "background-color:blue;" : "")}
        >
            Bottom: {scoreBottom}
        </div>
        <div
            class="score"
            on:click={() => (isLeftAutonomous = !isLeftAutonomous)}
            style={"cursor: pointer;" + (isLeftAutonomous ? "background-color:blue" : "")}
        >
            Left: {scoreLeft}
        </div>
        <div
            class="score"
            on:click={() => (isRightAutonomous = !isRightAutonomous)}
            style={"cursor: pointer;" + (isRightAutonomous ? "background-color:blue" : "")}
        >
            Right: {scoreRight}
        </div>
    </div>

    <Field
        {squareSize}
        {paddleWidth}
        {paddleThickness}
        {paddleTop}
        {paddleBottom}
        {paddleLeft}
        {paddleRight}
        {ballPosition}
    />
</div>

<!-- Instructions -->
<div style="color: white; text-align: center; margin-top: 20px;">
    <h3>Controls:</h3>
    <p>
        <strong>Top Paddle:</strong> Q (Left), A (Right)<br />
        <strong>Bottom Paddle:</strong> L (Left), P (Right)<br />
        <strong>Left Paddle:</strong> Z (Up), X (Down)<br />
        <strong>Right Paddle:</strong> M (Up), N (Down)
    </p>
    <p>
        <em>Click on a score to toggle autonomous mode for that paddle.</em>
    </p>
</div>

<style>
    .scoreboard {
        display: flex;
        justify-content: space-around;
        margin-bottom: 10px;
        color: white;
        font-family: Arial, sans-serif;
    }
    .score {
        background: #222;
        padding: 10px;
        border-radius: 5px;
    }
    .container {
        background: #000;
        padding: 20px;
    }
</style>
