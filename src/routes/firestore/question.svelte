<script lang="ts">
  import { requireLogin } from "$stores/current_user_store"
  import { setTitle } from "$stores/title_store"
  import db from "$firebase/firestore/quiz"
  import QuestionForm from "$components/question_form.svelte"

  requireLogin()
  setTitle("出題者用ページ (Firestore)")
</script>

<QuestionForm {db} />
