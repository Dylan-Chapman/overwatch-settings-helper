import "firebase/auth";
import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import router from "@/router";

Vue.use( Vuex );

export default new Vuex.Store( {
	state: {
		user: null
	},

	getters: {
		user( state ) {
			return state.user;
		}
	},

	mutations: {
		setUser( state, user ) {
			state.user = user;
		}
	},

	actions: {
		logOut( { commit } ) {
			firebase.auth().signOut();

			commit( "setUser", null );

			router.push( { name: "login" } );
		}
	}
} );
