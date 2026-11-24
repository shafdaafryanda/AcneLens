import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';
import {
  ACNE_CLASSES,
  ACNE_CLASS_IDS,
  type AcneClassId,
} from '@/constants/acneClasses';

type DevClassSwitcherProps = {
  value: AcneClassId;
  onChange: (id: AcneClassId) => void;
};

/**
 * Alat bantu demo: berpindah antar 5 kelas mock.
 * Hanya tampil saat development (__DEV__); hapus bila sudah tidak perlu.
 */
export default function DevClassSwitcher({
  value,
  onChange,
}: DevClassSwitcherProps) {
  if (!__DEV__) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Mode demo — pilih kelas contoh</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chips}
      >
        {ACNE_CLASS_IDS.map((id) => {
          const active = id === value;

          return (
            <Pressable
              key={id}
              onPress={() => onChange(id)}
              style={[styles.chip, active && styles.chipActive]}
            >
              <Text style={[styles.chipText, active && styles.chipTextActive]}>
                {ACNE_CLASSES[id].englishName}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 7,
  },

  label: {
    fontSize: 9,
    fontWeight: '600',
    color: '#71887E',
  },

  chips: {
    gap: 6,
  },

  chip: {
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.surface,
  },

  chipActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },

  chipText: {
    fontSize: 9,
    fontWeight: '700',
    color: Colors.primary,
  },

  chipTextActive: {
    color: Colors.textLight,
  },
});
