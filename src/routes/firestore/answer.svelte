<script lang="ts">
  import { requireLogin } from "$stores/current_user_store"
  import { setTitle } from "$stores/title_store"
  import db from "$firebase/firestore/quiz"
  import AnswerForm from "$components/answer_form.svelte"

  requireLogin()
  setTitle("解答者用ページ (Firestore)")
</script>

<AnswerForm {db} />
