<script>
  import { onMount } from 'svelte';

  onMount(() => {
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load();
    } else {
      let script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      document.body.appendChild(script);
    }
  });
</script>

<a class="twitter-timeline" href="https://twitter.com/PointHealthTech/lists/digital-health?ref_src=twsrc%5Etfw">A Twitter List by PointHealthTech</a>