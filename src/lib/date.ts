/**
 * Date helpers. A "day" in `progress` is a UTC calendar date, so that date-only
 * (`@db.Date`) columns and due/target comparisons never drift across timezones.
 * Always normalize a `Date` through these before querying or upserting.
 */

/** Midnight UTC of the given date (defaults to now). */
export function startOfDayUTC(date: Date = new Date()): Date {
  return new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()),
  );
}

/** Today as a UTC date-only value (midnight UTC). */
export function todayUTC(): Date {
  return startOfDayUTC(new Date());
}

/** Returns a new UTC-midnight date `days` (may be negative) away from `date`. */
export function addDays(date: Date, days: number): Date {
  const d = startOfDayUTC(date);
  d.setUTCDate(d.getUTCDate() + days);
  return d;
}

/** Whole calendar days from `a` to `b` (i.e. b - a). Negative if `b` precedes `a`. */
export function diffInDays(a: Date, b: Date): number {
  const ms = startOfDayUTC(b).getTime() - startOfDayUTC(a).getTime();
  return Math.round(ms / 86_400_000);
}

/**
 * A "day key" is a `YYYY-MM-DD` string for a *local* calendar day. The client
 * computes it from the browser's timezone (`todayLocalKey`) and passes it to the
 * server, which stores it as the UTC-midnight `Date` of that calendar day
 * (`dayKeyToDate`) in `@db.Date` columns. This keeps "today" aligned with the
 * user's wall calendar instead of drifting at UTC midnight.
 */

/** Today's local calendar day as `YYYY-MM-DD` (uses the runtime's local timezone). */
export function todayLocalKey(): string {
  return dateToLocalKey(new Date());
}

/** Format a `Date` as a `YYYY-MM-DD` key in the runtime's local timezone. */
export function dateToLocalKey(date: Date): string {
  const y = date.getFullYear();
  const m = `${date.getMonth() + 1}`.padStart(2, "0");
  const d = `${date.getDate()}`.padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/** Convert a `YYYY-MM-DD` day key into the UTC-midnight `Date` stored in `@db.Date`. */
export function dayKeyToDate(key: string): Date {
  return new Date(`${key}T00:00:00.000Z`);
}

/** Format a stored `@db.Date` value (UTC midnight) back into its `YYYY-MM-DD` key. */
export function dateToDayKey(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/** Format a `Date` for an `<input type="datetime-local">` value (local wall time). */
export function toDatetimeLocal(date: Date): string {
  const p = (n: number) => `${n}`.padStart(2, "0");
  return `${date.getFullYear()}-${p(date.getMonth() + 1)}-${p(
    date.getDate(),
  )}T${p(date.getHours())}:${p(date.getMinutes())}`;
}

/**
 * Format a day-only value (stored at UTC midnight) as a readable date. Formatted
 * in UTC so the calendar day matches what was entered — formatting in local time
 * would shift it a day for users behind UTC.
 */
export function formatDay(date: Date): string {
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Shift a `YYYY-MM-DD` day key by whole days (may be negative). */
export function shiftDayKey(key: string, deltaDays: number): string {
  return dateToDayKey(addDays(dayKeyToDate(key), deltaDays));
}

/** The Monday of the week containing `key`, as a `YYYY-MM-DD` day key. */
export function startOfWeekKey(key: string): string {
  const dow = dayKeyToDate(key).getUTCDay(); // 0=Sun … 6=Sat
  const daysSinceMonday = (dow + 6) % 7;
  return shiftDayKey(key, -daysSinceMonday);
}

/** Short weekday name (e.g. "Mon") for a day-only value, formatted in UTC. */
export function formatWeekday(date: Date): string {
  return date.toLocaleDateString(undefined, {
    weekday: "short",
    timeZone: "UTC",
  });
}
