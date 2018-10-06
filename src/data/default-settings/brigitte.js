import deepFreeze from "@/utils/deep-freeze";

export default deepFreeze( [
	{
		name: "Toggle Barrier",
		type: "switch",
		default: false
	},
	{
		name: "Repair Pack Sensitivity",
		type: "slider",
		default: 100
	}
] );
