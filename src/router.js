import Vue from "vue";
import Router from "vue-router";

Vue.use( Router );

export default new Router( {
	mode: "history",
	routes: [
		{
			path: "/",
			name: "heroSelect",
			component: () => import( "@/views/HeroSelect" )
		},
		{
			path: "/settings/:hero",
			name: "heroSettings",
			props: true,
			component: () => import( "@/views/HeroSettings" )
		}
	]
} );
