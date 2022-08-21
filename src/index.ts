import "source-map-support/register";

import { Generate as Gen } from "./commands/Generate";

const Generate = Gen.run;
export default Generate;
