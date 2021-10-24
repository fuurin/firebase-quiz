<script lang="ts">
  import { setTitle } from "$stores/title_store"
  import { Row, Col, ListGroup, ListGroupItem } from "sveltestrap"
  import { currentUser } from "$stores/current_user_store"
  
  setTitle("トップページ")
</script>

<ListGroup>
  {#if $currentUser }
    <ListGroupItem>
      <p class="text-center">Cloud Firestore</p>
      <Row class="text-center w-75 mx-auto">
        <Col md=6 xs=12 class="pb-2">
          <a sveltekit:prefetch href="firestore/question" class="btn btn-info">出題者</a>
        </Col>
        <Col md=6 xs=12 class="pb-2">
          <a sveltekit:prefetch href="firestore/answer" class="btn btn-success">解答者</a>
        </Col>
      </Row>  
    </ListGroupItem>
    <ListGroupItem>
      <p class="text-center">Realtime Database</p>
      <Row class="text-center w-75 mx-auto">
        <Col md=6 xs=12 class="pb-2">
          <a sveltekit:prefetch href="realtime/question" class="btn btn-info">出題者</a>
        </Col>
        <Col md=6 xs=12 class="pb-2">
          <a sveltekit:prefetch href="realtime/answer" class="btn btn-success">解答者</a>
        </Col>
      </Row>
    </ListGroupItem>
  {:else}
    <ListGroupItem>
      ログインしてください
    </ListGroupItem>
  {/if}
</ListGroup>
