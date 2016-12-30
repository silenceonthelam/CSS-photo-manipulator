import {blendObjs}        from "./blend-objs";
import {colors}           from "./colors";
import {filters}          from "./filters";
import {mergedTransforms} from "./transforms";

export const ctrlsSchema = filters.concat(
                                mergedTransforms.concat(
                                    colors.concat(blendObjs)));