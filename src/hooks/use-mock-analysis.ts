import { useEffect, useRef, useState } from 'react';
import { Animated, Easing } from 'react-native';

type Options = {
  /** Dipanggil sekali setelah progres mencapai 100%. */
  onComplete: () => void;
};

/**
 * Simulasi progres analisis untuk frontend saja.
 * Ganti dengan status request ke backend saat sudah tersedia.
 */
export function useMockAnalysis({ onComplete }: Options) {
  const progress = useRef(new Animated.Value(0)).current;
  const [percent, setPercent] = useState(0);

  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  });

  useEffect(() => {
    const id = progress.addListener(({ value }) => {
      setPercent(Math.round(value * 100));
    });

    const animation = Animated.sequence([
      Animated.timing(progress, {
        toValue: 0.82,
        duration: 2400,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }),
      Animated.timing(progress, {
        toValue: 1,
        duration: 900,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: false,
      }),
      Animated.delay(400),
    ]);

    animation.start(({ finished }) => {
      if (finished) onCompleteRef.current();
    });

    return () => {
      progress.removeListener(id);
      animation.stop();
    };
  }, [progress]);

  return { progress, percent };
}
