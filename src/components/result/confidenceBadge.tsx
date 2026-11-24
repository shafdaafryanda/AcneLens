import { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';
import ProgressRing from '../shared/progressRing';

type ConfidenceBadgeProps = {
  /** 0–1 */
  confidence: number;
};

export default function ConfidenceBadge({ confidence }: ConfidenceBadgeProps) {
  const progress = useRef(new Animated.Value(0)).current;

  // Satu-satunya animasi di layar hasil: cincin terisi saat hasil muncul
  useEffect(() => {
    Animated.timing(progress, {
      toValue: confidence,
      duration: 900,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  }, [confidence, progress]);

  return (
    <View style={styles.container}>
      <ProgressRing progress={progress} size={46} strokeWidth={4}>
        <Text style={styles.percent}>{Math.round(confidence * 100)}%</Text>
      </ProgressRing>

      <Text style={styles.label}>Kecocokan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 78,
    alignItems: 'center',
    gap: 6,
    backgroundColor: Colors.primarySoft,
    borderRadius: 10,
    paddingVertical: 10,
  },

  percent: {
    fontSize: 10,
    fontWeight: '800',
    color: Colors.primary,
  },

  label: {
    fontSize: 9,
    fontWeight: '700',
    color: Colors.text,
  },
});
