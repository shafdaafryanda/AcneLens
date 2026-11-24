
import { View, Text, StyleSheet } from 'react-native';
import QualityTip from './qualityTip';

import ChecklistIcon from '../icons/checklist.svg';

export default function PhotoQualityCard() {
  return (
    <View style={styles.container}>
      {/* CARD HEADER */}
      <View style={styles.header}>
        <ChecklistIcon width={17} height={17} />

        <Text style={styles.title}>
          Standar Kualitas Foto AI
        </Text>
      </View>

      {/* QUALITY TIPS */}
      <View style={styles.tipList}>
        <QualityTip
          title="Pencahayaan terang & merata"
          description="Hindari bayangan pekat atau ruangan yang terlalu remang."
        />

        <QualityTip
          title="Fokus tajam pada area jerawat"
          description="Pastikan tekstur pori & kemerahan terlihat jelas, bukan blur."
        />

        <QualityTip
          title="Tanpa filter kecantikan atau makeup tebal"
          description="Ini membantu model mengenali kulit untuk klasifikasi akurat."
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    padding: 11,
    borderWidth: 1,
    borderColor: '#E5F0EA',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },

  title: {
    fontSize: 11,
    fontWeight: '800',
    color: '#174D40',
  },

  tipList: {
    gap: 7,
  },
});
