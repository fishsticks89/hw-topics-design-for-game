<script>
    export let squareSize = 400; // Square size in pixels
  
    export let paddleWidth = 25; // Paddle width as a percentage of the square's size
    export let paddleThickness = 10; // Thickness of each paddle in pixels
  
    // Paddle positions (percentage from the center along their respective sides)
    export let paddleTop = 50;
    export let paddleBottom = 50;
    export let paddleLeft = 50;
    export let paddleRight = 50;
  
    // Ball position (x, y) as percentages relative to the square
    export let ballPosition = { x: 50, y: 50 };
  </script>
  
  <style>
    .pong-square {
      position: relative;
      width: var(--size);
      height: var(--size);
      background: #000;
      overflow: hidden;
      border: 2px solid white;
    }
    .paddle {
      position: absolute;
      background: white;
      border-radius: 5px;
    }
    .paddle-top,
    .paddle-bottom {
      height: var(--thickness);
      width: var(--width);
    }
    .paddle-left,
    .paddle-right {
      width: var(--thickness);
      height: var(--width);
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
        --width: {paddleWidth}%;
        --thickness: {paddleThickness}px;
        top: 0;
        left: calc(50% - {paddleWidth / 2}%);
        transform: translateY({paddleTop - 50}%);
      "
    ></div>
  
    <!-- Bottom Paddle -->
    <div
      class="paddle paddle-bottom"
      style="
        --width: {paddleWidth}%;
        --thickness: {paddleThickness}px;
        bottom: 0;
        left: calc(50% - {paddleWidth / 2}%);
        transform: translateY({-paddleBottom + 50}%);
      "
    ></div>
  
    <!-- Left Paddle -->
    <div
      class="paddle paddle-left"
      style="
        --width: {paddleWidth}%;
        --thickness: {paddleThickness}px;
        left: 0;
        top: calc(50% - {paddleWidth / 2}%);
        transform: translateX({paddleLeft - 50}%);
      "
    ></div>
  
    <!-- Right Paddle -->
    <div
      class="paddle paddle-right"
      style="
        --width: {paddleWidth}%;
        --thickness: {paddleThickness}px;
        right: 0;
        top: calc(50% - {paddleWidth / 2}%);
        transform: translateX({-paddleRight + 50}%);
      "
    ></div>
  
    <!-- Ball -->
    <div
      class="ball"
      style="
        left: calc({ballPosition.x}% - 5px);
        top: calc({ballPosition.y}% - 5px);
      "
    ></div>
  </div>
  