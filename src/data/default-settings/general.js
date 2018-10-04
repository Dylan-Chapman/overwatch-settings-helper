import deepFreeze from "@/utils/deep-freeze";

export default deepFreeze( [
	{
		name: "Mouse",
		type: "section",
		settings: [
			{
				name: "Sensitivity",
				type: "slider",
				default: 8,
				granularity: 0.01
			},
			{
				name: "Invert Look",
				type: "switch",
				default: false
			}
		]
	},
	{
		name: "Controller",
		type: "section",
		settings: [
			{
				name: "Horizontal Sensitivity",
				type: "slider",
				default: 30
			},
			{
				name: "Vertical Sensitivity",
				type: "slider",
				default: 30
			},
			{
				name: "Advanced",
				type: "panel",
				settings: [
					{
						name: "Aim Assist Strength",
						type: "slider",
						default: 50
					},
					{
						name: "Aim Assist Window Size",
						type: "slider",
						default: 50
					},
					{
						name: "Aim Assist Legacy Mode",
						type: "switch",
						default: false
					},
					{
						name: "Aim Assist Ease In",
						type: "slider",
						default: 50
					},
					{
						name: "Aim Smoothing",
						type: "slider",
						default: 50
					},
					{
						name: "Aim Ease In",
						type: "slider",
						default: 50
					},
					{
						name: "Invert Vertical Look",
						type: "switch",
						default: false
					},
					{
						name: "Invert Horizontal Look",
						type: "switch",
						default: false
					},
					{
						name: "Vibration",
						type: "switch",
						default: false
					},
					{
						name: "Invert Vertical Look",
						type: "switch",
						default: false
					},
					{
						name: "Switch Movement/Look Sticks",
						type: "switch",
						default: false
					},
					{
						name: "Legacy Sticks",
						type: "switch",
						default: false
					},
					{
						name: "Aim Technique",
						type: "select",
						default: "Dual-Zone",
						options: [
							"Dual-Zone",
							"Exponential Ramp",
							"Linear Ramp"
						]
					}
				]
			}
		]
	},
	{
		name: "Hero",
		type: "section",
		settings: [
			{
				name: "Allied Health Bars",
				type: "switch",
				default: true
			}
		]
	},
	{
		name: "Movement",
		type: "section",
		settings: [
			{
				name: "Crouch",
				type: "keybind",
				default: {
					xbox: null
				}
			},
			{
				name: "Toggle Crouch",
				type: "keybind",
				default: {
					xbox: "B"
				}
			},
			{
				name: "Jump",
				type: "keybind",
				default: {
					xbox: "A"
				}
			}
		]
	},
	{
		name: "Weapons & Abilities",
		type: "section",
		settings: [
			{
				name: "Ability 1",
				type: "keybind",
				default: {
					xbox: "LB"
				}
			},
			{
				name: "Ability 2",
				type: "keybind",
				default: {
					xbox: "RB"
				}
			},
			{
				name: "Ability 3 (Ultimate)",
				type: "keybind",
				default: {
					xbox: "Y"
				}
			},
			{
				name: "Interact",
				type: "keybind",
				default: {
					xbox: "Left Stick"
				}
			},
			{
				name: "Primary Fire",
				type: "keybind",
				default: {
					xbox: "RT"
				}
			},
			{
				name: "Secondary Fire",
				type: "keybind",
				default: {
					xbox: "LT"
				}
			},
			{
				name: "Quick Melee",
				type: "keybind",
				default: {
					xbox: "Right Stick"
				}
			},
			{
				name: "Reload",
				type: "keybind",
				default: {
					xbox: "X"
				}
			},
			{
				name: "Next Weapon",
				type: "keybind",
				default: {
					xbox: "D-Pad Right"
				}
			},
			{
				name: "Previous Weapon",
				type: "keybind",
				default: {
					xbox: null
				}
			}
		]
	}
] );
