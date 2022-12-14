import { ClassKind } from "../../../types/enums/ClassKind";
import { printClassZod } from "../../functions/printers/printClassZod";

import type { Printer } from "../../../classes/Printer";
import type { ClassDetails } from "../../../types/interfaces/ClassDetails";

export function printSchemaZod(types: ClassDetails[], printer: Printer) {
	if (types.some(type => type.kind !== ClassKind.OrdinaryTable))
		throw new Error(
			"printSchemaZod only supports ordinary tables at the moment."
		);

	const SchemaZodRecord = printer.context.pushValueDeclaration(
		{
			type: "z_schema_data",
			name: types[0].schema_name,
			databaseName: types[0].database_name
		},
		(identifier, { getImport }) => [
			`const ${identifier} = {`,
			`  name: "${types[0].schema_name}" as "${types[0].schema_name}",`,
			`  tables: [`,
			types
				.filter(cls => cls.kind === ClassKind.OrdinaryTable)
				.map(cls => {
					const { zInsertParameters } = printClassZod(cls, printer);
					return `    {\n      name: "${cls.class_name}" as "${
						cls.class_name
					}",\n      zod: ${getImport(zInsertParameters)}\n    }`;
				})
				.join(",\n"),
			`  ]`,
			`};`
		]
	);

	printer.context.pushReExport(
		{
			type: "re_export",
			of: {
				type: "z_schema_data",
				name: types[0].schema_name,
				databaseName: types[0].database_name
			}
		},
		SchemaZodRecord
	);

	return { SchemaZodRecord };
}
