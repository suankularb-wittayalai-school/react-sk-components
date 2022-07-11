export function numStringToString(numString?: string | number) {
  return (
    (typeof numString == "number" ? numString.toString() : numString) || ""
  );
}
