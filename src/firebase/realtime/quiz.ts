import type { Database, DatabaseReference } from "firebase/database"
import type QuizDatabase from "$interfaces/QuizDatabase"

import db from "./db"
import { ref, set, get, remove, onValue } from "firebase/database"
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

  getQuiz = async () => {
    const quizData = (await get(this.quizRef)).val()
    return quizData ? this.makeQuizFromData(quizData) : null
  }
  
  deleteQuiz = async () => {
    await remove(this.quizRef)
  }
  
  onQuizUpdated = (callback: (quiz: Quiz) => void) => {
    onValue(this.quizRef, (snapshot) => {
      const quizData = snapshot.val()
      callback(quizData ? this.makeQuizFromData(quizData) : null)
    })
  }

  private makeQuizFromData(quizData: Object): Quiz {
    return new Quiz(
      quizData["text"],
      quizData["options"].map((option: Object) => {
        return new QuizOption(option["text"], option["isAnswer"])
      })
    )
  }
}

export default new RealtimeQuizDatabase(db, REF_NAME)
