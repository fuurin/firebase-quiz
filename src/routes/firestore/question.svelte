<script lang="ts">
  import db from "$firebase/firestore/quiz"
  import QuestionForm from "$components/question_form.svelte"

  const title: string = "出題者用ページ (Cloud Firestore)"
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<QuestionForm {db} {title} />