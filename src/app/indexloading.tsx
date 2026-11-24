import { useCallback } from 'react';
import { BackHandler, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect, useLocalSearchParams, useRouter } from 'expo-router';

import { Colors } from '@/constants/colors';
import { createMockResult } from '@/constants/acneClasses';
import { useMockAnalysis } from '@/hooks/use-mock-analysis';
import LoadingIndicator from '@/components/loading/loadingIndicator';
import LoadingMessage from '@/components/loading/loadingMessage';

type LoadingParams = {
  imageUri?: string;
  /** Opsional, untuk memaksa kelas tertentu saat demo. */
  classId?: string;
};

export default function LoadingScreen() {
  const router = useRouter();
  const { imageUri, classId } = useLocalSearchParams<LoadingParams>();

  const { progress, percent } = useMockAnalysis({
    onComplete: () => {
      const result = createMockResult(classId);

      router.replace({
        pathname: '/indexresult',
        params: {
          imageUri,
          classId: result.classId,
          confidence: String(result.confidence),
          analyzedAt: String(result.analyzedAt),
        },
      });
    },
  });

  // Tombol back Android diblokir selama analisis berjalan
  useFocusEffect(
    useCallback(() => {
      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        () => true
      );

      return () => subscription.remove();
    }, [])
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <LoadingIndicator progress={progress} percent={percent} />

        <LoadingMessage />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.screen,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 60,
  },
});
