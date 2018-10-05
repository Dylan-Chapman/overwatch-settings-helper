import allHeroesSettings from "@/data/default-settings/all-heroes";
import heroesInfo from "@/data/heroes";
import Settings from "@/components/Settings";

export default {
	name: "HeroSettings",

	props: {
		hero: String
	},

	data: () => ( {
		allHeroesSettings,
		heroSettings: []
	} ),

	computed: {
		heroInfo() {
			return heroesInfo.find( heroInfo => heroInfo.key === this.hero );
		},

		settings() {
			const settings = JSON.parse( JSON.stringify( this.allHeroesSettings ) );

			settings.forEach( section => {
				if ( section.name === "Hero" ) {
					section.settings.push( ...this.heroSettings );
				}
			} );

			return settings;
		}
	},

	async created() {
		this.heroSettings = await import( `@/data/default-settings/${this.hero}` )
		.then( m => m.default );
	},

	render() {
		return <Settings
			banner={this.heroInfo.banner}
			title={`${this.heroInfo.name} Settings`}
			settings={this.settings}
		></Settings>;
	}
};
