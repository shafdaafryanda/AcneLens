
import { View, Text, Pressable, StyleSheet } from 'react-native';
import StarIcon from '../icons/star.svg';

type ConfirmButtonProps = {
  onPress?: () => void;
};

export default function ConfirmButton({
  onPress,
}: ConfirmButtonProps) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressed,
        ]}
      >
        <StarIcon width={13} height={13} />

        <Text style={styles.buttonText}>
          Konfirmasi & Analisis Sekarang
        </Text>

        <Text style={styles.arrow}>→</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#F0FAF5',
  },

  button: {
    height: 43,
    backgroundColor: '#004C3F',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingHorizontal: 15,
    gap: 7,
  },

  buttonText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  arrow: {
    position: 'absolute',
    right: 14,
    fontSize: 17,
    color: '#FFFFFF',
  },

  pressed: {
    opacity: 0.85,
  },
});
