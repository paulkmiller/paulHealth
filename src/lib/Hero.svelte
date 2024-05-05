<script>
  import ButtonLink from '$lib/Button/ButtonLink.svelte'
  import TextWithLineBreaks from '$lib/TextWithLineBreaks.svelte';
  import TextReveal from '$lib/TextReveal.svelte';

  export let data
</script>

{#if data}
  <section class="heroBanner">
    <img
      class="heroImage"
      src="{data.image.url}?fm=webp&q=80"
      alt={data.image.description}
    />
    <div class={data.contentStyle ? 'content-left' : 'content-right'}>
      {#if data.subline}
      <span class="subline">
        <TextReveal delay={300} aos_delay={100} text={data.headline}>
          {data.subline}
        </TextReveal>
      </span>
        {/if}
      <h1 class="headline">
        <TextReveal delay={600} aos_delay={200} text={data.headline}>
          <TextWithLineBreaks inputText={data.headline} />
        </TextReveal>
      </h1>
        <TextReveal delay={900} aos_delay={300} text={data.headline}>
          <div class="content">{@html data.bodyText}</div>
        </TextReveal>
      {#if data.targetPage}
        <ButtonLink
          path={data.targetPage}
          text={data.ctaText}
          background_color={'#fff'}
          ariaText="{data.ctaText}"
          ariaLink="{data.targetPage}"
          aos_delay={1300}
          aos_anim="fade-in"
        />
      {/if}
    </div>
  </section>
{/if}

<style>
  .headline {
    font-family: 'PolySans Slim', Arial, Helvetica, sans-serif;
    font-size: 72px;
    line-height: 72px;
    font-weight: 500;
  }

  .subline {
    color: #adebef;
    font-family: 'PolySans Bulky', Arial, Helvetica, sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    margin-left: 3px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    letter-spacing: 1.4px;
  }

  .content {
    margin-bottom: 1rem; 
  }
  
  .heroBanner :global(a) {
    align-self: auto;
  }

  .heroBanner {
    height: clamp(40rem, 60vw, 60vh);
    position: relative;
    background-size: cover;
    color: white;
  }

  .heroImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: -1;
  }

  .content-left,
  .content-right {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    /* backdrop-filter: brightness(80%); */
  }

  .content-left {
    align-items: flex-end;
    justify-content: center;
    padding-right: calc(50% + 1rem);
    padding-left: 2rem;
  }

  .content-left .content {
    margin-bottom: 3rem;
  }

  .content-left .headline,
  .content-left .subline,
  .content-left .content {
    text-align: right;
  }

  .content-left .headline {
    font-size: clamp(3rem, -0.875rem + 8.333vw, 4.5rem);
  }

  .content-right {
    align-items: flex-start;
    justify-content: center;
    padding-left: calc(50% + 1rem);
    padding-right: 2rem;
  }

  .content-right .headline {
    text-align: left;
  }

  .content-right .headline {
    font-size: clamp(3rem, -0.875rem + 8.333vw, 4.5rem);
    max-width: 50rem;
  }

  :global(.heroBanner .content p) {
    font-family: 'PolySans Neutral', Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
    line-height: 1.5rem;
    font-weight: 500;
    padding-left: 5px;
    /* max-width: 32rem; */
    margin-top: 0;
  }

  :global(.content-right .content p) {
    font-family: 'PolySans Neutral', Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
    line-height: 1.5rem;
    font-weight: 500;
    padding-left: 5px;
    /* max-width: 32rem; */
    margin-top: 0;
  }

  @media (max-width: 768px) {
    .content-left {
      justify-content: center;
      align-items: center;
      padding: 2rem;
    }
    .content-left :global(p) {
      text-align: center;
    }
    .content-right {
      align-items: center;
      padding-left: 1rem;
    }
    .content-right .headline,
    .content-right .content,
    .content-left .headline,
    .content-left .content {
      text-align: center;
      padding: 0 2rem;
    }
    .content-left,
    .content-right {
      backdrop-filter: brightness(50%);
    }
  }

  @media (max-width: 500px) {
    .content-left h1,
    .content-left .content {
      padding: 0 1rem;
    }
  }
</style>
