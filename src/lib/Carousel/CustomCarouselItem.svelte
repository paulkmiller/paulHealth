<script>
  export let entry;
</script>

<div class="custom carousel">
  {#if entry.image !== null}
    <div class="flex-center-center half">
      <img class="carousel-image" src="{entry.image?.url}?fm=webp&q=80" alt="{entry.image?.description}"/>
      {#if entry.quote !== null}
        <p class="quote">{@html entry.quote}</p>
      {/if}
    </div>
  {:else}
    <div class="flex quote">
      {#if entry.quote !== null}
        <p>{@html entry.quote}</p>
      {/if}
      <img class="carousel-avatar" src="{entry.quoteSource?.avatar.url}?fm=webp&q=80" alt="{entry.quoteSource?.avatar.description}"/>
      {#if entry.quoteSource !== null}
        <span>{entry.quoteSource.name}</span>
      {/if}
    </div>
  {/if}

</div>

<style>
  .carousel p {
    font-family: 'PolySans Neutral';
    font-size: 2rem;
    line-height: 2.5rem;
    /* padding: 0 5rem; */
  }

  .carousel span {
    font-family: 'PolySans Neutral';
    font-size: 1.125rem;
  }

  .half {
    background: #fff;
    color: #000;
  }

  .custom .quote {
    padding: 0 2rem;
    text-align: left;
  }

  .carousel-avatar {
    display: inline-block;
    height: 2.5rem;
    width: 2.5em;
    margin: 0 0.75rem;
    border-radius: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .flex-center-center {
    display: flex;
    flex-direction: column;
    height: 100%; /* or any specific height */
  }
  .carousel-image, 
  .quote {
    flex: 0 0 50%;
    max-height: 200px;
  }

  .carousel-image {
    padding: 2.5rem;
    margin-top: 2rem;
  }

</style>
