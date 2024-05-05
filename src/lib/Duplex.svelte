<script>
  import ButtonLink from '$lib/Button/ButtonLink.svelte'
  import TextWithLineBreaks from './TextWithLineBreaks.svelte';
  import NewsletterInput from '$lib/NewsletterInput.svelte';

  export let data
</script>

{#if data.containerSize === "Small"}
  <div class="small-container container">
      <div class="duplex-container small-image {data.containerLayout ? '' : 'row-reverse'}">
        <div class="left-container" data-aos="fade-right" data-aos-delay="100">
          <img src="{data.image?.url}?fm=webp&q=80" alt={data.image?.description} />
        </div>
        <div class="right-container" data-aos="fade-left" data-aos-delay="400">
          {#if data.tagline}
            <p class="tagline">{data.tagline}</p>
          {/if}
          {#if data.headline}
            <h3 class="small"><TextWithLineBreaks inputText={data.headline} /></h3>
          {/if}
          {#if data.bodyText}
            <p>{@html data.bodyText}</p>
          {/if}
          {#if data.newsletterInput}
            <NewsletterInput />
          {/if}
          {#if data.ctaText != null} 
            <ButtonLink
              text={data.ctaText || 'Learn More'}
              path={data.targetPage ? `${data.targetPage}` : '/contact'}
              color={'#FFF'}
              background_color={'#D93561'}
              ariaText="{data.ctaText}"
              ariaLink="{data.targetPage}"
            />
          {/if}
        </div>
      </div>
  </div>
{:else if data.containerSize === "Normal"}
  <div class="normal-container container">
      <div class="duplex-container normal-image {data.containerLayout ? '' : 'row-reverse'}">
        <div class="left-container" data-aos="fade-right" data-aos-delay="100">
          <img src="{data.image?.url}?fm=webp&q=80" alt={data.image?.description} />
        </div>
        <div class="right-container" data-aos="fade-left" data-aos-delay="400">
          {#if data.tagline}
            <p class="tagline">{data.tagline}</p>
          {/if}
          {#if data.headline}
            <h3><TextWithLineBreaks inputText={data.headline} /></h3>
          {/if}
          {#if data.bodyText}
            <p>{@html data.bodyText}</p>
          {/if}
          {#if data.newsletterInput}
            <NewsletterInput />
          {/if}
          {#if data.ctaText != null} 
            <ButtonLink
              text={data.ctaText || 'Learn More'}
              path={data.targetPage ? `${data.targetPage}` : '/contact'}
              color={'#FFF'}
              background_color={'#D93561'}
              ariaText="{data.ctaText}"
              ariaLink="{data.targetPage}"
            />
          {/if}
        </div>
      </div>
  </div>
{:else if data.containerSize == "Large"}
  <div class="duplex-container large-image {data.containerLayout ? '' : 'row-reverse'}">
    <div class="left-container" data-aos="fade-right" data-aos-delay="100">
      <img src="{data.image?.url}?fm=webp&q=80" alt={data.image?.description} />
    </div>
    <div class="right-container" data-aos="fade-right" data-aos-delay="400">
      {#if data.tagline}
        <p class="tagline">{data.tagline}</p>
      {/if}
      {#if data.headline && !data.bodyText}
        <h3 class="big"><TextWithLineBreaks inputText={data.headline} /></h3>
      {:else if data.headline}
        <h3><TextWithLineBreaks inputText={data.headline} /></h3>
      {/if}
      {#if data.bodyText}
        <p>{@html data.bodyText}</p>
      {/if}
      {#if data.newsletterInput}
        <NewsletterInput />
      {/if}
      {#if data.ctaText != null} 
        <ButtonLink
          text={data.ctaText || 'Learn More'}
          path={data.targetPage ? `${data.targetPage}` : '/contact'}
          color={'#FFF'}
          background_color={'#D93561'}
          ariaText="{data.ctaText}"
          ariaLink="{data.targetPage}"
        />
      {/if}
    </div>
  </div>
{/if}

<style>
  img {
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  .tagline{
    font-family: 'PolySans Median', Arial, Helvetica, sans-serif;
    color: #D93561;
    text-transform: uppercase;
  }

  .duplex-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .right-container {
    display: grid;
    margin: 0 auto 0 6rem;
    padding: 4rem 0;
  }

  .large-image .right-container {
    padding: 4rem 4rem 4rem 1rem;
  }

  :global(.news-duplex-wrapper-wide) .duplex-container {
    grid-template-columns: .6fr 1fr;
  }

  .left-container {
    padding: 0;
  }

  .row-reverse,
  .row-reverse .right-container,
  .row-reverse .left-container img {
    transform: scaleX(-1);
  }

  .row-reverse .right-container {
    grid-template-rows: 1fr auto;
    padding: 4rem;
    align-self: center;
  }

  .row-reverse.small-image .right-container {
    grid-template-rows: 1fr auto;
  }

  .row-reverse.small-image .right-container * {
    text-align: right;
    align-self: self-end;
    margin-left: auto;
  }

  .duplex-container.row-reverse.small-image :global(p),
  .duplex-container.row-reverse.small-image :global(h3),
  .duplex-container.row-reverse.small-image :global(a) {
    text-align: right;
    margin-left: auto;
  }

  .row-reverse.small-image .right-container :global(a) {
    margin-left: auto;
  }

  .duplex-container :global(h3.big) {
    font-size: 4.5rem;
    color: #29397a;
    margin-bottom: 2rem;
  }

  .duplex-container :global(h3) {
    font-family: 'PolySans Neutral', Arial, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 4rem;
    margin-bottom: 0.25rem;
    align-self: self-end;
  }

  .duplex-container :global(h3.small) {
    font-family: 'PolySans Neutral', Arial, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 3rem;
    margin-bottom: 0.25rem;
    align-self: self-end;
  }

  .duplex-container.small-image :global(h3) {
    max-width: 30rem;
  }

  .duplex-container :global(p) {
    font-family: 'PolySans Slim', Arial, Helvetica, sans-serif;
    font-size: 1.125rem;
    line-height: 1.5rem;
    letter-spacing: 0.25px;
    margin: 1rem 0;
    text-align: left;
    align-self: center;
  }

  .duplex-container :global(ol:first-of-type > li > p:not(ol li ol li p)) {
    font-family: 'PolySans Slim', Arial, Helvetica, sans-serif;
    font-size: 4.5rem;
  }

  .duplex-container :global(p b) {
    font-family: 'PolySans Median', Arial, Helvetica, sans-serif;
  }

  .duplex-container :global(ul li p) {
    margin: .5rem 0;
  }

  .duplex-container :global(h5 b) {
    color: #D93561;
  }

  .small-image {
    max-width: 1052px;
    padding: 4rem 0;
    margin: auto;
  }
  
  .small-image .left-container {
    /* max-height: 440px; */
  }

  .small-image .right-container {
    padding: 0 2rem;
    max-width: 800px;
    margin: 0 0 0 2rem;
  }

  .normal-image {
    padding: 3rem 0;
  }
  
  .normal-image .left-container {
    /* max-height: 440px; */
    margin: 0 auto;
  }

  .large-image {
    min-height: 455px;
  }

  .large-image img {
    height: 100%; 
    width: 100%; 
    object-fit: cover;
    /* max-height: 600px; */
  }

  .duplex-container :global(ol) {
    list-style: none;
    counter-reset: numList;
  }

  .duplex-container :global(ol li) {
      /* margin-right: 44px; */
      position: relative
  }

  .duplex-container :global(ol:first-child > li::before) {
      counter-increment: numList;
      content: counter(numList);
      
      float: left;
      position: absolute;
      left: -50px;
      top: .5rem;
      
      font: bold 1rem sans-serif;
      text-align: center;
      color: #fff;
      line-height: 2rem;
      
      width: 2rem; height: 2rem;
      background: #29397a;
      
      -moz-border-radius: 100%;
      border-radius: 100%
  }

  @media only screen and (max-width: 768px) {
    img {
      margin: 0 auto;
      max-height: 300px;
    }

    .large-image img {
      max-height: 300px;
    }

    div.duplex-container.large-image,
    div.duplex-container.normal-image,
    div.duplex-container.small-image {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }

    .duplex-container :global(p) {
      text-align: center;
      align-self: normal;
    }

    .row-reverse.small-image .right-container * {
      text-align: center;
      align-self: auto;
      margin: 1rem auto;
    }

    .duplex-container.row-reverse.small-image :global(p),
    .duplex-container.row-reverse.small-image :global(h3),
    .duplex-container.row-reverse.small-image :global(a) {
      text-align: center;
      align-items: normal;
    }

    .row-reverse .right-container,
    .right-container {
      width: 100%;
      padding: 3rem;
    }
    .right-container {
      margin: 4rem auto;
      text-align: center;
    }

    .right-container :global(h3) {
      font-size: 3.5rem;
      margin: 1rem auto;
    }

    .right-container :global(p) {
      max-width: 97.5%;
      margin: .5rem auto;
    }

    .right-container :global(a) {
      margin: 2rem auto;
    }
    
  }

  @media only screen and (max-width: 991px) {
    .small-container :global(.container),
    .normal-container :global(.container) {
      max-width: 100%;
    }
    
    .small-image .left-container {
      /* max-height: 440px; */
    }

    .small-image .right-container {
      padding: 0 2rem;
      max-width: 800px;
      margin: 0;
    }
  }

  @media only screen and (max-width: 1250px) {
    .duplex-container.large-image {
      grid-template-columns: .75fr 1fr;
    }
    .duplex-container .right-container {
      padding: 2rem 1rem;
    }
  }

  @media only screen and (max-width: 1680px) {
    .right-container {
      /* max-width: 640px; */
      margin: 0 auto;
      padding: 2rem;
    }
  }
</style>
