import { StyleSheet, Text, View } from 'react-native';
import type { SvgProps } from 'react-native-svg';

import { Colors } from '@/constants/colors';
import EmphasisText from './emphasisText';

type CharacteristicItemProps = {
  Icon: React.FC<SvgProps>;
  title: string;
  description: string;
};

export default function CharacteristicItem({
  Icon,
  title,
  description,
}: CharacteristicItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon width={16} height={16} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>

        <EmphasisText text={description} style={styles.description} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    backgroundColor: Colors.primarySoft,
    borderRadius: 10,
    padding: 11,
  },

  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.mint,
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    flex: 1,
    gap: 3,
  },

  title: {
    fontSize: 11,
    fontWeight: '700',
    color: '#174D40',
  },

  description: {
    fontSize: 10,
    lineHeight: 16,
    color: '#4F6B62',
  },
});
