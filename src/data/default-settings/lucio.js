import deepFreeze from "@/utils/deep-freeze";

export default deepFreeze( [
	{
		name: "Hold to Crossfade",
		type: "switch",
		default: false
	},
	{
		name: "Allow Backwards Wall Ride",
		type: "switch",
		default: false
	}
] );
