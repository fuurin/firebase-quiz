<script lang="ts">
  import db from "$firebase/realtime/quiz"
  import AnswerForm from "$components/answer_form.svelte"
  
  const title: string = "解答者用ページ"
  const dbName: string = "Realtime Database"
</script>

<svelte:head>
  <title>{title} ({dbName})</title>
</svelte:head>

<AnswerForm {db} {title} {dbName}/>
