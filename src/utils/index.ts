export const findTotalMinutes = (time: string) => {
	const [numeric_time, zone] = time.split(" ");
	const [hours, minutes] = numeric_time.split(":");
	const zoneTime = zone === "am" ? 0 : 12 * 60;
	return Number(hours) * 60 + Number(minutes) + zoneTime;
};

export const findHour = (idx: number) => {
	let time = idx === 0 ? "12:00 am" : "";
	if (idx === 12) time = "12:00 pm";
	if (idx > 12) {
		time = ` ${idx % 12}:00 pm`;
	}
	if (idx > 0 && idx < 12) {
		time = ` ${idx}:00 am`;
	}
	return time;
};
