import firebase from "firebase/app";
import router from "@/router";

export default {
	callbacks: {
		signInSuccessWithAuthResult() {
			router.replace( { name: "heroSelect" } );

			return false;
		}
	},
	signInFlow: "popup",
	signInOptions: [
		firebase.auth.GoogleAuthProvider.PROVIDER_ID
	]
};
