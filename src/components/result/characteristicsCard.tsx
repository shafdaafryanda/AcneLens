import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';
import type { AcneClassInfo } from '@/constants/acneClasses';
import MicroscopeIcon from '../icons/microscope.svg';
import TextureIcon from '../icons/texture.svg';
import BacteriaIcon from '../icons/bacteria.svg';
import CharacteristicItem from './characteristicItem';

type CharacteristicsCardProps = {
  info: AcneClassInfo;
};

export default function CharacteristicsCard({
  info,
}: CharacteristicsCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MicroscopeIcon width={13} height={17} />

        <Text style={styles.title}>Karakteristik & Gejala</Text>
      </View>

      <View style={styles.list}>
        <CharacteristicItem
          Icon={TextureIcon}
          title="Tampilan Visual"
          description={info.visual}
        />

        <CharacteristicItem
          Icon={BacteriaIcon}
          title="Faktor Pemicu"
          description={info.trigger}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E5F0EA',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 11,
  },

  title: {
    fontSize: 14,
    fontWeight: '800',
    color: '#104B3F',
  },

  list: {
    gap: 9,
  },
});
