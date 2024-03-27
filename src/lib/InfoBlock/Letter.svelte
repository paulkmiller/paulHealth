<script>
  import InfoBlockItem from './InfoBlockItem.svelte'

  export let infoBlock_data
</script>

<div class="letter">
  <InfoBlockItem {infoBlock_data}  />
</div>

<style>
  .letter {
    background-color: #29397a;
    max-width: 40rem;
    margin: 4rem auto;
    border-radius: 0.6rem;
    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.4);
    color: #fff;
    padding: 2rem 4rem;
  }
</style>