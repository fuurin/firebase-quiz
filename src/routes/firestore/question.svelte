<script lang="ts">
  import QuestionForm from "$components/question_form.svelte"
  import { onMount } from 'svelte'

  const title: string = "出題者用ページ"
  const dbName: string = "Cloud Firestore"
  let db

  onMount(async () => {
    db = (await import("$firebase/firestore/quiz")).default
  })
</script>

<svelte:head>
  <title>{title} ({dbName})</title>
</svelte:head>

<QuestionForm {db} {title} {dbName}/>