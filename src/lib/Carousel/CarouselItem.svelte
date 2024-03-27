<script>
  export let entry;
</script>

<div class="carousel">
  <p>
    {#if entry.quote !== null}
      {@html entry.quote}
    {/if}
  </p>
  <div class="flex-center-center" >
    {#if entry.image !== null}
      <img class="carousel-avatar" src="{entry.image?.url}?fm=webp&q=80" alt="{entry.image?.description}"/>
    {:else}
      <img class="carousel-avatar" src="{entry.quoteSource?.avatar.url}?fm=webp&q=80" alt="{entry.quoteSource?.avatar.description}"/>
    {/if}
    {#if entry.quoteSource !== null}
      <span>{entry.quoteSource.name}</span>
    {/if}
  </div>
</div>

<style>
  .carousel p {
    font-family: 'PolySans Neutral';
    font-size: 2rem;
    line-height: 2.5rem;
    padding: 0 5rem;
  }

  .carousel span {
    font-family: 'PolySans Neutral';
    font-size: 1.125rem;
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
</style>
