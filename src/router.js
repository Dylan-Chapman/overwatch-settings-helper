import Router from "vue-router";
import Vue from "vue";
import firebase from "firebase/app";
import "firebase/auth";

Vue.use( Router );

const router = new Router( {
	mode: "history",
	routes: [
		{
			path: "/login",
			name: "login",
			component: () => import( "@/views/Login" )
		},
		{
			path: "/",
			name: "heroSelect",
			meta: { requiresAuth: true },
			component: () => import( "@/views/HeroSelect" )
		},
		{
			path: "/settings/all-heroes",
			name: "allHeroesSettings",
			meta: { requiresAuth: true },
			component: () => import( "@/views/AllHeroesSettings" )
		},
		{
			path: "/settings/:hero",
			name: "heroSettings",
			meta: { requiresAuth: true },
			props: true,
			component: () => import( "@/views/HeroSettings" )
		}
	]
} );

router.beforeEach( ( to, from, next ) => {
	const currentUser = firebase.auth().currentUser;
	const requiresAuth = to.matched.some( record =>
		record.meta && record.meta.requiresAuth
	);

	if ( requiresAuth && !currentUser ) {
		next( { name: "login" } );
	}

	next();
} );

export default router;
