<template>
	<v-autocomplete
		:items="items"
		class="hero-select-list"
		item-text="name"
		item-value="key"
		label="Select a hero"
		v-model="selected"
	></v-autocomplete>
</template>

<script>
import heroes from "../data/heroes";

export default {
	name: "HeroSelectList",

	data: () => ( {
		heroes,
		selected: null
	} ),

	computed: {
		items() {
			return [
				{
					name: "General"
				},
				...heroes
			];
		}
	},

	watch: {
		selected( hero ) {
			this.$router.push( {
				name: "heroSettings",
				params: { hero }
			} );
		}
	}
};
</script>

<style scoped>
.hero-select-list {
	max-width: 300px;
}
</style>
