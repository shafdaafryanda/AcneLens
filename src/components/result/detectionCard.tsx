import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';
import type { AcneClassInfo } from '@/constants/acneClasses';
import ConfidenceBadge from './confidenceBadge';
import DetectionImage from './detectionImage';
import { SEVERITY_TONES } from './severityTone';

type DetectionCardProps = {
  info: AcneClassInfo;
  /** 0–1 */
  confidence: number;
  imageUri?: string | null;
};

export default function DetectionCard({
  info,
  confidence,
  imageUri,
}: DetectionCardProps) {
  const tone = SEVERITY_TONES[info.severity];

  // Mock: kepercayaan tiap kotak sedikit menurun dari nilai utama
  const detections = useMemo(
    () =>
      info.boxes.map((box, index) => ({
        ...box,
        confidence: Math.max(0.5, confidence - index * 0.015),
      })),
    [info.boxes, confidence]
  );

  return (
    <View style={styles.container}>
      {/* HEADLINE */}
      <View style={styles.topRow}>
        <View style={styles.info}>
          <View style={styles.severityRow}>
            <View style={[styles.severityDot, { backgroundColor: tone.dot }]} />

            <Text style={[styles.severityText, { color: tone.text }]}>
              {info.severityLabel}
            </Text>
          </View>

          <Text style={styles.title}>{info.name}</Text>

          <Text style={styles.subtitle}>
            {info.englishName} • {info.summary}
          </Text>
        </View>

        <ConfidenceBadge confidence={confidence} />
      </View>

      {/* CITRA + TITIK FOKUS */}
      <View style={styles.imageWrapper}>
        <DetectionImage
          imageUri={imageUri}
          detections={detections}
          label={info.name.replace(/^Jerawat /, '')}
          tone={tone}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E5F0EA',
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 10,
  },

  info: {
    flex: 1,
  },

  severityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 6,
  },

  severityDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },

  severityText: {
    fontSize: 9,
    fontWeight: '800',
  },

  title: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.primary,
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 10,
    lineHeight: 15,
    color: '#607C72',
  },

  imageWrapper: {
    marginTop: 12,
  },
});
