<script>
  import Carousel from 'svelte-carousel';
  import CarouselItem from '$lib/Carousel/CarouselItem.svelte';
  import CustomCarouselItem from '$lib/Carousel/CustomCarouselItem.svelte';
  import FaArrowCircleRight from 'svelte-icons/fa/FaArrowCircleRight.svelte';
  import FaArrowCircleLeft from 'svelte-icons/fa/FaArrowCircleLeft.svelte';
  import ButtonLink from '$lib/Button/ButtonLink.svelte'

  let carousel; // for calling methods of the carousel instance
  let currentPage = 0;

  export let data;

  let quotes = [
    { quote: data.quote1, image: data.image1, quoteSource: data.quoteSource1 },
    { quote: data.quote2, image: data.image2, quoteSource: data.quoteSource2 },
    { quote: data.quote3, image: data.image3, quoteSource: data.quoteSource3 }
  ];

  function handlePageChange(event) {
    currentPage = event.detail;
  }
</script>

{#if data.configuration}
  <div class="container">
    <div class="carousel-wrapper">
      <Carousel
        let:showPrevPage
        let:showNextPage
        autoplay="true"
        autoplayDuration="10000"
        bind:this={carousel}
      >
        <button class="flex-center-center" slot="prev" on:click={showPrevPage}>
          <div class="icon">
            <FaArrowCircleLeft />
          </div>
        </button>
        <button class="flex-center-center" slot="next" on:click={showNextPage}>
          <div class="icon">
            <FaArrowCircleRight />
          </div>
        </button>
        {#each quotes as entry}
          <CarouselItem {entry}  />
        {/each}
      </Carousel>
    </div>
  </div>
{:else}
  <div class="container custom">
    <div class="left-container">
      <div class="top">
        <img src="https://images.ctfassets.net/qhzqj9nbcut3/1zjqDdEWirjNiucHFkZtT4/e219d5c3df350b959e2ae43a4f8ee3f8/redLotus.png?h=250" alt="A logo of a red lotus.">
        <p>Don't just take our word for it...</p>
      </div>
      <div class="bottom">
        <p class:active={currentPage === 0}>For Lorem</p>
        <p class:active={currentPage === 1}>For Ipsum</p>
        <p class:active={currentPage === 2}>For Slipsum</p>
      </div>
    </div>
    <div class="right-container">
      <div class="carousel-wrapper">
        <Carousel
          let:showPrevPage
          let:showNextPage
          autoplay="true"
          autoplayDuration="10000"
          bind:this={carousel}
          on:pageChange={handlePageChange}
        >
          <button class="flex-center-center" slot="prev" on:click={showPrevPage}>
            <div class="icon">
              <FaArrowCircleLeft />
            </div>
          </button>
          <button class="flex-center-center" slot="next" on:click={showNextPage}>
            <div class="icon">
              <FaArrowCircleRight />
            </div>
          </button>
          {#each quotes as entry}
            <CustomCarouselItem {entry} />
          {/each}
        </Carousel>
        <div class="ctaLink">
          <ButtonLink
            text={data.ctaText || 'Learn More'}
            path={data.targetPage ? `${data.targetPage}` : '/contact'}
            color={'#FFF'}
            background_color={'#D93561'}
            ariaText="{data.ctaText}"
            ariaLink="{data.targetPage}"
          />
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .custom.container {
    display: flex;
    position: relative;
    background-color: #29397a;
    color: #fff;
    padding: 6rem 4rem 10rem 4rem;
    margin: 6rem auto;
  }

  .custom .top {
    display: flex;
  }

  .custom .top img {
    height: 40px;
    width: 40px;
  }

  .custom .top p {
    max-width: 180px;
    padding: 0 20px;
    margin: 0;
  }

  .custom .bottom {
    display: flex;
    flex-direction: column;
    text-align: left;
    height: calc(100% - 2.5rem);
    justify-content: center;
    vertical-align: middle;
  }

  .custom .bottom p {
    font-size: 1.75rem;
    color: rgba(173, 235, 239, 0.3);
  }

  .custom .bottom .active {
    color: #ADEBEF;
  }


  .custom .left-container {
    flex: 1;
    max-width: 300px;
  }

  .custom .right-container {
    flex: 2;
    width: calc(100% - 300px);
  }

  .custom .right-container .ctaLink {
    position: absolute;
    bottom: 3rem;
    right: 4rem;
  }

  .custom .right-container .ctaLink :global(a:hover) {
    color: #fff;
  }

  .custom .right-container .ctaLink :global(a) {
    background: #adebef;
    color: #000;
  }

  .custom .carousel-wrapper {
    padding: 0;
  }

  .custom button {
    position: absolute;
    left: 0;
    bottom: -5rem;
  }

  .custom button:last-child {
    left: 3rem;
  }

  .custom :global(svg) {
    color: #adebef;
  }

  .carousel-wrapper {
    margin: 0 auto;
    padding: 6rem 2rem;
    font-size: 1rem;
    text-align: center;
  }

  .carousel-wrapper button{
    background: transparent;
    border: none;
  }

  .icon {
    height: 2rem;
    width: 2rem;
    color: #29397a;
  }

  .icon:hover {
    cursor: pointer;
  }

  .custom :global(.sc-carousel-dots__container) {
    display: none !important;
  }

  @media only screen and (max-width: 550px) { 
    .custom.container {
      padding: 0rem 0rem 10rem 0rem;
    }
    .custom :global(button.flex-center-center[slot="prev"]){
      left: 5rem;
    }

    .custom :global(button.flex-center-center[slot="next"]){
      left: 9rem;
    }
  }

  @media only screen and (max-width: 768px) { 
    .custom .left-container {
      display: none;
    }
    .custom .right-container {
      max-width: 100%;
    }
  }

  @media only screen and (max-width: 991px) { 
    .custom.container {
      max-width: 100%;
      margin: 0;
    }
    .custom :global(.carousel p p) {
      font-size: 1.25rem;
      line-height: 1.5rem;
    }
  }

  @media only screen and (max-width: 1200px) { 
    .custom :global(.carousel p p) {
      font-size: 1.25rem;
      line-height: 1.25rem;
      padding: inherit;
    }
  }
</style>