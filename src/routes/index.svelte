<script lang="ts">
  import { Card, CardHeader, Row, Col, ListGroup, ListGroupItem } from "sveltestrap"
  const title: string = "トップページ"
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Card>
  <CardHeader>{title}</CardHeader>
  <ListGroup>
    <ListGroupItem>
      <p>Cloud Firestore</p>
      <Row class="text-center">
        <Col md=6 xs=12 class="pb-2">
          <a href="firestore/question" class="btn btn-info">出題者</a>
        </Col>
        <Col md=6 xs=12 class="pb-2">
          <a href="firestore/answer" class="btn btn-success">解答者</a>
        </Col>
      </Row>  
    </ListGroupItem>
    <ListGroupItem>
      <p>Realtime Database</p>
      <Row class="text-center">
        <Col md=6 xs=12 class="pb-2">
          <a href="realtime/question" class="btn btn-info">出題者</a>
        </Col>
        <Col md=6 xs=12 class="pb-2">
          <a href="realtime/answer" class="btn btn-success">解答者</a>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
</Card>