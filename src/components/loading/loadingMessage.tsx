import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';

export default function LoadingMessage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menganalisis Kondisi Kulit...</Text>

      <Text style={styles.description}>
        Mohon tunggu sebentar, sistem AcneLens sedang memproses analisis kulit
        Anda.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 34,
    maxWidth: 290,
  },

  title: {
    fontSize: 24,
    lineHeight: 31,
    fontWeight: '800',
    textAlign: 'center',
    color: Colors.primary,
    marginBottom: 10,
  },

  description: {
    fontSize: 11,
    lineHeight: 18,
    textAlign: 'center',
    color: Colors.textSecondary,
  },
});
