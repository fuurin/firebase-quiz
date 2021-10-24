<script lang="ts">
  import { requireLogin, currentUser } from '$stores/current_user_store'
  import { setTitle } from "$stores/title_store"
  import { signOut } from 'firebase/auth'
  import auth from '$firebase/auth'
  import { CardBody, Table, Button } from 'sveltestrap'

  requireLogin()
  setTitle("マイページ")

  const logout = () => {
    signOut(auth)
    location.href = '/'
  }
</script>

<CardBody>
  <div class="table-responsive">
    <Table>
      <tbody>
        <tr>
          <th scope="row">ステータス</th>
          <td>ログイン中</td>
        </tr>
        <tr>
          <th scope="row">email</th>
          <td>{$currentUser.email}</td>
        </tr>
        <tr>
          <th scope="row">displayName</th>
          <td>{$currentUser.displayName}</td>
        </tr>  
      </tbody>
    </Table>
  </div>
  <div class="text-center">
    <Button color="secondary" on:click={logout}>ログアウト</Button>
  </div>
</CardBody>
