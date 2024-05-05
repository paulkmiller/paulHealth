<script>
  export let delay = 200
  export let aos_delay = 200
  export let aos_anim = "fade-zoom-in"
  export let once = false
  import { onMount } from "svelte"

  let textReveal;

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (once) {
          if (entry.isIntersecting) entry.target.classList.add("reveal");
        } else entry.target.classList.toggle("reveal", entry.isIntersecting);
      });
    });
    observer.observe(textReveal);
  });
</script>

<div bind:this={textReveal} style="position: relative; display: inline-block;">
  <span id="text" style="animation-delay: {delay}ms">
    <span
      data-aos="{aos_anim}"
      data-aos-easing="ease-in-back"
      data-aos-delay="{delay + aos_delay}"
      data-aos-offset="0"
     >
      <slot></slot>
    </span>
  </span>
  <div class="cover_container">
    <div
      id="cover"
      style="animation-delay: {delay}ms"
    />
  </div>
</div>

<style>
  #text {
    opacity: 0;
    transition: opacity 0.5s ease-out;
  }

  .cover_container {
    position: absolute; 
    top: 0; 
    right: 0; 
    bottom: 0; 
    left: 0; 
    overflow: hidden; 
    pointer-events: none;
  }

  #cover {
    position: absolute; 
    top: 0; 
    right: 0; 
    bottom: 0; 
    left: 0; 
    background-color: currentColor; 
    transform: translateZ(0) translateX(-101%);
  }

  :global(.reveal #text) {
    opacity: 1 !important;
  }

  @keyframes slideReveal {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(100%);
    }
  }

  #cover {
    animation: slideReveal 1s forwards;
  }
</style>