import { data } from "./example-inputs/data";
import { query } from "./example-inputs/query";
import { indexAverage } from "./function";

const _data = data;
const _query = query;

console.log("Starting...");
console.time("duration: ");
console.log(indexAverage(_data, _query));
console.timeEnd("duration: ");
console.log("Done.");
