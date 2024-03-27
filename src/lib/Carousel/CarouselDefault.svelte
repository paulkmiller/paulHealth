<script>
  import { onMount } from 'svelte'; 
  import Carousel from 'svelte-carousel'

  let images = [];

  onMount(() => {
    images = [
    {
      url: 'https://images.ctfassets.net/qhzqj9nbcut3/6xqhDbe6eNZtw72EM8aTJq/03ed8b20ada01cd3b471632e760553da/1624503325212.jpeg?fm=webp&q=80',
      description: 'Image 1',
    },
    {
      url: 'https://images.ctfassets.net/qhzqj9nbcut3/gulVfmDM5kqDvoyokkxUc/58945cc0e726d73c50c4e007f1315f73/ericperakslis.png?fm=webp&q=80',
      description: 'Image 2',
    },
    {
      url: 'https://images.ctfassets.net/qhzqj9nbcut3/7MChMvhkWDqS1h4s95sPN8/56d0a3bf88d005d350bd21dc0b87a64c/plutoSteve.jpeg?fm=webp&q=80',
      description: 'Image 3',
    },
    {
      url: 'https://images.ctfassets.net/qhzqj9nbcut3/3MPdd2EMExjErb9IwYhmYB/7c22aeed09a3b8f6a8109092ed6645c5/IMG_0880.jpg?fm=webp&q=80',
      description: 'Image 4',
    },
    {
      url: 'https://images.ctfassets.net/qhzqj9nbcut3/cOZldwWIoXLBu3To38cDT/ef76ab38ab8643f0d02bf52dd9ef7520/plutoRakesh.png?fm=webp&q=80',
      description: 'Image 5',
    },
    {
      url: 'https://images.ctfassets.net/qhzqj9nbcut3/75pyneu6JW070E7XExt0Eg/43c57a28351cce6470c843239d8e02cc/plutoRon.png?fm=webp&q=80',
      description: 'Image 6',
    },
  ]
  })
</script>

<Carousel autoplay>
  {#each images as image (image.url)}
    <div>
      <img src={image.url} alt={image.description} />
    </div>
  {/each}
</Carousel>

<style>
  img {
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  @media only screen and (max-width: 768px) { 
    img {
      margin: 0 auto;
    }
  }
</style>