<script context="module">
  import { navigating, page } from '$app/stores'
  import { onMount } from 'svelte';
  import AOS from 'aos';
  import 'aos/dist/aos.css';


  import { getHeroBanner } from '$lib/getters/getHeroBanner'
  import { getPersonCollection } from '$lib/getters/getPersonCollection'
  import Nav from '$lib/Nav/Nav.svelte'
  import SideDrawer from '$lib/Nav/SideDrawer.svelte'
  import Backdrop from '$lib/nav/Backdrop.svelte'

  export async function load() {
    const heroBanners = await getHeroBanner()
    const personCollections = await getPersonCollection()

    return {
      props: {
        heroBanners,
        personCollections,
      },
    }
  }
</script>

<script>
  import Footer from '$lib/Footer.svelte'

  export let data

  let container
  let show = false
  let isLoading = true;

  // required for .open to not be applied on each link click in desktop
  $: $page, show = false

  let drawerClasses = 'sideDrawer'

  function drawerToggleHandler() {
    show = !show
    if (show) {
      drawerClasses = 'sideDrawer open'
    } else {
      drawerClasses = 'sideDrawer'
    }

  }

  let isDropdownOpen = {} 

  const handleDropdownClick = (id, nav_item, e) => {
    e.preventDefault();
    if (nav_item.childItemsCollection.items.length >= 1) {
      isDropdownOpen[id] = !isDropdownOpen[id]; 
    } else {
      drawerToggleHandler();
    }
  }

  function onWindowClick(e) {
    if (!e.target.classList.contains('dropdownlink') && !e.target.classList.contains('submenu-link')) {
      isDropdownOpen = {};
    }
  }

  onMount(async () => {
    isLoading = false;
    AOS.init();
  });

  $: $page.url, AOS.refresh();
</script>

<svelte:window on:click={onWindowClick} />
{#if $navigating || isLoading} 
  <Backdrop />
{:else}
  <div bind:this={container}>
    <div class:open={show}>
      <Nav
        {data}
        drawerToggle={drawerToggleHandler}
        dropdownClick={handleDropdownClick}
        {isDropdownOpen}
        show={show}
      />
    </div>
    <SideDrawer
      {data}
      show={drawerClasses}
      drawerToggle={drawerToggleHandler}
      dropdownClick={handleDropdownClick}
      {isDropdownOpen}
    />
    <main>
      <slot />
      <Footer />
    </main>
  </div>
{/if}

<style global>
  @import './global.css';
</style>
