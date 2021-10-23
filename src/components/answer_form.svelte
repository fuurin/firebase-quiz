<script lang="ts">
  import type QuizDatabase from "$interfaces/QuizDatabase";
  import type Quiz from "$classes/quiz"
  import { Button, Card, CardBody, CardHeader, Row, Col } from "sveltestrap"

  export let db: QuizDatabase
  export let title: string

  let quiz: Quiz = null

  db.onQuizUpdated((updatedQuiz) => quiz = updatedQuiz)

  const answer = async (isAnswer: boolean) => {
    alert(isAnswer ? "正解！" : "不正解...")
  }
</script>

<Card>
  <CardHeader>{title}</CardHeader>
  <CardBody>
    <p class="text-center">
      {quiz?.text || "現在は出題されていません。"}
    </p>
    {#if quiz}
      <Row class="text-center">
        {#each quiz.options as option }
          <Col md=6 xs=12 class="py-2">
            <Button color="info" on:click={() => answer(option.isAnswer)}>
              {option.text}
            </Button>
          </Col>
        {/each}
      </Row>
    {/if}
  </CardBody>
</Card>
