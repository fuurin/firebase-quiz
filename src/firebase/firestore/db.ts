import app from "$firebase/app"
import { getFirestore } from "firebase/firestore"

export default getFirestore(app)
