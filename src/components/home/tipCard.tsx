
import { View, Text, StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';

type TipCardProps = {
  Icon: React.FC<SvgProps>;
  title: string;
  description: string;
};

export default function TipCard({
  Icon,
  title,
  description,
}: TipCardProps) {
  return (
    <View style={styles.container}>
      {/* ICON */}
      <View style={styles.iconContainer}>
        <Icon width={18} height={18} />
      </View>

      {/* TIP INFORMATION */}
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.description}>
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 112,
    backgroundColor: '#FFFFFF',
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#E5F0EA',
    padding: 10,
  },

  iconContainer: {
    width: 27,
    height: 27,
    backgroundColor: '#DDF3E9',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 9,
  },

  title: {
    fontSize: 10,
    fontWeight: '800',
    color: '#174D40',
    marginBottom: 5,
  },

  description: {
    fontSize: 8,
    lineHeight: 13,
    color: '#82968D',
  },
});
