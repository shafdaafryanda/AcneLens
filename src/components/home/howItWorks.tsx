
import { View, Text, StyleSheet } from 'react-native';
import StepCard from './stepCard';
import CameraIcon from '../icons/camera.svg';
import SearchIcon from '../icons/search.svg';
import AidKitIcon from '../icons/aidKit.svg';

export default function HowItWorks() {
  return (
    <View style={styles.container}>
      {/* SECTION HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>3 Langkah Mudah</Text>

        <Text style={styles.label}>TANPA RIBET</Text>
      </View>

      {/* STEP LIST */}
      <View>
        <StepCard
          Icon={CameraIcon}
          title="Ambil Foto Wajah"
          description="Gunakan kamera atau pilih gambar wajahmu."
        />

        <StepCard
          Icon={SearchIcon}
          title="AI Analisis"
          description="Model akan menganalisis kondisi kulit wajahmu."
        />

        <StepCard
          Icon={AidKitIcon}
          title="Lihat Hasil"
          description="Dapatkan hasil klasifikasi dan rekomendasi perawatan."
          last
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    marginBottom: 21,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 11,
  },

  title: {
    fontSize: 14,
    fontWeight: '800',
    color: '#104B3F',
  },

  label: {
    fontSize: 8,
    fontWeight: '700',
    color: '#16866D',
  },
});
