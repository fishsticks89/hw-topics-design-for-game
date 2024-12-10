<script lang="ts">
  export let squareSize: number = 600;
  export let paddleWidth: number = 20;
  export let paddleThickness: number = 10;
  export let paddleTop: number = 50;
  export let paddleBottom: number = 50;
  export let paddleLeft: number = 50;
  export let paddleRight: number = 50;
  export let ballPosition = { x: 50, y: 50 };

  const paddleWidthPercentage = (paddleWidth / squareSize) * 100;
  const paddleThicknessPercentage = (paddleThickness / squareSize) * 100;
  const ballSize = 10;

  // Generate multiple unicorn positions
  const unicorns = Array(4).fill(null).map((_, i) => ({
    id: i,
    x: Math.random() * 80 + 10,
    y: Math.random() * 80 + 10,
    rotation: Math.random() * 360,
    scale: 0.5 + Math.random() * 0.5
  }));
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
    width: 100px;
    height: 100px;
    background-image: url('/unicorn.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    pointer-events: none;
    animation: float 3s ease-in-out infinite;
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotate(var(--rotation)) scale(var(--scale));
    }
    50% {
      transform: translateY(-10px) rotate(var(--rotation)) scale(var(--scale));
    }
  }
</style>

<div class="pong-square" style={`--size: ${squareSize}px`}>
  <!-- Multiple Unicorns -->
  {#each unicorns as unicorn}
    <div 
      class="unicorn"
      style={`
        left: ${unicorn.x}%;
        top: ${unicorn.y}%;
        --rotation: ${unicorn.rotation}deg;
        --scale: ${unicorn.scale};
        animation: float ${3 + unicorn.id}s ease-in-out infinite;
      `}
    />
  {/each}

  <!-- Top paddle -->
  <div
    class="paddle paddle-top"
    style={`width: ${paddleWidthPercentage}%; height: ${paddleThicknessPercentage}%; top: 0; left: calc(${paddleTop}% - ${paddleWidthPercentage / 2}%);`}
  ></div>

  <!-- Bottom paddle -->
  <div
    class="paddle paddle-bottom"
    style={`width: ${paddleWidthPercentage}%; height: ${paddleThicknessPercentage}%; bottom: 0; left: calc(${paddleBottom}% - ${paddleWidthPercentage / 2}%);`}
  ></div>

  <!-- Left paddle -->
  <div
    class="paddle paddle-left"
    style={`width: ${paddleThicknessPercentage}%; height: ${paddleWidthPercentage}%; left: 0; top: calc(${paddleLeft}% - ${paddleWidthPercentage / 2}%);`}
  ></div>

  <!-- Right paddle -->
  <div
    class="paddle paddle-right"
    style={`width: ${paddleThicknessPercentage}%; height: ${paddleWidthPercentage}%; right: 0; top: calc(${paddleRight}% - ${paddleWidthPercentage / 2}%);`}
  ></div>

  <!-- Ball -->
  <div
    class="ball"
    style={`left: calc(${ballPosition.x}% - ${ballSize / 2}px); top: calc(${ballPosition.y}% - ${ballSize / 2}px);`}
  ></div>
</div>