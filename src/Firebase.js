// import Rebase from 're-base';
import firebase from 'firebase';
// import firestore from 'firebase/firestore'

const settings = { timestampsInSnapshots: true };

const firebaseConfig = {
    apiKey: "AIzaSyDMDO1iZ4Gw_4Q4FP6NJGUbe32kEQ-VZ4U",
    authDomain: "social-10bb7.firebaseapp.com",
    databaseURL: "https://social-10bb7.firebaseio.com",
    projectId: "social-10bb7",
    storageBucket: "",
    messagingSenderId: "791636671710",
    appId: "1:791636671710:web:977dbb3307afcaa8"
};

const fire = firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default fire;