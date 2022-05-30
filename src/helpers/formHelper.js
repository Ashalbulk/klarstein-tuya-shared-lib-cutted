export function isValid(fields) {
  for (const fieldName in fields) {
    if (!fields[fieldName].isValid) {
      return false;
    }
  }
  return true;
}
