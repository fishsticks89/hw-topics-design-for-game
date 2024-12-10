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

  // Compute paddle dimensions in percentages
  const paddleWidthPercentage = (paddleWidth / squareSize) * 100;
  const paddleThicknessPercentage = (paddleThickness / squareSize) * 100;

  const ballSize = 10; // Ball size in pixels

  // Flying image state
  let imagePosition = { x: 0, y: 0 };
  let isImageVisible = false;

  // Function to start flying image animation
  function startFlyingImage() {
    isImageVisible = true;
    imagePosition = { x: 0, y: 0 };

    // Animate image across the screen
    setTimeout(() => {
      imagePosition = { x: 100, y: 100 };
    }, 50); // Small delay to ensure initial position is set

    // Reset visibility after animation
    setTimeout(() => {
      isImageVisible = false;
    }, 3000); // Animation duration
  }

  // Start flying image every 30 seconds
  function initImageAnimation() {
    startFlyingImage();
    setInterval(startFlyingImage, 10000);
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
  .flying-image {
    position: absolute;
    width: 100px;
    height: 100px;
    transition: all 3s ease-in-out;
    opacity: 0.8;
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

  <!-- Flying Image -->
  {#if isImageVisible}
    <img 
      src={flyingImageUrl} 
      alt="Flying image" 
      class="flying-image"
      style="
        left: {imagePosition.x}%;
        top: {imagePosition.y}%;
      "
    />
  {/if}
</div>
