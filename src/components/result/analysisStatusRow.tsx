import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';
import VerifiedIcon from '../icons/verified.svg';
import CalendarIcon from '../icons/calendar.svg';

type AnalysisStatusRowProps = {
  dateLabel: string;
};

export default function AnalysisStatusRow({
  dateLabel,
}: AnalysisStatusRowProps) {
  return (
    <View style={styles.container}>
      <View style={styles.badge}>
        <VerifiedIcon width={13} height={12} />

        <Text style={styles.badgeText}>ANALISIS SELESAI</Text>
      </View>

      <View style={styles.date}>
        <CalendarIcon width={12} height={12} />

        <Text style={styles.dateText}>{dateLabel}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: Colors.mint,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },

  badgeText: {
    fontSize: 9,
    fontWeight: '800',
    color: Colors.primary,
  },

  date: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  dateText: {
    fontSize: 9,
    fontWeight: '600',
    color: Colors.text,
  },
});
