<script>
  import { Navbar, NavbarBrand, Image } from "sveltestrap"
</script>

<Navbar color="primary" >
  <NavbarBrand href="/">
    <!-- ここ ./favicon.png でアクセスするとビルドできないので注意 -->
    <Image src="/favicon.png" width="36" alt="brand" />
    <span class="h4 text-white">Firebase Quiz</span>
  </NavbarBrand>
</Navbar>
