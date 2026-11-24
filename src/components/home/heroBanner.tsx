
import { View, Text, StyleSheet } from 'react-native';

import VerifiedIcon from '../icons/verified.svg';
import LightingIcon from '../icons/lighting.svg';

export default function HeroBanner() {
  return (
    <View style={styles.container}>
      {/* TOP SECTION */}
      <View style={styles.header}>
        <View style={styles.accuracyBadge}>
          <VerifiedIcon width={12} height={12} />
          <Text style={styles.accuracyText}>
            98.4% Akurat
          </Text>
        </View>
      </View>

      {/* MAIN CONTENT */}
      <View style={styles.content}>
        <Text style={styles.eyebrow}>
          ANALISIS CEPAT & PRESISI
        </Text>

        <Text style={styles.title}>
          Kenali Jenis Jerawatmu dalam Hitungan Detik
        </Text>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <View style={styles.footerInfo}>
          <LightingIcon width={12} height={12} />

          <Text style={styles.footerText}>
            Pemindaian AI Real-Time
          </Text>
        </View>

        <Text style={styles.instantResult}>
          Hasil Instan
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 168,
    backgroundColor: '#005344',
    borderRadius: 15,
    padding: 14,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  accuracyBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#E5F8EF',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 20,
  },

  accuracyText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#075344',
  },

  content: {
    gap: 6,
    position: 'relative',
  },

  eyebrow: {
    fontSize: 8,
    fontWeight: '700',
    color: '#A6E6D0',
    letterSpacing: 0.5,
  },

  title: {
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 23,
    color: '#FFFFFF',
    maxWidth: '95%',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#39796B',
    paddingTop: 9,
  },

  footerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  footerText: {
    fontSize: 8,
    color: '#D4F1E7',
  },

  instantResult: {
    fontSize: 8,
    color: '#D4F1E7',
    borderWidth: 1,
    borderColor: '#8BD6BB',
    borderRadius: 20,
    paddingHorizontal: 9,
    paddingVertical: 5,
  },
});
