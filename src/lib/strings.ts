/** Trim a string, returning null when it is empty or undefined. */
export function blankToNull(value?: string | null): string | null {
  const trimmed = value?.trim();
  if (!trimmed) return null;
  return trimmed;
}
