import type { Firestore, DocumentReference } from "@firebase/firestore"
import type QuizDatabase from "$interfaces/QuizDatabase"

import db from "./db"
import { doc, setDoc, deleteDoc, onSnapshot } from "firebase/firestore"
import Quiz from "$classes/quiz"
import QuizOption from "$classes/quiz_option"

const COLLECTION_NAME = "quizzes"
const DOCUMENT_NAME = "quiz"

class FirestoreQuizDatabase implements QuizDatabase {
  private quizDoc: DocumentReference

  constructor(db: Firestore, collectionName: string, documentName: string) {
    this.quizDoc = doc(db, collectionName, documentName)
  }

  setQuiz = async (quiz: Quiz) => {
    await setDoc(this.quizDoc, quiz.getObject())
  }
  
  deleteQuiz = async () => {
    await deleteDoc(this.quizDoc)
  }
  
  onQuizUpdated = (callback: (quiz: Quiz) => void) => {
    onSnapshot(this.quizDoc, (snapshot) => {
      const quizData = snapshot.data()
      const quiz = quizData ? new Quiz(
        quizData.text,
        quizData.options.map((option: Object) => {
          new QuizOption(option["text"], option["isAnswer"])
        })
      ) : null
      callback(quiz)
    })
  }
}

export default new FirestoreQuizDatabase(db, COLLECTION_NAME, DOCUMENT_NAME)
