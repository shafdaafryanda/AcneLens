
import { View, Text, StyleSheet } from 'react-native';
import TipCard from './tipCard';
import BrightIcon from '../icons/bright.svg';
import FaceIcon from '../icons/face.svg';

export default function PhotoTips() {
  return (
    <View style={styles.container}>
      {/* SECTION HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Tips Sebelum Foto
        </Text>

        <Text style={styles.label}>
          Hasil Optimal
        </Text>
      </View>

      {/* TIP CARDS */}
      <View style={styles.cardContainer}>
        <TipCard
          Icon={BrightIcon}
          title="Cahaya Natural"
          description="Dekat jendela dengan cahaya yang cukup."
        />

        <TipCard
          Icon={FaceIcon}
          title="Wajah Jelas"
          description="Tanpa foundation atau efek tambahan."
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  title: {
    fontSize: 14,
    fontWeight: '800',
    color: '#104B3F',
  },

  label: {
    fontSize: 8,
    fontWeight: '600',
    color: '#71887E',
  },

  cardContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});
