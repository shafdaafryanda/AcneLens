
import { StyleSheet, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { Colors } from '@/constants/colors';
import Greeting from '@/components/home/greeting';
import HomeHeader from '@/components/home/homeHeader';
import HeroBanner from '@/components/home/heroBanner';
import HowItWorks from '@/components/home/howItWorks';
import ClassificationSection from '@/components/home/classificationSection';
import PhotoTips from '@/components/home/photoTips';
import StartButton from '@/components/home/startButton';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader />

        <Greeting />

        <HeroBanner />

        <HowItWorks />

        <ClassificationSection />

        <PhotoTips />
      </ScrollView>

      <StartButton onPress={() => router.push('/indexupload')}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 30,
  },
});
