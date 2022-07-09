// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, getDocs, getDoc, doc, query, where, collection} from "firebase/firestore"
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVhZGM0aTdcx7QdT3osUSWRG0aJunxYU8",
  authDomain: "proyect1-9f35d.firebaseapp.com",
  projectId: "proyect1-9f35d",
  storageBucket: "proyect1-9f35d.appspot.com",
  messagingSenderId: "1065706331713",
  appId: "1:1065706331713:web:f22824a48628c2e902f0c0",
  measurementId: "G-YSVNC31G3G"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore (appFirebase);

export function testDatabase (){
  console.log (appFirestore)
}

export async function getItems (){

  const prodCollection = collection (appFirestore, "products");

  const productsSnapshot = await getDocs (prodCollection);

  let respuesta = productsSnapshot.docs.map(doc =>{
    return{
      ...doc.data(),
      id: doc.id
    }
  } );
  return respuesta;
}

export async function getItemOfCategory(categoryId){

  const productCollection = collection(appFirestore, "products");

  const q = query(productCollection, (where("category", "==", categoryId)));

  const productsSnapshot = await getDocs(q);

  let respuesta = productsSnapshot.docs.map( doc => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return respuesta;
}


export async function getAnItem(id){
  // const productCollection = collection(appFirestore, "products");
  const docref = doc(appFirestore, "products", id )
  const docSnapshot = await getDoc(docref);
  return{
    ...docSnapshot.data()
  }
}



export default appFirestore;