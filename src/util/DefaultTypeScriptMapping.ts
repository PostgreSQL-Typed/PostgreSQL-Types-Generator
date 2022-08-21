import { DataType } from "postgresql-data-types";

export const DefaultTypeScriptMapping = new Map<
	DataType,
	string | [string, string[]]
>([
	[DataType._bool, "Array<boolean>"],
	[DataType._bpchar, "Array<string>"],
	[DataType._bytea, "Array<Buffer>"],
	[DataType._cidr, "Array<string>"],
	[
		DataType._circle,
		["Array<Circle>", [`import type { Circle } from "postgresql-typed";`]]
	],
	[DataType._date, "Array<string>"],
	[DataType._float4, "Array<number>"],
	[DataType._float8, "Array<number>"],
	[DataType._inet, "Array<string>"],
	[DataType._int2, "Array<number>"],
	[DataType._int4, "Array<number>"],
	[DataType._int8, "Array<string>"],
	[
		DataType._interval,
		["Array<Interval>", [`import type { Interval } from "postgresql-typed";`]]
	],
	[DataType._json, "Array<any>"],
	[DataType._jsonb, "Array<any>"],
	[DataType._macaddr, "Array<string>"],
	[DataType._money, "Array<string>"],
	[DataType._numeric, "Array<number>"],
	[DataType._numrange, "Array<string>"],
	[DataType._oid, "Array<number>"],
	[DataType._point, "Array<{x: number, y: number}>"],
	[DataType._regproc, "Array<string>"],
	[DataType._text, "Array<string>"],
	[DataType._time, "Array<string>"],
	[DataType._timestamp, "Array<string>"],
	[DataType._timestamptz, "Array<string>"],
	[DataType._timetz, "Array<string>"],
	[DataType._uuid, "Array<string>"],
	[DataType._varchar, "Array<string>"],
	[DataType.bool, "boolean"],
	[DataType.bytea, "Buffer"],
	[
		DataType.circle,
		["Circle", [`import type { Circle } from "postgresql-typed";`]]
	],
	[DataType.cardinal_number, "number"],
	[DataType.date, "string"],
	[DataType.float4, "number"],
	[DataType.float8, "number"],
	[DataType.int2, "number"],
	[DataType.int4, "number"],
	[DataType.int8, "string"],
	[
		DataType.interval,
		["Interval", [`import type { Interval } from "postgresql-typed";`]]
	],
	[DataType.json, "any"],
	[DataType.jsonb, "any"],
	[DataType.oid, "number"],
	[DataType.point, "{x: number, y: number}"],
	[DataType.timestamp, "string"],
	[DataType.timestamptz, "string"]
]);
