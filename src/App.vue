<template>
	<v-app dark>
		<v-toolbar app expand scroll-toolbar-off-screen>
			<v-toolbar-title v-text="title"></v-toolbar-title>
		</v-toolbar>

		<v-content>
			<transition appear mode="out-in" name="slide-y-transition">
				<router-view :key="$route.fullPath"></router-view>
			</transition>
		</v-content>
	</v-app>
</template>

<script>
export default {
	name: "App",

	data() {
		return {
			title: "Overwatch Settings Helper"
		};
	}
};
</script>
