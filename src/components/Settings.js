import HeroSelectList from "@/components/HeroSelectList";

export default {
	name: "Settings",

	props: {
		banner: String,

		settings: {
			default: () => [],
			type: Array
		},

		title: {
			default: "Settings",
			type: String
		}
	},

	data: () => ( {
		editMode: true,
		keybinds: []
	} ),

	methods: {
		genSettings( settings ) {
			return settings.map( this.genSetting );
		},

		genSetting( setting ) {
			const settingType = `${setting.type.charAt( 0 ).toUpperCase()}${setting.type.slice( 1 )}`;
			const genMethod = this[`_gen${settingType}`];

			if ( typeof genMethod !== "undefined" ) {
				return genMethod( setting );
			}
		},

		_genSection( setting ) {
			return <v-card class="mb-3">
				<v-card-title class="subheading">{setting.name}</v-card-title>

				<v-card-text>
					{this.genSettings( setting.settings )}
				</v-card-text>
			</v-card>;
		},

		_genSlider( setting ) {
			return <div>
				<v-subheader class="pl-0">{setting.name}</v-subheader>
				<v-slider
					color="#f99e1a"
					max={setting.max || 100}
					min={setting.min || 0}
					step={setting.granularity || 1}
					thumb-label="always"
					value={setting.default}
				></v-slider>
			</div>;
		},

		_genSwitch( setting ) {
			return <v-switch
				color="#f99e1a"
				inputValue={setting.default}
				label={setting.name}
			>Switch</v-switch>;
		},

		_genKeybind( setting ) {
			return <v-autocomplete
				color="#f99e1a"
				clearable
				item-text="key"
				item-value="key"
				items={this.keybinds}
				label={setting.name}
				value={setting.default.xbox}
				{...{
					scopedSlots: {
						selection: data => [
							<v-avatar class="mr-2" size="32">
								<v-img src={data.item.image}></v-img>
							</v-avatar>,

							data.item.key
						],

						item: data => [
							<v-list-tile-avatar>
								<v-img src={data.item.image}></v-img>
							</v-list-tile-avatar>,

							<v-list-tile-content>
								<v-list-tile-title>
									{data.item.key}
								</v-list-tile-title>
							</v-list-tile-content>
						]
					}
				}}
			></v-autocomplete>;
		},

		_genSelect( setting ) {
			return <v-autocomplete
				items={setting.options}
				value={setting.default}
			></v-autocomplete>;
		},

		_genPanel( setting ) {
			return <v-expansion-panel expand>
				<v-expansion-panel-content>
					<div slot="header">{setting.name}</div>

					<v-card>
						<v-card-text>
							{this.genSettings( setting.settings )}
						</v-card-text>
					</v-card>
				</v-expansion-panel-content>
			</v-expansion-panel>;
		}
	},

	async created() {
		this.keybinds = await import( "@/data/keybinds/xbox" )
		.then( m => m.default );
	},

	render() {
		return <v-container style="max-width: 1000px;">
			<v-layout>
				<v-switch
					inputValue={this.editMode}
					label="Edit Mode"
					onChange={val => this.editMode = val}
				></v-switch>

				<v-spacer></v-spacer>

				<HeroSelectList></HeroSelectList>
			</v-layout>

			{this.banner && <v-img
				class="mb-3"
				height="300"
				position="top center"
				src={this.banner}
				gradient="to top, rgba(0,0,0,0.6), rgba(0,0,0,0)"
				width="100%"
			>
				<v-layout
					column
					fill-height
					pa-4
				>
					<v-spacer></v-spacer>
					<v-flex shrink>
						<span class="display-1">
							{this.title}
						</span>
					</v-flex>
				</v-layout>
			</v-img>}

			{this.genSettings( this.settings )}
		</v-container>;
	}
};
