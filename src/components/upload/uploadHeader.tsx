
import { View, Text, Pressable, StyleSheet } from 'react-native';

type UploadHeaderProps = {
  onBack?: () => void;
};

export default function UploadHeader({ onBack }: UploadHeaderProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBack} style={styles.backButton}>
        <Text style={styles.backArrow}>‹</Text>
      </Pressable>

      <Text style={styles.title}>Upload Foto</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
  },

  backButton: {
    width: 26,
    height: 36,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  backArrow: {
    fontSize: 27,
    color: '#174D40',
    lineHeight: 30,
  },

  title: {
    fontSize: 13,
    fontWeight: '700',
    color: '#174D40',
    marginLeft: 5,
  },
});
