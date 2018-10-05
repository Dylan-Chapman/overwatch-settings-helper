<script>
import allHeroesSettings from "@/data/default-settings/all-heroes";
import Settings from "@/components/Settings";

export default {
	name: "AllHeroesSettings",

	render() {
		return <Settings
			banner={require( "@/assets/img/banners/all-heroes.png" )}
			settings={allHeroesSettings}
			title={"All Heroes Settings"}
		></Settings>;
	}
};
</script>
