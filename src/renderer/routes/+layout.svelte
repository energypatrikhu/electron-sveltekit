<script lang="ts">
  import '@/assets/main.css'

  import type { Snippet } from 'svelte'

  let { children }: { children: Snippet } = $props()
</script>

{@render children()}
