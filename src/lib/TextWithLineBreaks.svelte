<script>
  export let inputText = '';
  let segments = inputText.split('<br/>');
</script>

{#each segments as segment, i}
  <span key={i} style="display: block; min-height: 24px;">
    {@html segment}
  </span>
{/each}
