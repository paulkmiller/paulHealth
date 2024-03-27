<script>
	import { Circle3 } from 'svelte-loading-spinners';
</script>

<div class="backdrop">
  <div>
    <Circle3 size="180" ballTopLeft="#ADEBEF" ballTopRight="#DA2F5C" ballBottomLeft="#FFC126" ballBottomRight="#FBF6E2" unit="px" duration="4s" />
  </div>
</div>

<style>
  .backdrop {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #202d64;
    z-index: 100;
    top: 0;
    left: 0;
  }

  .backdrop div{
    display: flex;
    justify-content: center;
    margin-top: 45vh;
  }
</style>
