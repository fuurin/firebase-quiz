<script lang="ts">
  import "bootswatch/dist/flatly/bootstrap.min.css"
  import auth from "$firebase/auth"
  import { onAuthStateChanged } from "firebase/auth"
  import { setCurrentUser } from "$stores/current_user_store"
  import { title } from '$stores/title_store'
  import Nav from "$components/nav.svelte"
  import { Container, Card, CardHeader } from "sveltestrap"
  import { GoogleSpin } from "svelte-loading-spinners"

  let isCurrentUserChecked = false

  onAuthStateChanged(auth, user => {
    setCurrentUser(user)
    isCurrentUserChecked = true
  })
</script>

<svelte:head>
  <title>{$title}</title>
</svelte:head>

<Nav {isCurrentUserChecked} />
<Container class="w-75 mt-5">
  {#if isCurrentUserChecked }
    <Card class="col-md-6 col-xs-12 mx-auto">
      <CardHeader>{$title}</CardHeader>
      <slot></slot>
    </Card>
  {:else}
    <div class="text-center pt-4">
      <GoogleSpin size="80px"></GoogleSpin>
    </div>
  {/if}
</Container>
