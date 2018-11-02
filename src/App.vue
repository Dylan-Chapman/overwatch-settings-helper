<template>
	<v-app dark>
		<v-toolbar app expand scroll-toolbar-off-screen>
			<v-btn
				:to="{ name: 'heroSelect' }"
				exact
				flat
				icon
			>
				<v-icon>home</v-icon>
			</v-btn>

			<v-toolbar-title v-text="title"></v-toolbar-title>

			<v-spacer></v-spacer>

			<v-toolbar-items>
				<account-menu></account-menu>
			</v-toolbar-items>
		</v-toolbar>

		<v-content>
			<transition appear mode="out-in" name="slide-y-transition">
				<router-view :key="$route.fullPath"></router-view>
			</transition>
		</v-content>
	</v-app>
</template>

<script>
import "firebase/auth";
import AccountMenu from "@/components/AccountMenu";
import firebase from "firebase/app";

export default {
	name: "App",

	components: {
		AccountMenu
	},

	data() {
		return {
			title: "Overwatch Settings Helper"
		};
	},

	created() {
		firebase.auth().onAuthStateChanged( user => {
			if ( user ) {
				this.$store.commit( "setUser", {
					email: user.email,
					id: user.uid,
					name: user.displayName,
					photo: user.photoURL
				} );
			} else {
				this.$store.dispatch( "logOut" );
			}
		} );
	}
};
</script>
