// Reduce json to only show one entry in each array
export function skeleton(json) {
  if (json instanceof Array) {
    if (json.length > 1) {
      return [
        skeleton(json[0]),
        `... (${json.length - 1} row${json.length == 2 ? "" : "s"} omitted)`,
      ];
    } else {
      return [skeleton(json[0])];
    }
  }
  if (json instanceof Object) {
    return Object.fromEntries(
      Object.entries(json).map(([key, value]) => [key, skeleton(value)])
    );
  }
  return json;
}
