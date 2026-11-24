const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
  'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des',
];

const WIB_OFFSET_MS = 7 * 60 * 60 * 1000;

const pad = (n: number) => String(n).padStart(2, '0');

/** Contoh: "24 Okt 2023 • 09:42 WIB" (selalu dihitung dalam zona WIB). */
export function formatAnalysisDate(timestamp: number): string {
  const d = new Date(timestamp + WIB_OFFSET_MS);

  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()} • ${pad(
    d.getUTCHours()
  )}:${pad(d.getUTCMinutes())} WIB`;
}
