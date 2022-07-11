export function classNames(classNames: (string | boolean | undefined)[]) {
  return classNames.filter((className) => className).join(" ");
}
