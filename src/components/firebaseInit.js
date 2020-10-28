import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.default.auth()
const usersCollection = db.collection('users')
// export utils/refs
export { db, auth, usersCollection }
