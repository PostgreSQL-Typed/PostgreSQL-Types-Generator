import { DataTypeKind } from "../../../types/enums/DataTypeKind";
import { printArrayZod } from "../printers/printArrayZod";
import { printDomainZod } from "../printers/printDomainZod";
import { printEnumZod } from "../printers/printEnumZod";

import type { Printer } from "../../../classes/Printer";
import type { FileContext } from "../../../types/interfaces/FileContext";
import type { DataType } from "../../../types/types/DataType";

export function getZodType(
	type: DataType,
	context: Printer,
	file: FileContext
): string {
	switch (type.kind) {
		case DataTypeKind.Array:
			return printArrayZod(type, context, file);
		case DataTypeKind.Domain:
			return printDomainZod(type, context, file);
		case DataTypeKind.Enum:
			return printEnumZod(type, context, file);
	}

	return "z.string()";
}
