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
</style>

<div class="pong-square" style="--size: {squareSize}px">
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
