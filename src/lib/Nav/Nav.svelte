<script>
  import { afterUpdate } from 'svelte'
  import { page } from '$app/stores'
  import LinkItem from '$lib/Nav/LinkItem.svelte'
  import DrawerToggleButton from '$lib/Nav/DrawerToggleButton.svelte'

  export let data
  export let isDropdownOpen
  export let drawerToggle
  export let dropdownClick
  export let show

  let y
  let scrolled = false
  let isNewsPage

  let logoLight = '/pluto_logo.svg';
  let logoDark = '/pluto_logoDark.svg';

  const scrollNavBar = 60

  $: isNewsPage = $page.url.pathname.startsWith('/news')

  afterUpdate(() => {
    if (!isNewsPage) {
      window.onscroll = () => {
        scrollFunction()
      }
    } else {
      window.onscroll = null
    }
  })

  function scrollFunction() {
    if (window.scrollY > scrollNavBar) {
      scrolled = true
    } else {
      scrolled = false
    }
  }
</script>

<svelte:window bind:scrollY={y} />

<nav class="navbar" id="navbar_nav" class:scrolled class:white={isNewsPage} class:open={show}>
  <div class="logo_wrapper">
    <a href="/" aria-label="A link back to the home page">
      <img
        class="{isNewsPage ? 'logoDark' : 'logoLight'} logo"
        src={isNewsPage ? logoDark : logoLight}
        alt="The Paul Health logo."
      />
    </a>
  </div>

  <div class="spacer" />

  <div>
    <ul class="navbar_nav_right">
      {#each data.nav_items as nav_item, index (index)} 
        <LinkItem {nav_item} {isDropdownOpen} {drawerToggle} {dropdownClick} id={index} /> 
      {/each}
    </ul>
  </div>
  <DrawerToggleButton isOpen={isDropdownOpen} on:click={drawerToggle} />
</nav>


<style>
  .logo {
    max-height: 3em;
    max-width: 10rem;
  }

  .navbar {
    position: fixed;
    width: 100%;
    max-width: 2300px;
    background-color: transparent;
    transition: all 0.5s ease-out;
    align-content: center;
    padding: 1rem 2rem;
    opacity: 1;
    z-index: 10001;
  }

  .navbar.open .logo_wrapper {
    opacity: 0;
  }

  .navbar.white {
    position: static;
    background-color: #fff;
  }

  :global(.navbar.white .navbar_nav_right a) {
    color: black;
    letter-spacing: 0.5px;
  }

  :global(.navbar.white .navbar_nav_right a:hover) {
    color: black;
  }

  .scrolled {
    background-color: #29397a;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  }

  .scrolled.open {
    background: transparent;
    box-shadow: none;
  }

  .navbar_nav_right {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  .spacer {
    flex: 1;
  }

  .logo_wrapper {
    margin-left: 0.75em;
  }

  @media (max-width: 768px) {
    .navbar_nav_right {
      display: none;
    }
    .logo {
      max-height: 2em;
    }
  }

  @media (max-width: 820px) {
    .navbar {
      padding: 1rem 2rem;
    }
    /* .navbar_nav_right {
      display: none;
    } */
  }

  @media (max-width: 1440px) {
    .logo {
      max-height: 3em;
      max-width: 10rem;
    }

    .navbar {
      padding: 1rem;
    }
  }
</style>
