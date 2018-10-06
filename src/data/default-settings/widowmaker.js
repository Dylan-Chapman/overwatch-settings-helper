import deepFreeze from "@/utils/deep-freeze";

export default deepFreeze( [
	{
		name: "Toggle Zoom",
		type: "switch",
		default: false
	},
	{
		name: "Relative Aim Sensitivity While Zoomed",
		type: "slider",
		default: 30
	},
	{
		name: "Grappling Hook Sensitivity",
		type: "slider",
		default: 100
	},
	{
		name: "Recoil Recovery Aim Compensation",
		type: "switch",
		default: true
	}
] );
