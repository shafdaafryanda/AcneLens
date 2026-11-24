import { Animated, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';
import ProgressRing from '../shared/progressRing';

type LoadingIndicatorProps = {
  progress: Animated.Value;
  percent: number;
};

export default function LoadingIndicator({
  progress,
  percent,
}: LoadingIndicatorProps) {
  return (
    <View
      accessible
      accessibilityRole="progressbar"
      accessibilityLabel="Memproses analisis kulit"
      accessibilityValue={{ min: 0, max: 100, now: percent }}
    >
      <ProgressRing
        progress={progress}
        size={160}
        strokeWidth={7}
        trackColor="#E0EBE6"
      >
        <Text style={styles.percent}>{percent}%</Text>
        <Text style={styles.label}>MEMPROSES</Text>
      </ProgressRing>
    </View>
  );
}

const styles = StyleSheet.create({
  percent: {
    fontSize: 34,
    fontWeight: '800',
    color: Colors.primary,
  },

  label: {
    marginTop: 2,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    color: Colors.teal,
  },
});
