import type { ReactNode } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';

import { Colors } from '@/constants/colors';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type ProgressRingProps = {
  /** 0–1, angka biasa atau Animated.Value */
  progress: number | Animated.Value;
  size: number;
  strokeWidth: number;
  trackColor?: string;
  progressColor?: string;
  children?: ReactNode;
};

export default function ProgressRing({
  progress,
  size,
  strokeWidth,
  trackColor = Colors.border,
  progressColor = Colors.teal,
  children,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  const dashOffset =
    typeof progress === 'number'
      ? circumference * (1 - Math.min(Math.max(progress, 0), 1))
      : progress.interpolate({
          inputRange: [0, 1],
          outputRange: [circumference, 0],
          extrapolate: 'clamp',
        });

  const arcProps = {
    cx: center,
    cy: center,
    r: radius,
    stroke: progressColor,
    strokeWidth,
    strokeLinecap: 'round' as const,
    strokeDasharray: circumference,
    fill: 'none',
  };

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size}>
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Mulai dari jam 12, searah jarum jam */}
        <G rotation={-90} origin={`${center}, ${center}`}>
          {typeof dashOffset === 'number' ? (
            <Circle {...arcProps} strokeDashoffset={dashOffset} />
          ) : (
            <AnimatedCircle {...arcProps} strokeDashoffset={dashOffset} />
          )}
        </G>
      </Svg>

      <View style={styles.center}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
