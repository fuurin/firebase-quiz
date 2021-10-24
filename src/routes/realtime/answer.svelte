<script lang="ts">
  import AnswerForm from "$components/answer_form.svelte"
  import { onMount } from 'svelte'
  
  const title: string = "解答者用ページ"
  const dbName: string = "Realtime Database"
  let db

  onMount(async () => {
    db = (await import("$firebase/realtime/quiz")).default
  })
</script>

<svelte:head>
  <title>{title} ({dbName})</title>
</svelte:head>

<AnswerForm {db} {title} {dbName}/>
