/**
 * Data mock frontend untuk 5 kelas jerawat (sesuai proposal).
 * Nanti cukup ganti sumber `classId` & `confidence` dengan hasil model/backend;
 * teks edukasi dan tampilan tetap dibaca dari sini.
 *
 * Penanda *teks* pada `trigger`/`visual` dirender miring oleh <EmphasisText />.
 */

export type AcneClassId =
  | 'blackheads'
  | 'whiteheads'
  | 'papules'
  | 'pustules'
  | 'cysts';

export type Severity = 'none' | 'mild' | 'moderate' | 'severe';

/** Koordinat relatif (0–1) terhadap area pratinjau citra. */
export type BoundingBox = {
  x: number;
  y: number;
  w: number;
  h: number;
};

export type AcneClassInfo = {
  id: AcneClassId;
  /** Nama tampilan (Bahasa Indonesia) */
  name: string;
  /** Nama kelas pada dataset */
  englishName: string;
  /** Subjudul singkat setelah nama kelas */
  summary: string;
  severity: Severity;
  severityLabel: string;
  visual: string;
  trigger: string;
  /** Posisi kotak deteksi contoh untuk mock */
  boxes: BoundingBox[];
};

export const ACNE_CLASSES: Record<AcneClassId, AcneClassInfo> = {
  blackheads: {
    id: 'blackheads',
    name: 'Komedo Hitam',
    englishName: 'Blackheads',
    summary: 'Komedo terbuka berwarna gelap',
    severity: 'none',
    severityLabel: 'NON-INFLAMASI',
    visual:
      'Titik hitam atau kecokelatan pada pori yang terbuka, permukaannya datar atau sedikit menonjol tanpa kemerahan.',
    trigger:
      'Sumbatan sebum dan sel kulit mati pada pori yang teroksidasi oleh udara sehingga warnanya menggelap.',
    boxes: [
      { x: 0.2, y: 0.3, w: 0.13, h: 0.2 },
      { x: 0.52, y: 0.24, w: 0.13, h: 0.2 },
      { x: 0.66, y: 0.56, w: 0.13, h: 0.2 },
    ],
  },
  whiteheads: {
    id: 'whiteheads',
    name: 'Komedo Putih',
    englishName: 'Whiteheads',
    summary: 'Komedo tertutup di bawah permukaan kulit',
    severity: 'none',
    severityLabel: 'NON-INFLAMASI',
    visual:
      'Benjolan kecil berwarna putih atau sewarna kulit dengan permukaan tertutup, tanpa nyeri maupun kemerahan di sekitarnya.',
    trigger:
      'Pori tersumbat sebum dan sel kulit mati dengan lubang pori yang tertutup, sering diperparah produk perawatan yang terlalu berminyak.',
    boxes: [
      { x: 0.24, y: 0.28, w: 0.13, h: 0.2 },
      { x: 0.58, y: 0.34, w: 0.13, h: 0.2 },
      { x: 0.4, y: 0.62, w: 0.13, h: 0.2 },
    ],
  },
  papules: {
    id: 'papules',
    name: 'Jerawat Papula',
    englishName: 'Papules',
    summary: 'Benjolan merah kecil tanpa nanah',
    severity: 'mild',
    severityLabel: 'INFLAMASI RINGAN',
    visual:
      'Benjolan kecil kemerahan yang keras dan terasa nyeri bila ditekan, tanpa puncak putih atau nanah yang terlihat.',
    trigger:
      'Dinding pori meradang akibat sebum berlebih dan pertumbuhan bakteri *Cutibacterium acnes*, sering dipicu perubahan hormon.',
    boxes: [
      { x: 0.3, y: 0.26, w: 0.18, h: 0.28 },
      { x: 0.6, y: 0.46, w: 0.18, h: 0.28 },
    ],
  },
  pustules: {
    id: 'pustules',
    name: 'Jerawat Pustula',
    englishName: 'Pustules',
    summary: 'Lesi inflamasi berisi cairan',
    severity: 'moderate',
    severityLabel: 'INFLAMASI SEDANG',
    visual:
      'Berwarna kemerahan di bagian dasar dengan puncak putih atau kekuningan berisi nanah ringan.',
    trigger:
      'Penyumbatan pori-pori oleh sebum berlebih serta akumulasi bakteri *Cutibacterium acnes*.',
    boxes: [{ x: 0.37, y: 0.15, w: 0.25, h: 0.42 }],
  },
  cysts: {
    id: 'cysts',
    name: 'Jerawat Kistik',
    englishName: 'Cysts',
    summary: 'Benjolan dalam berisi nanah dan nyeri',
    severity: 'severe',
    severityLabel: 'INFLAMASI BERAT',
    visual:
      'Benjolan besar, lunak, dan kemerahan yang terbentuk jauh di bawah permukaan kulit, terasa nyeri, kadang berisi nanah.',
    trigger:
      'Peradangan dalam akibat pori tersumbat yang pecah ke jaringan sekitar, dipengaruhi hormon, bakteri *Cutibacterium acnes*, dan faktor genetik.',
    boxes: [{ x: 0.3, y: 0.12, w: 0.38, h: 0.62 }],
  },
};

export const ACNE_CLASS_IDS = Object.keys(ACNE_CLASSES) as AcneClassId[];

export function isAcneClassId(value: unknown): value is AcneClassId {
  return typeof value === 'string' && value in ACNE_CLASSES;
}

export type MockResult = {
  classId: AcneClassId;
  /** 0–1 */
  confidence: number;
  /** epoch ms */
  analyzedAt: number;
};

/** Hasil analisis palsu untuk demo UI. Kirim `classId` untuk memaksa kelas tertentu. */
export function createMockResult(classId?: string): MockResult {
  const id = isAcneClassId(classId)
    ? classId
    : ACNE_CLASS_IDS[Math.floor(Math.random() * ACNE_CLASS_IDS.length)];

  const confidence = Math.round((0.86 + Math.random() * 0.11) * 1000) / 1000;

  return { classId: id, confidence, analyzedAt: Date.now() };
}
