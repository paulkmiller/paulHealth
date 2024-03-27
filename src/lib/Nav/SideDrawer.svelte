<script>
  export let show
  export let data
  export let isDropdownOpen
  export let dropdownClick
  export let drawerToggle
  import LinkItem from '$lib/Nav/LinkItem.svelte'
</script>

<nav class={show}>
  <ul>
    {#each data.nav_items as nav_item, index (index)}
        <LinkItem {nav_item} {isDropdownOpen} {drawerToggle} {dropdownClick} id={index} /> 
    {/each}
  </ul>
</nav>

<style>
  .sideDrawer {
    height: 100%;
    background: #fff;
    box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    transform: translateX(-100%);
    transition: transform 0.3s ease-out;
    overflow-y: scroll;
  }

  .sideDrawer.open {
    transform: translateX(0);
  }

  .sideDrawer ul {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    width: 100%;
    height: 100%;
    list-style: none;
    padding: 0;
  }

  @media (min-width: 769px) {
    .sideDrawer {
      display: none;
    }
  }
</style>
