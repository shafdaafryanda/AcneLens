
import { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

import UploadHeader from '@/components/upload/uploadHeader';
import PhotoPreview from '@/components/upload/photoPreview';
import PhotoSourceButtons from '@/components/upload/photoSourceButtons';
import PhotoQualityCard from '@/components/upload/photoQualityCard';
import ReadyNotice from '@/components/upload/readyNotice';
import ConfirmButton from '@/components/upload/confirmButton';

export default function UploadScreen() {
  const router = useRouter();

  const [imageUri, setImageUri] = useState<string | null>(null);

  // PILIH FOTO DARI GALERI
  const handleGallery = async () => {
    try {
      const permission =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permission.granted) {
        Alert.alert(
          'Izin Diperlukan',
          'Izinkan AcneLens mengakses galeri untuk memilih foto.'
        );
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled && result.assets.length > 0) {
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      Alert.alert('Error', 'Gagal membuka galeri.');
    }
  };

  // AMBIL FOTO DARI KAMERA
  const handleCamera = async () => {
    try {
      const permission =
        await ImagePicker.requestCameraPermissionsAsync();

      if (!permission.granted) {
        Alert.alert(
          'Izin Diperlukan',
          'Izinkan AcneLens mengakses kamera untuk mengambil foto.'
        );
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled && result.assets.length > 0) {
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      Alert.alert('Error', 'Gagal membuka kamera.');
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>

      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <UploadHeader onBack={() => router.back()} />

        {/* PHOTO CARD */}
        <View style={styles.photoCard}>
          <PhotoPreview imageUri={imageUri} />

          <PhotoSourceButtons
            onCameraPress={handleCamera}
            onGalleryPress={handleGallery}
          />
        </View>

        <View style={styles.qualitySection}>
          <PhotoQualityCard />
        </View>

        <View style={styles.noticeSection}>
          <ReadyNotice />
        </View>

      </ScrollView>

      {/* FIXED BUTTON */}
      <ConfirmButton
        onPress={() => {
          if (!imageUri) {
            Alert.alert(
              'Foto Belum Dipilih',
              'Silakan ambil foto atau pilih foto dari galeri terlebih dahulu.'
            );
            return;
          }

          router.push({
            pathname: '/indexloading',
            params: { imageUri },
          });
        }}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FAF5',
  },

  scrollArea: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 19,
    paddingBottom: 15,
  },

  photoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    padding: 8,
    borderWidth: 1,
    borderColor: '#E5F0EA',
    marginBottom: 9,
  },

  qualitySection: {
    marginBottom: 9,
  },

  noticeSection: {
    marginBottom: 5,
  },
});
