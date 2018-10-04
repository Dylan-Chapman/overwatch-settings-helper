import deepFreeze from "@/utils/deep-freeze";

export default deepFreeze( [
	{
		name: "Toggle Beam Connection",
		type: "switch",
		default: false
	},
	{
		name: "Guardian Angel Prefers Beam Target",
		type: "switch",
		default: true
	},
	{
		name: "Toggle Guardian Angel",
		type: "switch",
		default: true
	},
	{
		name: "Guardian Angel Sensitivity",
		type: "slider",
		default: 100
	},
	{
		name: "Beam Sensitivity",
		type: "slider",
		default: 100
	}
] );
