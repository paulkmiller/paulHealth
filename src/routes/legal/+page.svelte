<script>
  import Hero from '$lib/Hero.svelte'
  import InfoBlock from '$lib/InfoBlock/InfoBlock.svelte'
  import Duplex from '$lib/Duplex.svelte'
  import LogoRack from '$lib/LogoRack/LogoRack.svelte'
  import Faq from '$lib/Faq/Faq.svelte'
  import SEOMetaData from '$lib/SEOMetaData.svelte'

  export let data

  const components = {
    ComponentHeroBanner: Hero,
    ComponentDuplex: Duplex,
    ComponentInfoBlock: InfoBlock,
    ComponentLogoRack: LogoRack,
    ComponentFaq: Faq
  };

  function getComponentData(item) {
    switch (item.type) {
      case 'ComponentHeroBanner':
        return { data: item.data.heroBanners[0] };
      case 'ComponentDuplex':
        return { data: item.data.duplexes[0] };
      case 'ComponentInfoBlock':
        return { data: item.data.infoBlocks[0] };
      case 'ComponentLogoRack':
        return { data: item.data.logoRacks[0] };
      case 'ComponentFaq':
        return { data: item.data.faqs };
      default:
        return {};
    }
  }
</script>

  {#each data.pageContent as item, index (index)}
    <svelte:component this={components[item.type]} {...getComponentData(item)} />
  {/each}

<!-- <SEOMetaData {data} /> -->

<style>
  :global(ol) {
    font-weight: bold;
    font-family: 'PolySans Median'
  }
  :global(.infoBlock-wrapper a) {
    color: #adebef;
  }
  :global(.infoBlock-wrapper a:hover) {
    color: #DA2F5C;
  }
  :global(.infoBlock-wrapper .copy-container .item) {
    max-width: 60rem;
  }
  :global(.infoBlock-wrapper .copy-container .content.legal) {
    text-align: left;
  }
  :global(.legal .subline) {
    text-align: center;
  }
  :global(.legal .content1){
    width: fit-content;
    margin: 0 auto;
  }
  :global(.legal .content1 p){
    margin: inherit;
  }
</style>