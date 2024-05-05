<script>
  import ButtonLink from '$lib/Button/ButtonLink.svelte'
  import { page } from '$app/stores'

  let paddingClasses = ''
  let background_color
  let color
  let taglineColor
  let copyBackground
  let alignment = ''
  let dividerClasses = ''

  $: isLegalPage = $page.url.pathname.startsWith('/legal');
  
  $: {
    paddingClasses = '';

    alignment += data?.copyAlignment ? 'left' : 'center';

    if (data?.paddingOptions?.includes('No Padding Top')) {
      paddingClasses += ' pt-0';
    }

    if (data?.paddingOptions?.includes('No Padding Bottom')) {
      paddingClasses += ' pb-0';
    }

    if (data?.divider?.includes('Top')) {
      dividerClasses += ' divider-before';
    }

    if (data?.divider?.includes('Bottom')) {
      dividerClasses += ' divider-after';
    }

    if (data?.copyBackground) {
      background_color = '#fff'
      color = '#29397a'
      taglineColor = '#D93561'
      copyBackground = "white"
    } else {
      background_color = '#29397a'
      color = '#fff'
      taglineColor = '#adebef'
      copyBackground = "blue"
    }
  }

  export let data
</script>

  {#if data.infoBlockConfig === 'Copy'}
    <div class="copy-container {paddingClasses} {dividerClasses} {alignment}" class:blue={!copyBackground} style="background-color: {background_color}; ">
      <div class="content" class:legal={isLegalPage} class:container={alignment} style="color: {color}">
        <div class="item">
          {#if data.tagline}
            <p class="tagline" style="color: {taglineColor}" data-aos="fade-in-up">{data.tagline}</p>
          {/if}
          {#if data.headline}
            <h3 class="headline" data-aos="fade-in-up" data-aos-delay="100">{data.headline}</h3>
          {/if}
          {#if data.subline}
            <h4 class="subline" data-aos="fade-in-up" data-aos-delay="200">{data.subline}</h4>
          {/if}
          {#if data.content1}
            <div class="content1" data-aos="fade-in-up" data-aos-delay="300">{@html data.content1}</div>
          {/if}
          {#if data.ctaLink}
            <ButtonLink 
              path={data.ctaLink.slug} 
              text={'Learn More'} 
              background_color={'#ADEBEF'} 
              ariaText="learn more"
              ariaLink="{data.ctaLink.slug}"
            />
          {/if}
        </div>
      </div>
    </div>
  {:else if data.infoBlockConfig === 'Ordered List'}
    <div class="ol-container">
      <div class="list-wrapper" style="background-image: url({data.block1Image.url})">
        {#if data.headline}
          <h3 class="headline" data-aos="fade-in-up" data-aos-delay="0">{data.headline}</h3>
        {/if}
        <div class="list" data-aos="fade-in-up" data-aos-delay="200">
          {@html data.content1}
        </div>
      </div>
    </div>
  {:else if data.infoBlockConfig === 'Letter'}
    <div class="letter_container">
      {@html data.content1}
      <div>
        <span
          class="letter-avatar"
          style="background-image: url({data.block1Image.url})"
          alt={data.block1Image.description}
        />
        <span
          class="letter-avatar"
          style="background-image: url({data.block2Image.url})"
          alt={data.block2Image.description}
        />
      </div>
      <div class="letter-name">{@html data.content2}</div>
    </div>
  {/if}

<style>
  .copy-container.blue {
    background-color: #29397a;
  }
  
  .copy-container.blue .content,
  .copy-container.blue .subline {
    color: #fff;
  }

  .copy-container{
    padding: 6rem 0;
  }

  .left .content {
    text-align: left;
  }
  
  .content {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }

  .subline,
  .content1{
    font-family: 'PolySans Neutral', Arial, Helvetica, sans-serif;
  }

  .subline {
    font-size: 2.25rem;
    line-height: 2.75rem;
    margin: auto auto 2rem;
  }

  .tagline{
    font-family: 'PolySans Median', Arial, Helvetica, sans-serif;
    color: #D93561;
    text-transform: uppercase;
  }

  .left .content1 :global(p) {
    font-size: 1.125rem;
    line-height: 1.5rem;
    margin: 2rem auto;
  }

  .copy-container:not(.left) .content1 :global(p) {
    font-size: 1.125rem;
    line-height: 1.5rem;
    max-width: 42.825rem;
    margin: 2rem auto;
  }

  .copy-container .content1 :global(p b) {
    font-family: 'PolySans Bulky', Arial, Helvetica, sans-serif;
    color: #FF80A8;
    letter-spacing: .25px
  }

  .copy-container.blue .content1 :global(p b) {
    color: #adebef;
  }

  .bg-color-primary .item * {
    color: #fff;
    margin: 1rem 0;
  }

  :global(.item h2) {
    font-family: 'PolySans Neutral', Arial, Helvetica, sans-serif;
    font-weight: 400;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }

  .item h3 {
    font-family: 'PolySans Neutral', Arial, Helvetica, sans-serif;
    font-weight: 400;
    text-align: center;
    margin: 2rem auto;
    font-size: 4.20rem;
  }

  .item {
    margin: 0 auto;
  }

  .ol-container .headline {
    max-width: 41rem;
    margin: 1rem auto 4rem;
    font-size: 2.25rem;
    text-align: center;
  }

  .ol-container :global(.list ol > li:nth-child(1)) {
    margin-bottom: 0;
  }

  .ol-container :global(.list ol > li:nth-child(2)) {
    margin: 0 auto;
  }

  .ol-container :global(.list ol > li:nth-child(3)) {
    margin-bottom: 0;
  }

  .letter-avatar {
    height: 2.5rem;
    width: 2.5rem;
    margin: 0 auto;
    border-radius: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
  }

  .letter-name :global(h4) {
    font-size: 0.9rem;
    margin: 0;
  }

  :global(.letter) div {
    margin: 1.5rem 0;
  }

  .list-wrapper{
    height: 100%;
    padding: 6rem 4rem;
    background-position: left center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .list-wrapper .list {
    max-width: 50rem;
    margin: 0 auto;
  }

  .list-wrapper .list > :global(ol:first-of-type){
    margin: 0 auto;
  }

  .list-wrapper :global(ol),
  .list-wrapper :global(ul) {
    list-style: none;
    counter-reset: numList;
    color: #29397a;
    font-size: 2rem;
  }

  .list-wrapper :global(ol > li),
  .list-wrapper :global(ul > li) {
    margin: 0 auto 4rem;
    position: relative;
    max-width: 37rem;
  }

  .list-wrapper :global(ol > li):before,
  .list-wrapper :global(ul > li):before {
    counter-increment: numList;
    content: counter(numList);

    float: left;
    position: absolute;
    left: -40px;
    top: 0;

    font: bold 1rem sans-serif;
    text-align: center;
    color: #fff;
    line-height: 2rem;

    width: 2rem; height: 2rem;
    background: #29397a;

    -moz-border-radius: 100%;
    border-radius: 100%
  }

  .list-wrapper :global(ol li h3),
  .list-wrapper :global(ul li h3),
  .list-wrapper :global(ul li h3)  {
    font-family: 'PolySans Neutral', Arial, sans-serif;
    font-weight: 500;
    font-size: 2rem;
    margin: 0
  }

  .list-wrapper :global(ol li ol),
  .list-wrapper :global(ul li ul){
    padding-left: 0;
  }

  .list-wrapper :global(ol li ol li p),
  .list-wrapper :global(ul li ul li p) {
    font-family: 'PolySans Slim', Arial, Helvetica, sans-serif;
    list-style-type: none;
    font-size: 1rem;
    color: #29397a;
    padding: .5rem 5px 2rem;
    padding-top: .5rem;
    padding-bottom: 2rem;
    margin: 0;
  }
  .list-wrapper :global(ol li ol li):before,
  .list-wrapper :global(ul li ul li):before {
    content: "";
    height: 0;
    width: 0;
  }

  .divider-before::before {
    content: '';
    display: block;
    height: 1px;
    background-color: #e8e8e8;
    width: 80%;
    margin: 0 auto 6rem;
  }

  .divider-after::after {
    content: '';
    display: block;
    height: 1px;
    background-color: #e8e8e8;
    width: 80%;
    margin: 6rem 0rem auto;
  }

  @media (max-width: 650px) {
    .divider::after {
      margin: 1rem auto;
    }
  }

  @media (max-width: 768px) {
    .divider::after {
      margin: 2rem auto;
    }
    .logo-rack-wrapper {
      padding: 4rem 0;
    }
    .list-wrapper :global(ol > li),
    .list-wrapper :global(ul > li) {
      margin: 0 auto 2rem;
    }
    .list-wrapper {
      padding: 2rem;
      background-image: none !important
    }
    .copy-container {
      padding: 4rem 2rem;
    }
    .copy-container .content {
      text-align: left;
    }
    .copy-container :global(*) {
      text-align: center;
    }
    .subline {
      text-align: center;
      margin: 0 auto 2rem
    }
  }
</style>