export default {
	name: "AccountMenu",

	computed: {
		user() {
			return this.$store.getters.user;
		}
	},

	render() {
		if ( this.user ) {
			return <v-menu
				bottom
				lazy
				left
				offsetY
			>
				<v-btn
					flat
					slot="activator"
					small={!this.$vuetify.breakpoint.smAndUp}
				>
					<v-img
						class="mr-3"
						src={this.user.photo}
						style="border-radius: 50%;"
						width="24"
					></v-img> {this.user.name}
				</v-btn>

				<v-list>
					<v-list-tile
						onClick={() => this.$store.dispatch( "logOut" )}
						ripple
					>
						<v-list-tile-action>
							<v-icon>power_settings_new</v-icon>
						</v-list-tile-action>

						<v-list-tile-content>
							<v-list-tile-title>Log Out</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list>
			</v-menu>;
		}
	}
};
