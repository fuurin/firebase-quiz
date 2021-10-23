<script lang="ts">
  import db from "$firebase/firestore/quiz"
  import AnswerForm from "$components/answer_form.svelte"
  
  const title: string = "解答者用ページ (Cloud Firestore)"
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<AnswerForm {db} {title} />
