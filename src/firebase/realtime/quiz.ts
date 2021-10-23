import type { Database, DatabaseReference } from "firebase/database"
import type QuizDatabase from "$interfaces/QuizDatabase"

import db from "./db"
import { ref, set, remove, onValue } from "firebase/database"
import Quiz from "$classes/quiz"
import QuizOption from "$classes/quiz_option"

const REF_NAME = "quiz"

class RealtimeQuizDatabase implements QuizDatabase {
  private quizRef: DatabaseReference

  constructor(db: Database, refName: string) {
    this.quizRef = ref(db, refName)
  }

  setQuiz = async (quiz: Quiz) => {
    await set(this.quizRef, quiz.getObject())
  }
  
  deleteQuiz = async () => {
    await remove(this.quizRef)
  }
  
  onQuizUpdated = (callback: (quiz: Quiz) => void) => {
    onValue(this.quizRef, (snapshot) => {
      const quizData = snapshot.val()
      const quiz = quizData ? new Quiz(
        quizData.text,
        quizData.options.map((option: Object) => {
          return new QuizOption(option["text"], option["isAnswer"])
        })
      ) : null
      callback(quiz)
    })
  }
}

export default new RealtimeQuizDatabase(db, REF_NAME)
