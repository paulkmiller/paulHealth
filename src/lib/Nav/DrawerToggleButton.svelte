<script>
  export let isOpen;
</script>

<button class:open={isOpen} class="toggle-button" on:click aria-label="Button to Open and Close the mobile menu">
  <div class="toggle-button-line" />
  <div class="toggle-button-line" />
  <div class="toggle-button-line" />
</button>

<style>
  .toggle-button {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 24px;
    width: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    margin: 1em 0 1em 0.75em;
    padding: 0;
    box-sizing: border-box;
    box-shadow: none;
    z-index: 10001
  }

  .toggle-button:focus {
    outline: none;
  }


  .toggle-button div {
    position: relative;
    width: 2em;
    height: 4px;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }
  
  :global(.navbar.white .toggle-button div) {
    background: #29397a;
  }

  :global(.navbar.scrolled:not(.white) .toggle-button div) {
    background-color: #fff;
  }

  :global(.navbar.open .toggle-button div) {
    background-color: red;
  }
  
  :global(.navbar.open .toggle-button-line:nth-child(1)) {
    transform: translateY(11px) rotate(45deg);
  }
  
  :global(.navbar.open .toggle-button-line:nth-child(2)) {
    opacity: 0;
  }
  
  :global(.navbar.open .toggle-button-line:nth-child(3)) {
    transform: translateY(-5px) rotate(-45deg);
  }

  :global(.navbar.open.scrolled .toggle-button div) {
    background-color: red !important;
  }

  @media (min-width: 768px) {
    .toggle-button {
      display: none;
    }
  }
  
</style>
