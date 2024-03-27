<script>
  import { goto } from '$app/navigation';

  if (!import.meta.env.SSR) {
    goto('/home');
  }
</script>
