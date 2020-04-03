import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD4MxIKVBYzf-QX1W32nnd0UbwQSWbMZ8k",
    authDomain: "chat-13e73.firebaseapp.com",
    databaseURL: "https://chat-13e73.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base