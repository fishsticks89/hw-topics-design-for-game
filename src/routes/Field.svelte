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
    x: Math.random() * 80 + 10, // Keep away from edges
    y: Math.random() * 80 + 10,
    rotation: Math.random() * 360,
    hue: i * 90, // Spread colors across the spectrum
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
    width: 80px;
    height: 80px;
    opacity: 0.8;
    pointer-events: none;
    animation: float 3s ease-in-out infinite;
    filter: brightness(1.5);
  }

  .unicorn svg {
    width: 100%;
    height: 100%;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotate(var(--rotation));
    }
    50% {
      transform: translateY(-10px) rotate(var(--rotation));
    }
  }

  @keyframes glow {
    0%, 100% {
      filter: brightness(1) hue-rotate(var(--hue));
    }
    50% {
      filter: brightness(1.5) hue-rotate(calc(var(--hue) + 30deg));
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
        --hue: ${unicorn.hue}deg;
        transform: scale(${unicorn.scale});
        animation: float ${3 + unicorn.id}s ease-in-out infinite, glow ${2 + unicorn.id}s ease-in-out infinite;
      `}
    >
      <svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="2">
        <!-- Main head shape -->
        <path d="M30 60 C30 40 40 30 50 30 C60 30 70 35 70 50 C70 60 65 70 55 75 C45 78 35 75 30 60" />
        <!-- Horn -->
        <path d="M52 30 L58 10" stroke-width="3">
          <animate attributeName="stroke" values="white;pink;purple;white" dur="2s" repeatCount="indefinite" />
        </path>
        <!-- Mane waves -->
        <path d="M70 50 C75 45 78 48 80 52">
          <animate attributeName="d" 
            values="M70 50 C75 45 78 48 80 52;M70 50 C75 43 78 46 80 50;M70 50 C75 45 78 48 80 52" 
            dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M68 60 C73 58 76 60 78 65" />
        <path d="M60 70 C65 70 68 72 70 75" />
        <!-- Eyelash -->
        <path d="M45 50 C46 48 48 48 50 48" stroke-width="1.5" />
        <!-- Nostril -->
        <circle cx="35" cy="60" r="1" fill="white" />
      </svg>
    </div>
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