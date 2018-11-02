import "firebaseui/dist/firebaseui.css";
import ui from "@/firebase/ui";
import uiConfig from "@/firebase/ui-config";

export default {
	name: "LoginForm",

	computed: {
		user() {
			return this.$store.getters.user;
		}
	},

	mounted() {
		if ( this.user ) {
			this.$router.replace( { name: "heroSelect" } );
		} else {
			ui.start( "#firebaseui-auth-container", uiConfig );
		}
	},

	render() {
		return <v-container justify-center fill-height>
			<div id="firebaseui-auth-container"></div>
		</v-container>;
	}
};
