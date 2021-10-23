<script lang="ts">
  import db from "$firebase/realtime/quiz"
  import QuestionForm from "$components/question_form.svelte"

  const title: string = "出題者用ページ"
  const dbName: string = "Realtime Database"
</script>

<svelte:head>
  <title>{title} ({dbName})</title>
</svelte:head>

<QuestionForm {db} {title} {dbName}/>