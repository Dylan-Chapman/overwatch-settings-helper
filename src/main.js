import "./plugins/vuetify";
import "./registerServiceWorker";
import "@babel/polyfill";
import "firebase/auth";
import App from "./App.vue";
import Vue from "vue";
import VueFirestore from "vue-firestore";
import firebaseApp from "@/firebase/app";
import router from "./router";
import store from "./store";

Vue.use( VueFirestore );

Vue.config.productionTip = false;

const unsubscribe = firebaseApp.auth().onAuthStateChanged( () => {
	new Vue( {
		router,
		store,
		render: h => h( App )
	} ).$mount( "#app" );

	unsubscribe();
} );

