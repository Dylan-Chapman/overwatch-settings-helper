<template>
	<v-app dark>
		<v-toolbar app expand scroll-toolbar-off-screen>
			<v-toolbar-title v-text="title"></v-toolbar-title>

			<v-spacer></v-spacer>

			<hero-select-list></hero-select-list>

			<v-container fluid class="px-0 py-3" slot="extension">
				<v-layout>
					<v-spacer></v-spacer>
					<v-flex shrink>
						<v-switch label="Edit Mode" v-model="editMode"></v-switch>
					</v-flex>
				</v-layout>
			</v-container>
		</v-toolbar>

		<v-content>
			<transition appear mode="out-in" name="slide-y-transition">
				<router-view :key="$route.fullPath"></router-view>
			</transition>
		</v-content>
	</v-app>
</template>

<script>
import HeroSelectList from "@/components/HeroSelectList";

export default {
	name: "App",
	components: {
		HeroSelectList
	},
	data() {
		return {
			editMode: true,
			title: "Overwatch Settings Helper"
		};
	}
};
</script>
