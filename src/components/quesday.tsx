"use server";

export default async function QuesdayBlock() {
	// set timezone to Melbourne
	process.env.TZ = "Australia/Melbourne";

	const now = new Date();

	// check if it is a Tuesday, between 6pm and 11pm
	if (now.getDay() === 2 && now.getHours() >= 18 && now.getHours() <= 23) {
		return (
			<h1 className="relative z-10 p-4 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-yellow-600 text-center font-sans font-bold">
				Yes! <br />
				What are you doing here! Go queue Open Queue!
			</h1>
		);
	} else {
		// Get the timestamp for the nextmost Tuesday at 6pm AEDT
		const nextTuesday = new Date();
		nextTuesday.setDate(
			nextTuesday.getDate() + ((2 - nextTuesday.getDay()) % 7 || 7)
		);
		// set the time to 6pm
		nextTuesday.setHours(18);
		// zero minutes, seconds
		nextTuesday.setMinutes(0);
		nextTuesday.setSeconds(0);

		return (
			<h1 className="relative z-10 p-4 text-lg md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-yellow-600 text-center font-sans font-bold">
				No... The next Open Tuesday is at{" "}
				<div>{nextTuesday.toLocaleString("en-AU")} Melbourne Time</div>
			</h1>
		);
	}
}
