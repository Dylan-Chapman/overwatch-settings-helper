import "firebase/auth";
import firebase from "firebase/app";
import firebaseui from "firebaseui";

export default new firebaseui.auth.AuthUI( firebase.auth() );
