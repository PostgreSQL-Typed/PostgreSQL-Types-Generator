import type { DataType } from "../types/DataType";
import type { ClassDetails } from "../interfaces/ClassDetails";
import type { Table } from "../interfaces/Table";

export interface FetchedData {
	tables: Table[];
	types: DataType[];
	classes: ClassDetails[];
}
