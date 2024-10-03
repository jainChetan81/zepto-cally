export type CUSTOM_EVENTS = {
	start: string;
	end: string;
	title: string;
	description?: string;
	priority: "high" | "medium" | "low";
	guest?: Array<string>;
};

export const EVENTS: CUSTOM_EVENTS[] = [
	{
		start: "06:15 pm",
		end: "07:30 pm",
		title: "Meeting 2",
		priority: "high"
	},
	{
		start: "06:45 pm",
		end: "08:00 pm",
		title: "Meeting 3",
		priority: "medium"
	},
	{
		start: "7:00 pm",
		end: "07:50 pm",
		title: "Meeting 4",
		priority: "low"
	},
	{
		start: "4:30 am",
		end: "06:00 am",
		title: "Meeting 41",
		priority: "low"
	},
	{
		start: "3:30 am",
		end: "05:30 am",
		title: "Meeting 42",
		priority: "medium"
	},
	{
		start: "3:00 am",
		end: "07:00 am",
		title: "Meeting 43",
		priority: "high"
	}
];
