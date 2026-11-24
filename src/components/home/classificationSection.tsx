
import { View, Text, StyleSheet } from 'react-native';

const classifications = [
  'Papula',
  'Pustula',
  'Nodul',
  'Kistik',
  'Komedo Terbuka',
  'Komedo Tertutup',
];

export default function ClassificationSection() {
  return (
    <View style={styles.container}>
      {/* CARD */}
      <View style={styles.card}>
        <Text style={styles.title}>
          Cakupan Klasifikasi Jerawat
        </Text>

        <Text style={styles.subtitle}>
          Model mengenali 6 variasi jerawat utama.
        </Text>

        {/* CLASSIFICATION TAGS */}
        <View style={styles.tagContainer}>
          {classifications.map((item) => (
            <View key={item} style={styles.tag}>
              <View style={styles.dot} />
              <Text style={styles.tagText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E5F0EA',
  },

  title: {
    fontSize: 11,
    fontWeight: '800',
    color: '#174D40',
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 9,
    color: '#80948B',
    marginBottom: 10,
  },

  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },

  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#FCE9E0',
    borderRadius: 20,
    paddingHorizontal: 9,
    paddingVertical: 5,
  },

  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#D9896D',
  },

  tagText: {
    fontSize: 8,
    fontWeight: '700',
    color: '#A75E47',
  },
});
