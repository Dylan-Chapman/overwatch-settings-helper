export default function deepFreeze( obj ) {
	Object.freeze( obj );

	Object.getOwnPropertyNames( obj ).forEach( prop => {
		if ( obj.hasOwnProperty( prop )
			&& obj[prop] !== null
			&& ( typeof obj[prop] === "object" || typeof obj[prop] === "function" )
			&& !Object.isFrozen( obj[prop] )
		) {
			deepFreeze( obj[prop] );
		}
	} );

	return obj;
}
