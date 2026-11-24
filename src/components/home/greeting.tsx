
import { View, Text, StyleSheet } from 'react-native';
import LotusIcon from '../icons/lotus.svg';

export default function Greeting() {
  return (
    <View style={styles.container}>
      {/* BADGES */}
      <View style={styles.badges}>
        <View style={styles.primaryBadge}>
          <LotusIcon width={11} height={11} />

          <Text style={styles.primaryBadgeText}>
            AI DERMATOLOGY ASSISTANT
          </Text>
        </View>

        <Text style={styles.secondaryBadge}>
          Siap Deteksi
        </Text>
      </View>

      {/* GREETING */}
      <Text style={styles.title}>
        Halo, Sahabat Kulit Sehat!
      </Text>

      <Text style={styles.description}>
        Ketahui kondisi terkini kulitmu dengan pemindaian
        cerdas bersertifikasi dermatologi modern.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginBottom: 16,
  },

  badges: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    marginBottom: 10,
  },

  primaryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#D6F2E6',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 20,
  },

  primaryBadgeText: {
    fontSize: 8,
    fontWeight: '700',
    color: '#087D68',
  },

  secondaryBadge: {
    fontSize: 8,
    fontWeight: '600',
    color: '#52766A',
    backgroundColor: '#E3F1EA',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 20,
    overflow: 'hidden',
  },

  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#064B3F',
    marginBottom: 7,
  },

  description: {
    fontSize: 11,
    lineHeight: 17,
    color: '#607C72',
  },
});
