import * as  firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBn9GQH_KQbHVB0pYALAVoiJgGOnQ3JC1I",
    authDomain: "instacool-5ce59.firebaseapp.com",
    databaseURL: "https://instacool-5ce59.firebaseio.com",
    projectId: "instacool-5ce59",
    storageBucket: "instacool-5ce59.appspot.com",
    messagingSenderId: "752376358367",
    appId: "1:752376358367:web:0017b454dad2c446"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)


   // const firestore = firebase.firestore()
  //  const settings = {timestampsInSnapshots: true}
   //     irestore.settings(settings) 

  export const auth = firebase.auth()
 //  export const db = firestore
  export const db = firebase.firestore()
  export const storage = firebase.storage()
  
  


