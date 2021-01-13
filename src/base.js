import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'


const config = {
    apiKey: "AIzaSyCoGcUF08abbwDOl8AhLb6L64k7O96QvJI",
    authDomain: "chatbox-app-a87ed.firebaseapp.com",
    databaseURL: "https://chatbox-app-a87ed-default-rtdb.firebaseio.com",
    projectId: "chatbox-app-a87ed",
    storageBucket: "chatbox-app-a87ed.appspot.com",
    messagingSenderId: "1092483073402",
    appId: "1:1092483073402:web:8a0be25dffcd84c912c2c3"
}

const firebaseApp = firebase.initializeApp(config)

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base