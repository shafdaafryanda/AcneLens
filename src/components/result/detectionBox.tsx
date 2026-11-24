import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';
import type { BoundingBox } from '@/constants/acneClasses';
import type { SeverityTone } from './severityTone';

export type Detection = BoundingBox & {
  /** 0–1 */
  confidence: number;
};

type DetectionBoxProps = {
  detection: Detection;
  label: string;
  tone: SeverityTone;
};

const percent = (value: number) => `${value * 100}%` as `${number}%`;

export default function DetectionBox({
  detection,
  label,
  tone,
}: DetectionBoxProps) {
  const { x, y, w, h, confidence } = detection;

  // Kotak besar memuat label di dalam, kotak kecil menaruhnya di atas
  const labelInside = h >= 0.3;
  const showCrosshair = w >= 0.2;

  return (
    <View
      pointerEvents="none"
      style={[
        styles.box,
        {
          left: percent(x),
          top: percent(y),
          width: percent(w),
          height: percent(h),
          backgroundColor: `${tone.box}24`,
          borderColor: `${tone.box}66`,
        },
      ]}
    >
      <View
        style={[
          styles.label,
          labelInside ? styles.labelInside : styles.labelAbove,
          { backgroundColor: tone.box },
        ]}
      >
        <Text style={styles.labelText}>
          {label}
          {labelInside ? '\n' : ' '}
          {(confidence * 100).toFixed(1)}%
        </Text>
      </View>

      {showCrosshair && (
        <View style={styles.crosshair}>
          <View style={[styles.tick, styles.tickTop]} />
          <View style={[styles.tick, styles.tickBottom]} />
          <View style={[styles.tick, styles.tickLeft]} />
          <View style={[styles.tick, styles.tickRight]} />
        </View>
      )}

      <View style={[styles.dot, styles.dotStart]} />
      <View style={[styles.dot, styles.dotEnd]} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    position: 'absolute',
    borderWidth: 1,
    borderRadius: 8,
  },

  label: {
    position: 'absolute',
    left: 0,
    borderRadius: 5,
    paddingHorizontal: 7,
    paddingVertical: 4,
  },

  labelInside: {
    top: 6,
    left: 6,
  },

  labelAbove: {
    bottom: '100%',
    marginBottom: 4,
  },

  labelText: {
    fontSize: 9,
    lineHeight: 12,
    fontWeight: '800',
    color: Colors.textLight,
  },

  crosshair: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 40,
    height: 40,
    marginTop: -20,
    marginLeft: -20,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: `${Colors.mint}E6`,
  },

  tick: {
    position: 'absolute',
    backgroundColor: `${Colors.mint}E6`,
  },
  tickTop: { top: -8, left: 19, width: 1.5, height: 10 },
  tickBottom: { bottom: -8, left: 19, width: 1.5, height: 10 },
  tickLeft: { left: -8, top: 19, width: 10, height: 1.5 },
  tickRight: { right: -8, top: 19, width: 10, height: 1.5 },

  dot: {
    position: 'absolute',
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: Colors.mint,
  },
  dotStart: { top: -7, left: -7 },
  dotEnd: { bottom: -7, right: -7 },
});
