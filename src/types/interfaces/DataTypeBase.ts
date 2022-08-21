import type { DataTypeCategory } from "../enums/DataTypeCategory";
import type { DataTypeKind } from "../enums/DataTypeKind";

export interface DataTypeBase {
	database_name: string;
	schema_id: number;
	schema_name: string;
	type_id: number;
	type_name: string;
	kind: DataTypeKind;
	category: DataTypeCategory;
	comment: string | null;
}
