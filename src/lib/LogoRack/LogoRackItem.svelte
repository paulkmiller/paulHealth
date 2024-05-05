<script>
  import TextWithLineBreaks from './../TextWithLineBreaks.svelte'

  export let data
  export let color

  // filter out logos with no data
  let logos = [
    {
      header: data.header,
      headline: data.logoHeadline1,
      body: data.logoText1,
      image: data.logoImage1?.url,
      alt: data.logoImage1?.description,
    },
    {
      headline: data.logoHeadline2,
      body: data.logoText2,
      image: data.logoImage2?.url,
      alt: data.logoImage2?.description,
    },
    {
      headline: data.logoHeadline3,
      body: data.logoText3,
      image: data.logoImage3?.url,
      alt: data.logoImage3?.description,
    },
    {
      headline: data.logoHeadline4,
      body: data.logoText4,
      image: data.logoImage4?.url,
      alt: data.logoImage4?.description,
    },
    {
      headline: data.logoHeadline5,
      body: data.logoText5,
      image: data.logoImage5?.url,
      alt: data.logoImage5?.description,
    },
    {
      headline: data.logoHeadline6,
      body: data.logoText6,
      image: data.logoImage6?.url,
      alt: data.logoImage6?.description,
    }
  ].filter((logo) => logo.headline || logo.body || logo.image)
</script>

<div class="text-center small-logo blocks-{data.logosPerRow}">
  {#if logos[0].header}
    <h2 style="color: {color}" data-aos="fade-up" data-aos-delay="100"><TextWithLineBreaks inputText={logos[0].header} /></h2>
  {/if}
  {#each logos as logo, index (index)}
    <div class="logo-wrapper" data-aos="fade-left" data-aos-delay="{index * 400}">
      <img src="{logo.image}?fm=webp&q=80" alt={logo.alt} />
      {#if logo.headline} 
        <h4 style="color: {color}" class="headline"><TextWithLineBreaks inputText={logo.headline} /></h4>
      {/if}
      {#if logo.body}
        <p style="color: {color}" class="logo-body">{@html logo.body}</p>
      {/if}
    </div>
  {/each}
</div>

<style>
  .small-logo {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    grid-gap: 3rem;
    color: #29397a;
  }

  .small-logo h2,
  .small-logo h4 {
    width: 100%;
  }

  h2 {
    display: flex;
    font-family: 'PolySans Slim', Arial, Helvetica, sans-serif;
    font-size: 3rem;
    font-weight: 500;
    letter-spacing: 0.875px;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  h4 {
    display: flex;
    font-family: 'PolySans Neutral', Arial, Helvetica, sans-serif;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 0.875px;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  p {
    font-family: 'PolySans Slim', Arial, Helvetica, sans-serif;
    padding: .5rem;
  }
  
  .logo-body {
    padding: 0;
    max-width: 800px;
  }

  .logo-body {
    margin: 0;
    color: #29397a;
  }

  .logo-body :global(p b){
    font-family: 'PolySans Median', Arial, Helvetica, sans-serif;
  }

  .logo-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    max-width: 12rem;
  }

  .logo-wrapper img {
    height: 5.5rem;
    margin: 1.5rem auto;
  }

  .logo-wrapper h2 {
    font-family: 'PolySans Neutral', Arial, Helvetica, sans-serif;
    font-size: 3.75rem;
    font-weight: 500;
  }

  :global(.logo-rack-wrapper .small-logo.blocks-1 .logo-wrapper) {
    max-width: 100%;
    width: 100%;
  }

  :global(.logo-rack-wrapper .small-logo.blocks-3 .logo-wrapper) {
    max-width: calc(33% - 3rem);
    width: 100%
  }

  :global(.logo-rack-wrapper .small-logo.blocks-2 .logo-wrapper) {
    max-width: 30rem;
  }

  @media (max-width: 768px) {
    :global(.logo-rack-wrapper .small-logo.blocks-3 .logo-wrapper) {
      max-width: 100%;
    }
  }

  /* @media (max-width: 991px) {
    :global(.small-logo) {
      justify-content: center;
    }
  } */
</style>
