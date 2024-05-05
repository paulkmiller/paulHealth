<script>
  import Hero from '$lib/Hero.svelte'
  import LogoRack from '$lib/LogoRack/LogoRack.svelte'
  import Duplex from '$lib/Duplex.svelte'
  import Faq from '$lib/Faq/Faq.svelte'
  import InfoBlock from '../../lib/InfoBlock/InfoBlock.svelte'
  import SEOMetaData from '$lib/SEOMetaData.svelte'

  import youTube from '$lib/YoutubeWrapper.svelte'

  export let data

  const components = {
    ComponentHeroBanner: Hero,
    ComponentDuplex: Duplex,
    ComponentInfoBlock: InfoBlock,
    ComponentLogoRack: LogoRack,
    ComponentYouTube: youTube,
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
      case 'ComponentYouTube':
        return { data: item.data.youtube[0] };
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

