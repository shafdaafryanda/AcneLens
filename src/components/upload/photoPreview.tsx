
import { View, Image, StyleSheet } from 'react-native';

type PhotoPreviewProps = {
  imageUri?: string | null;
};

export default function PhotoPreview({ imageUri }: PhotoPreviewProps) {
  return (
    <View style={styles.container}>
      {imageUri ? (
        <Image
          source={{ uri: imageUri }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 280,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#DDEFE6',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  placeholder: {
    flex: 1,
    backgroundColor: '#DDEFE6',
  },
});
