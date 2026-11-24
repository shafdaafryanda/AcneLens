import { Colors } from '@/constants/colors';
import type { Severity } from '@/constants/acneClasses';

export type SeverityTone = {
  /** titik kecil di samping label tingkat inflamasi */
  dot: string;
  /** warna teks label tingkat inflamasi */
  text: string;
  /** warna label & kotak deteksi pada citra */
  box: string;
};

export const SEVERITY_TONES: Record<Severity, SeverityTone> = {
  none: { dot: Colors.teal, text: Colors.teal, box: Colors.teal },
  mild: { dot: '#D9896D', text: '#A75E47', box: '#B5573A' },
  moderate: { dot: '#8A3B12', text: '#7A2E0E', box: Colors.brown },
  severe: { dot: Colors.danger, text: '#9C2F1B', box: '#A63A25' },
};
