import type { Operation } from "@/types/Operation";

export const humanReadableOperationLookup: Record<Operation, string> = {
  add: "+",
  div: "÷",
  mul: "x",
  sub: "-",
};
