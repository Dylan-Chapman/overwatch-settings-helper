import deepFreeze from "@/utils/deep-freeze";

export default deepFreeze( [
	{
		name: "Toggle Barrier",
		type: "switch",
		default: false
	},
	{
		name: "Movement Relative to Camera During Barrier Free Look",
		type: "switch",
		default: true
	}
] );
