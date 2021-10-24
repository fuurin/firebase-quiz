import type Quiz from "$classes/quiz"

export default interface QuizDatabase {
  setQuiz: (quiz: Quiz) => Promise<void>
  getQuiz: () => Promise<Quiz>
  deleteQuiz: () => Promise<void>
  onQuizUpdated: (callback: (quiz: Quiz) => void) => void
}
