import { Client } from "pg";

import { ClassKind } from "../types/enums/ClassKind";
import { r } from "../util/chalk";
import { getAttributes } from "../util/functions/getters/getAttributes";
import { getClasses } from "../util/functions/getters/getClasses";
import { getConsoleHeader } from "../util/functions/getters/getConsoleHeader";
import { getConstraints } from "../util/functions/getters/getConstraints";
import { getDataTypes } from "../util/functions/getters/getDataTypes";
import { getTables } from "../util/functions/getters/getTables";

import type { FetchedData } from "../types/interfaces/FetchedData";
import type { Table } from "../types/interfaces/Table";
import type { DataType } from "../types/types/DataType";
import type { Attribute } from "../types/interfaces/Attribute";
import type { Class } from "../types/interfaces/Class";
import type { ClassDetails } from "../types/interfaces/ClassDetails";
import type { Constraint } from "../types/interfaces/Constraint";
import type { Connection } from "../types/interfaces/Connection";
import type { Config } from "../types/interfaces/Config";
import type { ProgressBar } from "../classes/ProgressBar";

export class Fetcher {
	private client: Client;
	private dbName: string = "";
	private tables: Table[] = [];
	private dataTypes: DataType[] = [];
	private classes: Class[] = [];
	private attributes: Attribute[] = [];
	private constraints: Constraint[] = [];
	constructor(
		private readonly config: Config,
		private readonly progressBar: ProgressBar,
		private readonly connection: string | Connection
	) {
		this.client = new Client({
			connectionString: this.formatted_connection_string
		});
	}

	public async connect(): Promise<void> {
		try {
			await this.client.connect();
			await this.setDatabaseName();
		} catch {
			this.progressBar.stop();
			console.log(
				getConsoleHeader(
					r("Could not connect to database!"),
					"Please check your connection settings.",
					false,
					`Used connection string: ${this.formatted_connection_string}`
				)
			);
			process.exit(1);
		}
	}

	private async setDatabaseName() {
		const {
			rows: [{ current_database }]
		} = await this.client.query<{ current_database: string }>(`
			SELECT current_database();
		`);
		this.dbName = current_database;
	}

	private get formatted_connection_string(): string {
		if (typeof this.connection === "string") return this.connection;

		if (this.connection.password)
			return `postgres://${this.connection.user}:${this.connection.password}@${this.connection.host}:${this.connection.port}/${this.connection.database}`;
		else
			return `postgres://${this.connection.user}@${this.connection.host}:${this.connection.port}/${this.connection.database}`;
	}

	private get schema_names(): string[] {
		return [...new Set(this.tables.map(({ schema_name }) => schema_name))];
	}

	public async fetch(): Promise<void> {
		this.progressBar.setStep(0);
		await this.fetchTables();
		this.progressBar.setStep(1);
		await this.fetchDataTypes();
		this.progressBar.setStep(2);
		await this.fetchClasses();
		this.progressBar.setStep(3);
		await this.fetchAttributes();
		this.progressBar.setStep(4);
		await this.fetchConstraints();
	}

	private async fetchTables(): Promise<void> {
		const tables = await getTables(this.client, this.config, this.dbName);
		if (!tables.length) {
			this.progressBar.stop();
			console.log(
				getConsoleHeader(
					r("Could not fetch any tables!"),
					"Please check your schemas/tables settings.",
					false,
					`Used connection string: ${this.formatted_connection_string}`
				)
			);
			process.exit(1);
		}
		this.tables = tables;
		this.progressBar.incrementProgress();
	}

	private async fetchDataTypes(): Promise<void> {
		const types = await getDataTypes(this.client, this.schema_names);
		if (!types.length) {
			this.progressBar.stop();
			console.log(
				getConsoleHeader(
					r("Could not fetch any data types!"),
					"Please check your schemas/tables settings.",
					false,
					`Used connection string: ${this.formatted_connection_string}`
				)
			);
			process.exit(1);
		}
		this.dataTypes = types;
		this.progressBar.incrementProgress();
	}

	private async fetchClasses(): Promise<void> {
		const classes = await getClasses(this.client, {
			schema_names: this.schema_names,
			kind: [
				ClassKind.OrdinaryTable,
				ClassKind.View,
				ClassKind.MaterializedView
			]
		});
		if (!classes.length) {
			this.progressBar.stop();
			console.log(
				getConsoleHeader(
					r("Could not fetch any classes!"),
					"Please check your schemas/tables settings.",
					false,
					`Used connection string: ${this.formatted_connection_string}`
				)
			);
			process.exit(1);
		}
		this.classes = classes;
		this.progressBar.incrementProgress();
	}

	private async fetchAttributes(): Promise<void> {
		const attributes = await getAttributes(this.client, {
			schema_names: this.schema_names,
			database_name: this.dbName
		});
		if (!attributes.length) {
			this.progressBar.stop();
			console.log(
				getConsoleHeader(
					r("Could not fetch any attributes!"),
					"Please check your schemas/tables settings.",
					false,
					`Used connection string: ${this.formatted_connection_string}`
				)
			);
			process.exit(1);
		}
		this.attributes = attributes;
		this.progressBar.incrementProgress();
	}

	private async fetchConstraints(): Promise<void> {
		const constraints = await getConstraints(this.client, this.schema_names);
		if (!constraints.length) {
			this.progressBar.stop();
			console.log(
				getConsoleHeader(
					r("Could not fetch any constraints!"),
					"Please check your schemas/tables settings.",
					false,
					`Used connection string: ${this.formatted_connection_string}`
				)
			);
			process.exit(1);
		}
		this.constraints = constraints;
		this.progressBar.incrementProgress();
	}

	public get fetchedData(): FetchedData {
		return {
			tables: this.tables,
			types: this.dataTypes,
			classes: this.classes.map(
				(cls): ClassDetails => ({
					...cls,
					attributes: this.attributes.filter(
						att => att.class_id === cls.class_id
					),
					constraints: this.constraints.filter(
						con => con.class_id === cls.class_id
					)
				})
			)
		};
	}

	public async disconnect(): Promise<void> {
		await this.client.end();
	}
}
