import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD3ZZJWhRcfguQAh4LnyFm_-tI10xX0V5Y",
    authDomain: "chatbox-app-de271.firebaseapp.com",
    databaseURL: "https://chatbox-app-de271-default-rtdb.europe-west1.firebasedatabase.app"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base