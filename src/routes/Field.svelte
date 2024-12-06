<script lang="ts">
  export let squareSize: number = 600; // Size of the game field in pixels

  export let paddleWidth: number = 20; // Paddle width in pixels
  export let paddleThickness: number = 10; // Thickness of each paddle in pixels

  // Paddle positions (percentage of the field's dimensions)
  export let paddleTop: number = 50;
  export let paddleBottom: number = 50;
  export let paddleLeft: number = 50;
  export let paddleRight: number = 50;

  export let ballPosition = { x: 50, y: 50 };

  // Compute paddle dimensions in percentages
  const paddleWidthPercentage = (paddleWidth / squareSize) * 100;
  const paddleThicknessPercentage = (paddleThickness / squareSize) * 100;

  const ballSize = 10; // Ball size in pixels
</script>

<style>
  .pong-square {
    position: relative;
    width: var(--size);
    height: var(--size);
    background: #000;
    overflow: hidden;
    border: 2px solid white;
    margin: 0 auto;
  }
  .paddle {
    position: absolute;
    background: white;
    border-radius: 5px;
  }
  .ball {
    position: absolute;
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
  }
  .unicorn {
    position: absolute;
    width: 80px;
    height: 80px;
    opacity: 0.2;
    pointer-events: none;
  }
  .unicorn-1 {
    top: 20%;
    left: 20%;
  }
  .unicorn-2 {
    bottom: 20%;
    right: 20%;
  }
  .unicorn svg {
    width: 100%;
    height: 100%;
  }
</style>

<div class="pong-square" style="--size: {squareSize}px">
  <!-- Decorative Unicorns -->
  <div class="unicorn unicorn-1">
    <svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="2">
      <!-- Simplified unicorn design 1 -->
      <path d="M30 70 L45 65 L60 70 L70 60 L75 45 L70 30"/>
      <path d="M70 30 L60 20 L45 15 L30 20"/>
      <path d="M45 15 L40 5"/>
      <path d="M60 70 L55 85 L60 95"/>
      <path d="M45 65 L40 85 L45 95"/>
    </svg>
  </div>
  
  <div class="unicorn unicorn-2">
    <svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="2">
      <!-- Simplified unicorn design 2 (mirrored) -->
      <path d="M70 70 L55 65 L40 70 L30 60 L25 45 L30 30"/>
      <path d="M30 30 L40 20 L55 15 L70 20"/>
      <path d="M55 15 L60 5"/>
      <path d="M40 70 L45 85 L40 95"/>
      <path d="M55 65 L60 85 L55 95"/>
    </svg>
  </div>

  <!-- Top Paddle -->
  <div
    class="paddle paddle-top"
    style="
      width: {paddleWidthPercentage}%;
      height: {paddleThicknessPercentage}%;
      top: 0;
      left: calc({paddleTop}% - {paddleWidthPercentage / 2}%);
    "
  ></div>

  <!-- Bottom Paddle -->
  <div
    class="paddle paddle-bottom"
    style="
      width: {paddleWidthPercentage}%;
      height: {paddleThicknessPercentage}%;
      bottom: 0;
      left: calc({paddleBottom}% - {paddleWidthPercentage / 2}%);
    "
  ></div>

  <!-- Left Paddle -->
  <div
    class="paddle paddle-left"
    style="
      width: {paddleThicknessPercentage}%;
      height: {paddleWidthPercentage}%;
      left: 0;
      top: calc({paddleLeft}% - {paddleWidthPercentage / 2}%);
    "
  ></div>

  <!-- Right Paddle -->
  <div
    class="paddle paddle-right"
    style="
      width: {paddleThicknessPercentage}%;
      height: {paddleWidthPercentage}%;
      right: 0;
      top: calc({paddleRight}% - {paddleWidthPercentage / 2}%);
    "
  ></div>

  <!-- Ball -->
  <div
    class="ball"
    style="
      left: calc({ballPosition.x}% - {ballSize / 2}px);
      top: calc({ballPosition.y}% - {ballSize / 2}px);
    "
  ></div>
</div>