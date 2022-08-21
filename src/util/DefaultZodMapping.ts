import { DataType } from "postgresql-data-types";

export const DefaultZodMapping = new Map<DataType, string | [string, string[]]>(
	[
		[DataType._bool, "z.array(z.boolean())"],
		[DataType._bpchar, "z.array(z.string())"],
		[DataType._bytea, "z.array(z.instanceof(Buffer))"],
		[DataType._cidr, "z.array(z.string())"],
		[
			DataType._circle,
			[
				"z.array(z.preprocess((val) => Circle.from(val as string).toString(), z.string()))",
				[`import { Circle } from "postgresql-typed";`]
			]
		],
		[DataType._date, "z.array(z.instanceof(Date))"],
		[DataType._float4, "z.array(z.number())"],
		[DataType._float8, "z.array(z.number())"],
		[DataType._inet, "z.array(z.string())"],
		[DataType._int2, "z.array(z.number())"],
		[DataType._int4, "z.array(z.number())"],
		[DataType._int8, "z.array(z.number())"],
		[
			DataType.interval,
			[
				"z.array(z.preprocess((val) => Interval.from(val as string).toString(), z.string()))",
				[`import { Interval } from "postgresql-typed";`]
			]
		],
		[
			DataType._json,
			[
				"z.array(zJson)",
				[`import { zJson } from "postgresql-types-generator/lib/util/zJson";`]
			]
		],
		[
			DataType._jsonb,
			[
				"z.array(zJson)",
				[`import { zJson } from "postgresql-types-generator/lib/util/zJson";`]
			]
		],
		[DataType._macaddr, "z.array(z.string())"],
		[DataType._money, "z.array(z.string())"],
		[DataType._numeric, "z.array(z.number())"],
		[DataType._numrange, "z.array(z.string())"],
		[DataType._oid, "z.array(z.number())"],
		[DataType._point, "Array<{x: number, y: number}>"],
		[DataType._regproc, "z.array(z.string())"],
		[DataType._text, "z.array(z.string())"],
		[DataType._time, "z.array(z.string())"],
		[DataType._timestamp, "z.array(z.instanceof(Date))"],
		[DataType._timestamptz, "z.array(z.instanceof(Date))"],
		[DataType._timetz, "z.array(z.string())"],
		[DataType._uuid, "z.array(z.string())"],
		[DataType._varchar, "z.array(z.string())"],
		[DataType.bool, "z.boolean()"],
		[DataType.bytea, "z.instanceof(Buffer)"],
		[
			DataType.circle,
			[
				"z.preprocess((val) => Circle.from(val as string).toString(), z.string())",
				[`import { Circle } from "postgresql-typed";`]
			]
		],
		[DataType.date, "z.instanceof(Date)"],
		[DataType.float4, "z.number()"],
		[DataType.float8, "z.number()"],
		[DataType.int2, "z.number()"],
		[DataType.int4, "z.number()"],
		[DataType.int8, "z.number()"],
		[
			DataType.interval,
			[
				"z.preprocess((val) => Interval.from(val as string).toString(), z.string())",
				[`import { Interval } from "postgresql-typed";`]
			]
		],
		[
			DataType.json,
			[
				"zJson",
				[`import { zJson } from "postgresql-types-generator/lib/util/zJson";`]
			]
		],
		[
			DataType.jsonb,
			[
				"zJson",
				[`import { zJson } from "postgresql-types-generator/lib/util/zJson";`]
			]
		],
		[DataType.oid, "z.number()"],
		[DataType.point, "{x: number, y: number}"],
		[DataType.timestamp, "z.instanceof(Date)"],
		[DataType.timestamptz, "z.instanceof(Date)"]
	]
);
