import { LOGGER, VERSION } from "../util/constants";

import type { Argument } from "../types/interfaces/Argument";

export const Version: Argument = {
	name: "version",
	description: "Prints the version of the program",
	type: Boolean,
	alias: "v",
	run: () => {
		LOGGER.extend("VersionArgument")("Printing version");
		console.log(`v${VERSION}`);
		process.exit(0);
	}
};
