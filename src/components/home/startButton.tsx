
import { View, Text, Pressable, StyleSheet } from 'react-native';
import AddPhotoIcon from '../icons/addPhoto.svg';

type StartButtonProps = {
  onPress?: () => void;
};

export default function StartButton({ onPress }: StartButtonProps) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressed,
        ]}
      >
        <View style={styles.buttonContent}>
          <AddPhotoIcon width={17} height={17} />

          <Text style={styles.buttonText}>
            Mulai Deteksi Jerawat
          </Text>
        </View>

        <View style={styles.arrowCircle}>
          <Text style={styles.arrow}>→</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 9,
    paddingBottom: 8,
    backgroundColor: '#F0FAF5',
    borderTopWidth: 1,
    borderTopColor: '#E0EEE7',
  },

  button: {
    height: 52,
    backgroundColor: '#004C3F',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },

  arrowCircle: {
    position: 'absolute',
    right: 7,
    width: 38,
    height: 38,
    borderRadius: 30,
    backgroundColor: '#286D5D',
    justifyContent: 'center',
    alignItems: 'center',
  },

  arrow: {
    color: '#FFFFFF',
    fontSize: 20,
  },

  pressed: {
    opacity: 0.85,
  },
});
