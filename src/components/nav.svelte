<script lang="ts">
  import auth from '$firebase/auth'
  import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth"
  import { currentUser } from '$stores/current_user_store'
  import { Navbar, NavbarBrand, Image, Nav, NavItem, Button } from "sveltestrap"

  export let isCurrentUserChecked: boolean

  const openLogin = () => signInWithRedirect(auth, new GoogleAuthProvider())
</script>

<Navbar color="primary" light class="text-white" expand="md">
  <NavbarBrand href="/">
    <!-- ここ ./favicon.png でアクセスするとビルドできないので注意 -->
    <Image src="/favicon.png" width="36" class="mb-1" alt="brand" />
    <span class="h4 text-white">Firebase Quiz</span>
  </NavbarBrand>
  {#if isCurrentUserChecked }
    <Nav class="ms-auto" navbar>
      <NavItem class="mx-2">
        {#if $currentUser }
          <Button color="success" href="/mypage">マイページ</Button>
        {:else}
          <Button color="light" on:click={openLogin}>ログイン</Button>
        {/if}
      </NavItem>
    </Nav>
  {/if}
</Navbar>
