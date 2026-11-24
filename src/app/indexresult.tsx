import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { Colors } from '@/constants/colors';
import { ACNE_CLASSES, isAcneClassId } from '@/constants/acneClasses';
import { formatAnalysisDate } from '@/utils/formatDateTime';
import HomeHeader from '@/components/home/homeHeader';
import AnalysisStatusRow from '@/components/result/analysisStatusRow';
import DetectionCard from '@/components/result/detectionCard';
import CharacteristicsCard from '@/components/result/characteristicsCard';
import AiDisclaimer from '@/components/result/aiDisclaimer';
import RetakeButton from '@/components/result/retakeButton';
import DevClassSwitcher from '@/components/result/devClassSwitcher';

type ResultParams = {
  imageUri?: string | string[];
  classId?: string | string[];
  confidence?: string | string[];
  analyzedAt?: string | string[];
};

const first = (value?: string | string[]) =>
  Array.isArray(value) ? value[0] : value;

export default function ResultScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<ResultParams>();

  const imageUri = first(params.imageUri) || null;
  const paramClassId = first(params.classId);
  const paramConfidence = Number(first(params.confidence));
  const paramAnalyzedAt = Number(first(params.analyzedAt));

  const [classId, setClassId] = useState(
    isAcneClassId(paramClassId) ? paramClassId : 'pustules'
  );
  const [analyzedAt] = useState(() =>
    Number.isFinite(paramAnalyzedAt) && paramAnalyzedAt > 0
      ? paramAnalyzedAt
      : Date.now()
  );

  const confidence =
    Number.isFinite(paramConfidence) && paramConfidence > 0
      ? Math.min(paramConfidence, 1)
      : 0.942;

  const info = ACNE_CLASSES[classId];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <HomeHeader />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <AnalysisStatusRow dateLabel={formatAnalysisDate(analyzedAt)} />

        <DetectionCard
          info={info}
          confidence={confidence}
          imageUri={imageUri}
        />

        <View style={styles.section}>
          <CharacteristicsCard info={info} />
        </View>

        <View style={styles.section}>
          <AiDisclaimer />
        </View>

        <View style={styles.section}>
          <DevClassSwitcher value={classId} onChange={setClassId} />
        </View>
      </ScrollView>

      {/* Kembali ke layar awal (home) */}
      <RetakeButton onPress={() => router.dismissTo('/indexhome')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.screen,
  },

  header: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    paddingHorizontal: 16,
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 24,
  },

  section: {
    marginTop: 14,
  },
});
