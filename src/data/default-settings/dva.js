import deepFreeze from "@/utils/deep-freeze";

export default deepFreeze( [
	{
		name: "Toogle Defense Matrix",
		type: "switch",
		default: false
	},
	{
		name: "Hold Boosters",
		type: "switch",
		default: false
	}
] );
