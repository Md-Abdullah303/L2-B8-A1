const multiplyValue = (value: number, multiplier?: number): number => {
  return value * (multiplier ?? 2);
};

const processInput = (value: string | number | boolean): string | number => {
  if (typeof value === "string") {
    return value.trim().toLocaleLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return value === true ? "Active" : "Inactive";
  }
};
