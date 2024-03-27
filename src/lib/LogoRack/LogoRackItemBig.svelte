<script>
  import TextWithLineBreaks from './../TextWithLineBreaks.svelte'
    /* TODO: convert this to a logo marquee */

  export let logo_rack_data
  export let color

  let paddingClasses = ''

  let logos = [
    {
      headline: logo_rack_data.logoHeadline1,
      body: logo_rack_data.logoText1?.json.content[0].content[0].value,
      image: logo_rack_data.logoImage1?.url,
      alt: logo_rack_data.logoImage1?.description,
    },
    {
      headline: logo_rack_data.logoHeadline2,
      body: logo_rack_data.logoText2?.json.content[0].content[0].value,
      image: logo_rack_data.logoImage2?.url,
      alt: logo_rack_data.logoImage2?.description,
    },
    {
      headline: logo_rack_data.logoHeadline3,
      body: logo_rack_data.logoText3?.json.content[0].content[0].value,
      image: logo_rack_data.logoImage3?.url,
      alt: logo_rack_data.logoImage3?.description,
    },
    {
      headline: logo_rack_data.logoHeadline4,
      body: logo_rack_data.logoText4?.json.content[0].content[0].value,
      image: logo_rack_data.logoImage4?.url,
      alt: logo_rack_data.logoImage4?.description,
    },
    {
      headline: logo_rack_data.logoHeadline5,
      body: logo_rack_data.logoText5?.json.content[0].content[0].value,
      image: logo_rack_data.logoImage5?.url,
      alt: logo_rack_data.logoImage5?.description,
    },
  ].filter((logo) => logo.headline || logo.body || logo.image) // filter out logos with no data

  let numOfBlocks = logos.length
</script>

<div class="text-center divider big-logo blocks-{numOfBlocks}">
  {#each logos as logo, index (index)}
    <div class="logo-wrapper">
      {#if numOfBlocks == 1}
        <img src="{logo.image}?fm=webp&q=80" alt={logo.alt} />
        {#if logo.headline}
          <h2 style="color: {color}">{logo.headline}</h2>
        {/if}
        {#if logo.body}
          <p style="color: {color}">{logo.body}</p>
        {/if}
      {:else}
        <img src="{logo.image}?fm=webp&q=80" alt={logo.alt} />
        {#if logo.headline}
          <h4 style="color: {color}">{logo.headline}</h4>
        {/if}
        {#if logo.body}
          <p style="color: {color}">{logo.body}</p>
        {/if}
      {/if}
    </div>
  {/each}
</div>

<style>
  :global(.big-logo) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    grid-gap: 2rem;
  }

  :global(.logo-rack-wrapper .big-logo.blocks-1 .logo-wrapper) {
    max-width: 100%;
  }

  :global(.logo-rack-wrapper .big-logo-blocks-3 .logo-wrapper) {
    max-width: calc(33% - 4rem);
  }

  .logo-wrapper {
    max-width: 10rem;
    margin: 0 1rem;
  }

  .logo-wrapper img {
    margin: 1.5rem auto;
    max-height: 6rem;
  }

  :global(.logo-rack-wrapper .big-logo.blocks-3 .logo-wrapper) {
    width: 100%;
    max-width: 15rem;
  }

  h4 {
    font-family: 'PolySans Median';
    font-weight: 500;
    letter-spacing: 0.875px;
    max-width: 10.825rem;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    :global(.logo-rack-wrapper .big-logo.blocks-3 .logo-wrapper) {
      max-width: 100%;
    }
  }
</style>
