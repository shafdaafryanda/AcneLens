
import { View, Text, Pressable, StyleSheet } from 'react-native';

import CameraIcon from '../icons/camera.svg';
import AlbumIcon from '../icons/album.svg';

type PhotoSourceButtonsProps = {
  onCameraPress?: () => void;
  onGalleryPress?: () => void;
};

export default function PhotoSourceButtons({
  onCameraPress,
  onGalleryPress,
}: PhotoSourceButtonsProps) {
  return (
    <View style={styles.container}>
      {/* CAMERA BUTTON */}
      <Pressable
        style={styles.button}
        onPress={onCameraPress}
      >
        <CameraIcon width={18} height={18} />

        <Text style={styles.buttonText}>
          Buka Kamera
        </Text>
      </Pressable>

      {/* GALLERY BUTTON */}
      <Pressable
        style={styles.button}
        onPress={onGalleryPress}
      >
        <AlbumIcon width={17} height={17} />

        <Text style={styles.buttonText}>
          Pilih dari Galeri
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginTop: 9,
  },

  button: {
    flex: 1,
    height: 38,
    backgroundColor: '#E6F5EE',
    borderRadius: 22,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 7,
  },

  buttonText: {
    fontSize: 9,
    fontWeight: '700',
    color: '#075D4C',
  },
});
