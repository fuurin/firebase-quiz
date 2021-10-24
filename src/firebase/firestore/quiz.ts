import type { Firestore, DocumentReference, DocumentData } from "@firebase/firestore"
import type QuizDatabase from "$interfaces/QuizDatabase"

import db from "./db"
import { doc, setDoc, getDoc, deleteDoc, onSnapshot } from "firebase/firestore"
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

  getQuiz = async () => {
    const quizData = (await getDoc(this.quizDoc)).data()
    return quizData ? this.makeQuizFromData(quizData) : null
  }
  
  deleteQuiz = async () => {
    await deleteDoc(this.quizDoc)
  }
  
  onQuizUpdated = (callback: (quiz: Quiz) => void) => {
    onSnapshot(this.quizDoc, (snapshot) => {
      const quizData = snapshot.data()
      callback(quizData ? this.makeQuizFromData(quizData) : null)
    })
  }

  private makeQuizFromData(quizData: DocumentData): Quiz {
    return new Quiz(
      quizData.text,
      quizData.options.map((option: Object) => {
        return new QuizOption(option["text"], option["isAnswer"])
      })
    )
  }
}

export default new FirestoreQuizDatabase(db, COLLECTION_NAME, DOCUMENT_NAME)
