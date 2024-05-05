<script>
  import Container from '$lib/Bootstrap/Container.svelte'
  import Row from '$lib/Bootstrap/Row.svelte'
  import LogoRackItem from './LogoRackItem.svelte'

  export let data
  export let background_color
  export let color
  let taglineColor


  let paddingClasses = '';
  let dividerClasses = '';

  $: {
    paddingClasses = '';

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

    if (data?.backgroundColor) {
      background_color = '#29397a'
      color = '#fff'
      taglineColor = '#adebef'
    } else {
      background_color = '#fff'
      color = '#29397a;'
      taglineColor = '#D93561'
    }
  }
</script>

<div class="logo-rack-wrapper{paddingClasses} {dividerClasses}" style="background-color: {background_color};">
  <Container>
    <Row class="justify-content-center align-items-center">
      {#if data.tagline}
        <p class="tagline" style="color: {taglineColor}" data-aos="fade-up" data-aos-delay="0">{data.tagline}</p>
      {/if}
      {#if data.headline}
        <h3 class="headline" data-aos="fade-up" data-aos-delay="100">{data.headline}</h3>
      {/if}
      {#if data.logoSize}
        <LogoRackItem {data} {color} />
      {/if}
    </Row>
  </Container>
</div>

<style>
  .logo-rack-wrapper {
    padding: 6rem 0;
  }

  .tagline{
    font-family: 'PolySans Median', Arial, Helvetica, sans-serif;
    color: #D93561;
    text-transform: uppercase;
    text-align: center;
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
  }
</style>
