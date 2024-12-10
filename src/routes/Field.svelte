<script lang="ts">
  export let squareSize: number = 600; // Size of the game field in pixels

  export let paddleWidth: number = 20; // Paddle width in pixels
  export let paddleThickness: number = 10; // Thickness of each paddle in pixels

  export let flyingImageUrl: string = 'https://i.imgur.com/8O0hTJr.jpeg'; // Default placeholder

  // Paddle positions (percentage of the field's dimensions)
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
  
  const ballSize = 10; // Ball size in pixels

  // Flying image state
  let imagePosition = { x: 0, y: 0 };
  let isImageVisible = false;
  let imageDirection = 1; // 1 for top-left to bottom-right, -1 for top-right to bottom-left
  let imageRotation = 0; // Rotation angle in degrees

  // Function to start flying image animation
  function startFlyingImage() {
    isImageVisible = true;

    // Set initial position based on direction
    if (imageDirection === 1) {
      imagePosition = { x: 0, y: 0 };
    } else {
      imagePosition = { x: 100, y: 0 };
    }
    // Animate image across the screen
    setTimeout(() => {
      if (imageDirection === 1) {
        imagePosition = { x: 100, y: 100 };
      } else {
        imagePosition = { x: 0, y: 100 };
      }
      imageRotation += 360; // Rotate the image 360 degrees
    }, 50); // Small delay to ensure initial position is set
    // Reset visibility after animation
    // Reset visibility and direction after animation
    setTimeout(() => {
      isImageVisible = false;
      imageDirection *= -1; // Reverse the direction
    }, 3000); // Animation duration of 10 seconds
  }

  // Start flying image every 30 seconds
  function initImageAnimation() {
    startFlyingImage();
    setInterval(startFlyingImage, 5000);
  }

  // Call initialization when component is mounted
  import { onMount } from 'svelte';
  onMount(initImageAnimation);
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
  .flying-image {
    position: absolute;
    width: 100px;
    height: 100px;
    transition: all 3s ease-in-out;
    opacity: 0.8;
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

  <!-- Flying Image -->
  {#if isImageVisible}
    <img 
      src={flyingImageUrl} 
      alt="Flying image" 
      class="flying-image"
      style="
        left: {imagePosition.x}%;
        top: {imagePosition.y}%;
        transform: rotate({imageRotation}deg);
      "
    />
  {/if}
</div>
