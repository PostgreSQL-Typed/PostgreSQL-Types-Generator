import commandLineUsage from "command-line-usage";

import { commands, globalArugments } from "../commands";
import { DESCRIPTION, LOGGER as logger } from "../util/constants";
import { getConsoleHeader } from "../util/functions/getters/getConsoleHeader";

import type { Argument } from "../types/interfaces/Argument";
import type { Command } from "../types/interfaces/Command";
import type { Section } from "command-line-usage";

export const Help: Argument = {
	name: "help",
	description: "Print out helpful usage information",
	type: Boolean,
	alias: "h",
	run: runner
};

const LOGGER = logger.extend("HelpArgument");

function runner(_: unknown, command?: Command) {
	LOGGER("Running Help Argument");
	if (command) {
		LOGGER(`Printing help for command ${command.name}`);
		return commandHelp(command);
	}

	LOGGER("Printing help for all commands");
	const sections: Section[] = [
		{
			content: getConsoleHeader(
				DESCRIPTION,
				"Usage: `pgtg <command> [options ...]`",
				true
			),
			raw: true
		},
		{
			header: "Available Commands",
			content: commands.map(c => ({
				name: c.name,
				summary: c.description
			}))
		},
		{
			header: "Global Options",
			optionList: globalArugments
		},
		{
			content: "Run `pgtg <command> -h` for help with a specific command.",
			raw: true
		}
	];

	const usage = commandLineUsage(sections);
	console.log(usage);
	process.exit(0);
}

function commandHelp(command: Command) {
	const sections: Section[] = [
		{
			content: getConsoleHeader(
				DESCRIPTION,
				"Usage: `pgtg " + command.name + " [options ...]`",
				true
			),
			raw: true
		},
		{
			header: `${command.name} Options`,
			content: command.arguments.length
				? command.arguments
				: "This command has no extra options."
		},
		{
			header: "Global Options",
			optionList: globalArugments
		}
	];

	const usage = commandLineUsage(sections);
	console.log(usage);
	process.exit(0);
}
