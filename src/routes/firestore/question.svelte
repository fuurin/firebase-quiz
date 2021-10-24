<script lang="ts">
  import db from "$firebase/firestore/quiz"
  import QuestionForm from "$components/question_form.svelte"

  const title: string = "出題者用ページ"
  const dbName: string = "Cloud Firestore"
</script>

<svelte:head>
  <title>{title} ({dbName})</title>
</svelte:head>

<QuestionForm {db} {title} {dbName}/>