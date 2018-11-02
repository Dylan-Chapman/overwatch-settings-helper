import "firebase/auth";
import config from "./config";
import firebase from "firebase/app";

const app = firebase.initializeApp( config );

app.auth().setPersistence( firebase.auth.Auth.Persistence.LOCAL );

export default app;
