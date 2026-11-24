
import { View, Text, StyleSheet } from 'react-native';
import CheckIcon from '../icons/v.svg';

type QualityTipProps = {
  title: string;
  description: string;
};

export default function QualityTip({
  title,
  description,
}: QualityTipProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <CheckIcon width={9} height={9} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#EFF8F3',
    borderRadius: 9,
    padding: 9,
    gap: 8,
  },

    iconContainer: {
    width: 17,
    height: 17,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#004C3F',
    backgroundColor: '#004C3F',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1,
    },

  content: {
    flex: 1,
    gap: 2,
  },

  title: {
    fontSize: 9,
    fontWeight: '800',
    color: '#174D40',
  },

  description: {
    fontSize: 8,
    lineHeight: 12,
    color: '#71887E',
  },
});
