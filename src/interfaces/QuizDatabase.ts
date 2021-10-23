import type Quiz from "$classes/quiz"

export default interface QuizDatabase {
  setQuiz: (quiz: Quiz) => void  
  deleteQuiz: () => void
  onQuizUpdated: (callback: (quiz: Quiz) => void) => void
}
