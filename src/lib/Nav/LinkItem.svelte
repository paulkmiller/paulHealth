<script>
  import FaChevronDown from 'svelte-icons/fa/FaChevronDown.svelte'

  export let nav_item
  export let isDropdownOpen
  export let dropdownClick
  export let drawerToggle
  export let id
</script>

<li class="linkItem" id="{id}">
  <ul>
    {#if nav_item.childItemsCollection.items.length >= 1}
      <li class="dropdown dropbtnWrapper">
        <div class="dropbtn">
          <a
            href={nav_item.path}
            class:bgwhite={isDropdownOpen[id]}
            class="dropdownlink"
            on:click={e => dropdownClick(id, nav_item, e)}
            aria-label="Link to the {nav_item.internalName} page."
          >
            {nav_item.internalName}
            <div class:rotated={isDropdownOpen[id]} class="icon">
              <FaChevronDown />
            </div>
          </a>
        </div>
        <div class="dropdown-content" style:display={isDropdownOpen[id] ? 'block' : 'none'}>
          {#each nav_item.childItemsCollection.items as child_item}
            <a
              href={child_item.path}
              class="submenu-link"
              on:click={drawerToggle}
              aria-label="Link to the {child_item.internalName} page.">{child_item.internalName}</a
            >
          {/each}
        </div>
      </li>
    {:else}
      <li>
        <a
          href={nav_item.path}
          on:click={drawerToggle}
          aria-label="Link to the {nav_item.internalName} page."
        >
          {nav_item.internalName}</a
        >
      </li>
    {/if}
  </ul>
</li>


<style>
  .linkItem {
    display: grid;
  }

  li {
    padding: 1rem 0;
    list-style-type: none;
  }

  li a {
    font-family: 'PolySans Slim', Arial, sans-serif;
    font-weight: 500;
    text-decoration: none;
    padding: 2rem 1rem;
    color: #fff;
    letter-spacing: 0.5px;
  }

  li a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .icon {
    width: 0.7rem;
    display: inline-block;
    transition: all 0.25s ease-out;
    transform: translate(2px, 2px);
  }

  .icon :global(svg) {
    margin-top: -0.4rem;
  }

  .rotated {
    transform: rotate(-180deg);
    transform-origin: center center;
  }

  .linkItem ul {
    padding: 0;
  }

  .linkItem .dropdown {
    display: grid;
  }

  .dropdown .dropbtn {
    border: none;
    outline: none;
    color: #fff;
    font-weight: 700;
    box-shadow: none;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
    padding: 0;
  }

  /* Dropdown content (hidden by default) */
  .dropdown-content {
    position: absolute;
    top: 3.5rem;
    background-color: #fff;
    min-width: 10rem;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    color: #29397a;
    display: block;
    background: #fff;
    padding: 0.75rem 1rem;
    text-decoration: none;
    text-align: left;
    font-size: 0.95rem;
    letter-spacing: 0.5px;
    font-weight: lighter;
  }

  .dropdown-content a:hover {
    color: #29397a;
    background-color: #adebef;
  }

  .bgwhite {
    background: #fff;
    color: #29397a;
  }

  @media (max-width: 768px) {
    .dropdown-content a {
      color: #29397a;
      display: block;
      background: #fff;
      border-bottom: 2px solid #6d6d6d;
    }

    .dropdown-content a:first-child {
      border-top: 2px solid #6d6d6d;
    }

    .dropdown-content a:hover {
      background-color: #fff;
      color: #000;
    }

    .linkItem {
      border-top: 2px solid black;
    }

    .linkItem:first-child {
      border-top: 0px solid black;
    }

    .linkItem a {
      color: black;
    }

    .dropdown-content {
      position: relative;
      min-width: 100%;
      box-shadow: none;
      z-index: 1;
    }

    li {
      height: 100%;
    }

    .linkItem li {
      margin: auto;
    }

    .dropdown .dropbtn a,
    li a {
      display: flex;
      align-items: center;
      text-align: left;
      height: 100%;
      font-size: 2rem;
      padding-left: 5rem;
    }

    .dropdown-content {
      top: 0.5rem;
    }

    .icon {
      width: 1.1rem;
      margin-left: 0.33rem;
    }

    .dropdown .dropdown-content a {
      display: flex;
      text-align: center;
      padding-left: 6rem;
      font-size: 1.5rem;
      font-weight: lighter;
    }

    .dropdown .dropdown-content:first-child a:hover {
      background: #fff !important;
      color: #fff !important;
    }
  }
</style>
