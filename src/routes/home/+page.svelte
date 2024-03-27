<script>
  import Hero from '$lib/Hero.svelte'
  import Carousel from '$lib/Carousel/CarouselWrapper.svelte'
  import DynamicDuplex from '$lib/Accordion/DynamicDuplex.svelte'
  import InfoBlock from '$lib/InfoBlock/InfoBlock.svelte'
  import Faq from '$lib/Faq/Faq.svelte'
  import LogoRack from '$lib/LogoRack/LogoRack.svelte'
  import Duplex from '$lib/Duplex.svelte'
  import SEOMetaData from '$lib/SEOMetaData.svelte'

  export let data

  const components = {
    ComponentHeroBanner: Hero,
    ComponentCarousel: Carousel,
    ComponentDuplex: Duplex,
    ComponentDynamicDuplex: DynamicDuplex,
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
      case 'ComponentDynamicDuplex':
        return { data: item.data.dynamicDuplexes[0] };
      case 'ComponentCarousel':
        return { data: item.data.carousels[0] };
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

<SEOMetaData {data} />
