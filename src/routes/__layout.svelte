<script lang="ts">
  import "bootswatch/dist/flatly/bootstrap.min.css"
  import { Container } from "sveltestrap"
  import Nav from "$components/nav.svelte"
</script>

<Nav/>
<Container class="w-75 mt-5">
  <slot></slot>
</Container>
