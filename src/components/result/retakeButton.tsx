import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';
import RefreshIcon from '../icons/refresh.svg';

type RetakeButtonProps = {
  onPress?: () => void;
};

export default function RetakeButton({ onPress }: RetakeButtonProps) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <RefreshIcon width={15} height={15} />

        <Text style={styles.buttonText}>Tes Foto Baru (Kembali ke Awal)</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 9,
    paddingBottom: 8,
    backgroundColor: Colors.screen,
    borderTopWidth: 1,
    borderTopColor: '#E0EEE7',
  },

  button: {
    height: 52,
    backgroundColor: Colors.primary,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },

  buttonText: {
    color: Colors.textLight,
    fontSize: 12,
    fontWeight: '800',
  },

  pressed: {
    opacity: 0.85,
  },
});
