<template>
	<v-container fluid grid-list-md>
		<v-layout row wrap>
			<v-flex
				v-for="hero in items"
				:key="hero.name"
			>
				<v-hover>
					<v-card
						:class="{
							'grey': true,
							'darken-3 elevation-10': hover,
							'darken-4 elevation-2': !hover
						}"
						slot-scope="{ hover }"
						width="180"
						:to="{
							name: 'heroSettings',
							params: { hero: hero.key }
						}"
					>
						<v-img
							:src="hero.image"
							height="310"
							width="180"
						>
							<span class="v-card--hero-title title white--text text-xs-center pa-3">
								{{ hero.name }}
							</span>
						</v-img>
					</v-card>
				</v-hover>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import heroes from "../data/heroes";

export default {
	name: "HeroSelectCards",

	data: () => ( {
		heroes
	} ),

	computed: {
		items() {
			return [
				{
					name: "All Heroes",
					key: "all-heroes",
					image: require( "@/assets/img/heroes/all-heroes.png" )
				},
				...heroes
			];
		}
	}
};
</script>

<style scoped lang="stylus">
	@import "~vuetify/src/stylus/settings/_colors";

	.v-card--hero-title {
		background-color: rgba( $colors.shades.black, 0.8 );
		bottom: 0;
		position: absolute;
		width: 100%;
	}
</style>
