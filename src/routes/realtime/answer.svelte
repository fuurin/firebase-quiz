<script lang="ts">
  import db from "$firebase/realtime/quiz"
  import AnswerForm from "$components/answer_form.svelte"
  
  const title: string = "解答者用ページ (Realtime Database)"
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<AnswerForm {db} {title} />
