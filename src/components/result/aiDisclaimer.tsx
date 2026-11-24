import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';
import InfoIcon from '../icons/info.svg';

export default function AiDisclaimer() {
  return (
    <View style={styles.container}>
      <InfoIcon width={18} height={18} />

      <Text style={styles.text}>
        Hasil ini merupakan{' '}
        <Text style={styles.bold}>deteksi awal berbasis AI</Text>. Konsultasikan
        dengan dokter spesialis kulit (Sp.KK/Sp.D.V.E) jika jerawat bertambah
        parah, nyeri hebat, atau menyebar cepat.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 9,
    backgroundColor: Colors.surfaceSecondary,
    borderRadius: 12,
    padding: 12,
  },

  text: {
    flex: 1,
    fontSize: 10,
    lineHeight: 16,
    color: '#4F6B62',
  },

  bold: {
    fontWeight: '800',
    color: Colors.primary,
  },
});
