import { Image, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';
import ScanIcon from '../icons/scan.svg';
import DetectionBox, { type Detection } from './detectionBox';
import type { SeverityTone } from './severityTone';

type DetectionImageProps = {
  imageUri?: string | null;
  detections: Detection[];
  label: string;
  tone: SeverityTone;
};

export default function DetectionImage({
  imageUri,
  detections,
  label,
  tone,
}: DetectionImageProps) {
  return (
    <View style={styles.container}>
      {imageUri ? (
        <Image
          source={{ uri: imageUri }}
          style={StyleSheet.absoluteFill}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.placeholder} />
      )}

      {/* Bingkai pindai */}
      <View pointerEvents="none" style={styles.frame} />

      {detections.map((detection, index) => (
        <DetectionBox
          key={index}
          detection={detection}
          label={label}
          tone={tone}
        />
      ))}

      <View style={styles.countChip}>
        <ScanIcon width={12} height={12} />

        <Text style={styles.countText}>
          {detections.length} Titik Fokus Terdeteksi
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 1.6,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#DDEFE6',
  },

  placeholder: {
    flex: 1,
    backgroundColor: '#DDEFE6',
  },

  frame: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: `${Colors.mint}99`,
  },

  countChip: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: Colors.surface,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  countText: {
    fontSize: 9,
    fontWeight: '800',
    color: Colors.primary,
  },
});
