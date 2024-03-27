<script>
  import InfoBlockItem from './InfoBlockItem.svelte'

  export let data
</script>

<div class="infoBlock-wrapper">
    <InfoBlockItem {data} />
</div>

<style>
  .infoBlock-wrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    height: 100%;
    margin: 0 auto;
  }
</style>
