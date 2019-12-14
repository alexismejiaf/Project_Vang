import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAUKHmmzRQhpH78dkgLN4vkttPaBlcuDuM",
    authDomain: "battlechat-33023.firebaseapp.com",
    databaseURL: "https://battlechat-33023.firebaseio.com",
    projectId: "battlechat-33023",
    storageBucket: "battlechat-33023.appspot.com",
    messagingSenderId: "154606618801",
    appId: "1:154606618801:web:07c09c667819573c86fa90",
    measurementId: "G-0VB69STL5Z"
}
firebase.initializeApp(config)
firebase.firestore().settings({
    timestampsInSnapshots: true
})

export const myFirebase = firebase
export const myFirestore = firebase.firestore()
export const myStorage = firebase.storage()
