import { z } from "zod";

import { zZodConfig } from "../interfaces/ZodConfig";

import type { ZodConfig } from "../interfaces/ZodConfig";

export interface TypesConfig {
	/**
	 * The directory (relative to this config) to put the generated code in
	 *
	 * @default "__generated__"
	 */
	directory: string;

	/**
	 * Whether to add debugging statements to the generated code
	 * @default false
	 */
	debug: boolean;

	/**
	 * Config for the zod generator
	 *
	 * @default {}
	 */
	zod: ZodConfig;

	/**
	 * What should custom types be called in the generated code
	 *
	 * You may use the following placeholders:
	 * - `TYPE_NAME`: The name of the type
	 *
	 * You may use the following formatters: (You can use more than one at a time)
	 * - `pascal-case`: Capitalize the first letter of each word
	 * - `camel-case`: Capitalize the first letter of each word, except for the first word
	 * - `plural`: Add an "s" to the end of the type name
	 * - `singular`: Remove the "s" from the end of the type name
	 *
	 * @default "{{ TYPE_NAME | pascal-case }}"
	 */
	domainTypeName: string;

	/**
	 * Where should custom types be located in the generated code
	 *
	 * You may use the following placeholders:
	 * - `TYPE_NAME`: The name of the type
	 *
	 * You may use the following formatters: (You can use more than one at a time)
	 * - `pascal-case`: Capitalize the first letter of each word
	 * - `camel-case`: Capitalize the first letter of each word, except for the first word
	 * - `plural`: Add an "s" to the end of the type name
	 * - `singular`: Remove the "s" from the end of the type name
	 *
	 * Note: .ts is automatically appended to the end of the path (unless you include it yourself)
	 *
	 * @default "_custom_types.ts"
	 */
	domainFileName: string;

	/**
	 * What should enum types be called in the generated code
	 *
	 * You may use the following placeholders:
	 * - `TYPE_NAME`: The name of the type
	 * - `DATABASE_NAME`: The name of the database
	 *
	 * You may use the following formatters: (You can use more than one at a time)
	 * - `pascal-case`: Capitalize the first letter of each word
	 * - `camel-case`: Capitalize the first letter of each word, except for the first word
	 * - `plural`: Add an "s" to the end of the type name
	 * - `singular`: Remove the "s" from the end of the type name
	 *
	 * @default "{{ TYPE_NAME | pascal-case }}"
	 */
	enumTypeName: string;

	/**
	 * Where should enum types be located in the generated code
	 *
	 * You may use the following placeholders:
	 * - `TYPE_NAME`: The name of the type
	 * - `DATABASE_NAME`: The name of the database
	 *
	 * You may use the following formatters: (You can use more than one at a time)
	 * - `pascal-case`: Capitalize the first letter of each word
	 * - `camel-case`: Capitalize the first letter of each word, except for the first word
	 * - `plural`: Add an "s" to the end of the type name
	 * - `singular`: Remove the "s" from the end of the type name
	 *
	 * Note: .ts is automatically appended to the end of the path (unless you include it yourself)
	 *
	 * @default "databases/{{ DATABASE_NAME }}/enums/{{ TYPE_NAME }}.ts"
	 */
	enumFileName: string;

	/**
	 * What should primary key types be called in the generated code
	 *
	 * You may use the following placeholders:
	 * - `TABLE_NAME`: The name of the table
	 * - `SCHEMA_NAME`: The name of the schema
	 * - `DATABASE_NAME`: The name of the database
	 *
	 * You may use the following formatters: (You can use more than one at a time)
	 * - `pascal-case`: Capitalize the first letter of each word
	 * - `camel-case`: Capitalize the first letter of each word, except for the first word
	 * - `plural`: Add an "s" to the end of the type name
	 * - `singular`: Remove the "s" from the end of the type name
	 *
	 * @default "{{ TABLE_NAME | pascal-case }}_PrimaryKey"
	 */
	primaryKeyTypeName: string;

	/**
	 * Where should primary key types be located in the generated code
	 *
	 * You may use the following placeholders:
	 * - `TABLE_NAME`: The name of the table
	 * - `SCHEMA_NAME`: The name of the schema
	 * - `DATABASE_NAME`: The name of the database
	 *
	 * You may use the following formatters: (You can use more than one at a time)
	 * - `pascal-case`: Capitalize the first letter of each word
	 * - `camel-case`: Capitalize the first letter of each word, except for the first word
	 * - `plural`: Add an "s" to the end of the type name
	 * - `singular`: Remove the "s" from the end of the type name
	 *
	 * Note: .ts is automatically appended to the end of the path (unless you include it yourself)
	 *
	 * @default "databases/{{ DATABASE_NAME }}/{{ SCHEMA_NAME }}/{{ TABLE_NAME }}.ts"
	 */
	primaryKeyFileName: string;

	/**
	 * What should table types be called in the generated code
	 *
	 * You may use the following placeholders:
	 * - `TABLE_NAME`: The name of the table
	 * - `SCHEMA_NAME`: The name of the schema
	 * - `DATABASE_NAME`: The name of the database
	 *
	 * You may use the following formatters: (You can use more than one at a time)
	 * - `pascal-case`: Capitalize the first letter of each word
	 * - `camel-case`: Capitalize the first letter of each word, except for the first word
	 * - `plural`: Add an "s" to the end of the type name
	 * - `singular`: Remove the "s" from the end of the type name
	 *
	 * @default "{{ TABLE_NAME | pascal-case }}"
	 */
	tableTypeName: string;

	/**
	 * Where should table types be located in the generated code
	 *
	 * You may use the following placeholders:
	 * - `TABLE_NAME`: The name of the table
	 * - `SCHEMA_NAME`: The name of the schema
	 * - `DATABASE_NAME`: The name of the database
	 *
	 * You may use the following formatters: (You can use more than one at a time)
	 * - `pascal-case`: Capitalize the first letter of each word
	 * - `camel-case`: Capitalize the first letter of each word, except for the first word
	 * - `plural`: Add an "s" to the end of the type name
	 * - `singular`: Remove the "s" from the end of the type name
	 *
	 * Note: .ts is automatically appended to the end of the path (unless you include it yourself)
	 *
	 * @default "databases/{{ DATABASE_NAME }}/{{ SCHEMA_NAME }}/{{ TABLE_NAME }}.ts"
	 */
	tableFileName: string;

	/**
	 * What should table insert parameter types be called in the generated code
	 *
	 * You may use the following placeholders:
	 * - `TABLE_NAME`: The name of the table
	 * - `SCHEMA_NAME`: The name of the schema
	 * - `DATABASE_NAME`: The name of the database
	 *
	 * You may use the following formatters: (You can use more than one at a time)
	 * - `pascal-case`: Capitalize the first letter of each word
	 * - `camel-case`: Capitalize the first letter of each word, except for the first word
	 * - `plural`: Add an "s" to the end of the type name
	 * - `singular`: Remove the "s" from the end of the type name
	 *
	 * @default "{{ TABLE_NAME | pascal-case }}_InsertParameters"
	 */
	tableInsertParametersTypeName: string;

	/**
	 * Where should table insert parameter types be located in the generated code
	 *
	 * You may use the following placeholders:
	 * - `TABLE_NAME`: The name of the table
	 * - `SCHEMA_NAME`: The name of the schema
	 * - `DATABASE_NAME`: The name of the database
	 *
	 * You may use the following formatters: (You can use more than one at a time)
	 * - `pascal-case`: Capitalize the first letter of each word
	 * - `camel-case`: Capitalize the first letter of each word, except for the first word
	 * - `plural`: Add an "s" to the end of the type name
	 * - `singular`: Remove the "s" from the end of the type name
	 *
	 * Note: .ts is automatically appended to the end of the path (unless you include it yourself)
	 *
	 * @default "databases/{{ DATABASE_NAME }}/{{ SCHEMA_NAME }}/{{ TABLE_NAME }}.ts"
	 */
	tableInsertParametersFileName: string;

	/**
	 * What should schema types be called in the generated code
	 *
	 * You may use the following placeholders:
	 * - `SCHEMA_NAME`: The name of the schema
	 * - `DATABASE_NAME`: The name of the database
	 *
	 * You may use the following formatters: (You can use more than one at a time)
	 * - `pascal-case`: Capitalize the first letter of each word
	 * - `camel-case`: Capitalize the first letter of each word, except for the first word
	 * - `plural`: Add an "s" to the end of the type name
	 * - `singular`: Remove the "s" from the end of the type name
	 *
	 * @default "{{ SCHEMA_NAME | pascal-case }}"
	 */
	schemaTypeName: string;

	/**
	 * Where should schema types be located in the generated code
	 *
	 * You may use the following placeholders:
	 * - `SCHEMA_NAME`: The name of the schema
	 * - `DATABASE_NAME`: The name of the database
	 *
	 * You may use the following formatters: (You can use more than one at a time)
	 * - `pascal-case`: Capitalize the first letter of each word
	 * - `camel-case`: Capitalize the first letter of each word, except for the first word
	 * - `plural`: Add an "s" to the end of the type name
	 * - `singular`: Remove the "s" from the end of the type name
	 *
	 * Note: .ts is automatically appended to the end of the path (unless you include it yourself)
	 *
	 * @default "databases/{{ DATABASE_NAME }}/{{ SCHEMA_NAME }}.ts"
	 */
	schemaFileName: string;

	/**
	 * What should schema data be called in the generated code
	 *
	 * You may use the following placeholders:
	 * - `SCHEMA_NAME`: The name of the schema
	 * - `DATABASE_NAME`: The name of the database
	 *
	 * You may use the following formatters: (You can use more than one at a time)
	 * - `pascal-case`: Capitalize the first letter of each word
	 * - `camel-case`: Capitalize the first letter of each word, except for the first word
	 * - `plural`: Add an "s" to the end of the type name
	 * - `singular`: Remove the "s" from the end of the type name
	 *
	 * @default "{{ SCHEMA_NAME | pascal-case }}_Data"
	 */
	schemaDataTypeName: string;

	/**
	 * Where should schema data be located in the generated code
	 *
	 * You may use the following placeholders:
	 * - `SCHEMA_NAME`: The name of the schema
	 * - `DATABASE_NAME`: The name of the database
	 *
	 * You may use the following formatters: (You can use more than one at a time)
	 * - `pascal-case`: Capitalize the first letter of each word
	 * - `camel-case`: Capitalize the first letter of each word, except for the first word
	 * - `plural`: Add an "s" to the end of the type name
	 * - `singular`: Remove the "s" from the end of the type name
	 *
	 * Note: .ts is automatically appended to the end of the path (unless you include it yourself)
	 *
	 * @default "databases/{{ DATABASE_NAME }}/{{ SCHEMA_NAME }}.ts"
	 */
	schemaDataFileName: string;

	/**
	 * What should database types be called in the generated code
	 *
	 * You may use the following placeholders:
	 * - `DATABASE_NAME`: The name of the database
	 *
	 * You may use the following formatters: (You can use more than one at a time)
	 * - `pascal-case`: Capitalize the first letter of each word
	 * - `camel-case`: Capitalize the first letter of each word, except for the first word
	 * - `plural`: Add an "s" to the end of the type name
	 * - `singular`: Remove the "s" from the end of the type name
	 *
	 * @default "{{ DATABASE_NAME | pascal-case }}"
	 */
	databaseTypeName: string;

	/**
	 * Where should database types be located in the generated code
	 *
	 * You may use the following placeholders:
	 * - `DATABASE_NAME`: The name of the database
	 *
	 * You may use the following formatters: (You can use more than one at a time)
	 * - `pascal-case`: Capitalize the first letter of each word
	 * - `camel-case`: Capitalize the first letter of each word, except for the first word
	 * - `plural`: Add an "s" to the end of the type name
	 * - `singular`: Remove the "s" from the end of the type name
	 *
	 * Note: .ts is automatically appended to the end of the path (unless you include it yourself)
	 *
	 * @default "databases/{{ DATABASE_NAME }}.ts"
	 */
	databaseFileName: string;

	/**
	 * What should database data be called in the generated code
	 *
	 * You may use the following placeholders:
	 * - `DATABASE_NAME`: The name of the database
	 *
	 * You may use the following formatters: (You can use more than one at a time)
	 * - `pascal-case`: Capitalize the first letter of each word
	 * - `camel-case`: Capitalize the first letter of each word, except for the first word
	 * - `plural`: Add an "s" to the end of the type name
	 * - `singular`: Remove the "s" from the end of the type name
	 *
	 * @default "{{ DATABASE_NAME | pascal-case }}_Data"
	 */
	databaseDataTypeName: string;

	/**
	 * Where should database data be located in the generated code
	 *
	 * You may use the following placeholders:
	 * - `DATABASE_NAME`: The name of the database
	 *
	 * You may use the following formatters: (You can use more than one at a time)
	 * - `pascal-case`: Capitalize the first letter of each word
	 * - `camel-case`: Capitalize the first letter of each word, except for the first word
	 * - `plural`: Add an "s" to the end of the type name
	 * - `singular`: Remove the "s" from the end of the type name
	 *
	 * Note: .ts is automatically appended to the end of the path (unless you include it yourself)
	 *
	 * @default "databases/{{ DATABASE_NAME }}.ts"
	 */
	databaseDataFileName: string;

	/**
	 * Override column types for some columns. The name can be either:
	 *
	 * - "table_name.column_name"
	 * - "schema_name.table_name.column_name"
	 *
	 * @default {}
	 */
	columnTypeOverrides: { [x: string]: string | undefined };

	/**
	 * Override generated TypeScript types for some types. The name can be either:
	 *
	 * - key of DataTypeID
	 * - value of DataTypeID
	 * - "custom_type_name"
	 * - "schema_name.custom_type_name"
	 *
	 * @default {}
	 *
	 * DataTypeID:
	 * @link https://github.com/Bas950/PostgreSQL-Types-Generator/blob/main/src/types/enums/DataTypeID.ts
	 */
	typeOverrides: { [x: string]: string | undefined };
}

export const zTypesConfig = z.object({
	directory: z.string().default("__generated__"),
	debug: z.boolean().default(false),
	zod: zZodConfig.default({}),
	domainTypeName: z.string().default("{{ TYPE_NAME | pascal-case }}"),
	domainFileName: z.string().default("_custom_types.ts"),
	enumTypeName: z.string().default("{{ TYPE_NAME | pascal-case }}"),
	enumFileName: z
		.string()
		.default("databases/{{ DATABASE_NAME }}/enums/{{ TYPE_NAME }}.ts"),
	primaryKeyTypeName: z
		.string()
		.default("{{ TABLE_NAME | pascal-case }}_PrimaryKey"),
	primaryKeyFileName: z
		.string()
		.default(
			"databases/{{ DATABASE_NAME }}/{{ SCHEMA_NAME }}/{{ TABLE_NAME }}.ts"
		),
	tableTypeName: z.string().default("{{ TABLE_NAME | pascal-case }}"),
	tableFileName: z
		.string()
		.default(
			"databases/{{ DATABASE_NAME }}/{{ SCHEMA_NAME }}/{{ TABLE_NAME }}.ts"
		),
	tableInsertParametersTypeName: z
		.string()
		.default("{{ TABLE_NAME | pascal-case }}_InsertParameters"),
	tableInsertParametersFileName: z
		.string()
		.default(
			"databases/{{ DATABASE_NAME }}/{{ SCHEMA_NAME }}/{{ TABLE_NAME }}.ts"
		),
	schemaTypeName: z.string().default("{{ SCHEMA_NAME | pascal-case }}"),
	schemaFileName: z
		.string()
		.default("databases/{{ DATABASE_NAME }}/{{ SCHEMA_NAME }}.ts"),
	schemaDataTypeName: z
		.string()
		.default("{{ SCHEMA_NAME | pascal-case }}_Data"),
	schemaDataFileName: z
		.string()
		.default("databases/{{ DATABASE_NAME }}/{{ SCHEMA_NAME }}.ts"),
	databaseTypeName: z.string().default("{{ DATABASE_NAME | pascal-case }}"),
	databaseFileName: z.string().default("databases/{{ DATABASE_NAME }}.ts"),
	databaseDataTypeName: z
		.string()
		.default("{{ DATABASE_NAME | pascal-case }}_Data"),
	databaseDataFileName: z.string().default("databases/{{ DATABASE_NAME }}.ts"),
	columnTypeOverrides: z.record(z.optional(z.string())).default({}),
	typeOverrides: z.record(z.optional(z.string())).default({})
});
