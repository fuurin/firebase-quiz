<script lang="ts">
  import type QuizDatabase from "$interfaces/QuizDatabase"

  import Quiz from "$classes/quiz"
  import QuizOption from "$classes/quiz_option"
  import { Button, Row, Col,
           Form, FormGroup, Label, Input,
           InputGroup, InputGroupText,
           ListGroup, ListGroupItem,
  } from "sveltestrap"

  export let db: QuizDatabase

  let quizText: string = "私達の会社はどちらでしょう？"
  let quizOptions: Array<Object> = [
    { text: "Glossom", isAnswer: true },
    { text: "Glossam", isAnswer: false }
  ]

  const handleError = (error) => {
    alert("エラーが発生しました...")
    console.error(error)
  }

  const quizStart = async () => {
    const quiz = new Quiz(
      quizText,
      quizOptions.map(option => new QuizOption(option["text"], option["isAnswer"]))
    )
    try {
      await db.setQuiz(quiz)
      alert("出題しました！")
    } catch (error) { 
      handleError(error)
    }
  }

  const quizEnd = async () => {    
    try {
      await db.deleteQuiz()
      alert("出題を終了しました！")
    } catch (error) {
      handleError(error)
    }
  }
</script>

<ListGroup>
  <ListGroupItem>
    <Form class="mt-2">
      <FormGroup>
        <Label>クイズのテキスト</Label>
        <Input type="textarea" bind:value={quizText} />
      </FormGroup>
      {#each quizOptions as option, i}
        <FormGroup>
          <Label>選択肢 {i+1}</Label>
          <InputGroup>
            <InputGroupText>
              <div class="d-inline-flex align-items-center">
                <Label class="px-1 mb-0">正解？</Label>
                <Input type="checkbox" bind:checked={option["isAnswer"]} />
              </div>
            </InputGroupText>
            <Input bind:value={option["text"]} />
          </InputGroup>
        </FormGroup>    
      {/each}
    </Form>
  </ListGroupItem>
  <ListGroupItem>
    <Row class="text-center">
      <Col md=6 xs=12 class="py-2">
        <Button color="info" on:click={quizStart}>出題開始</Button>
      </Col>
      <Col md=6 xs=12 class="py-2">
        <Button color="primary" on:click={quizEnd}>出題終了</Button>
      </Col>
    </Row>
  </ListGroupItem>
</ListGroup>
