const path = require( "path" );

module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				"@": path.resolve( __dirname, "src" )
			}
		}
	},

	pluginOptions: {
		"style-resources-loader": {
			preProcessor: "stylus",
			patterns: [
				path.resolve( __dirname, "src/node_modules/vuetify/src/stylus/**/*.styl" ),
			]
		}
	}
};
