
import { View, Text, StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';

type StepCardProps = {
  Icon: React.FC<SvgProps>;
  title: string;
  description: string;
  last?: boolean;
};

export default function StepCard({
  Icon,
  title,
  description,
  last = false,
}: StepCardProps) {
  return (
    <View style={[styles.container, last && styles.lastCard]}>
      {/* STEP ICON */}
      <View style={styles.iconContainer}>
        <Icon width={20} height={20} />
      </View>

      {/* STEP INFORMATION */}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.description}>
          {description}
        </Text>
      </View>

      {/* ARROW */}
      <Text style={styles.arrow}>›</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 65,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#E5F0EA',
    marginBottom: 9,
  },

  lastCard: {
    marginBottom: 0,
  },

  iconContainer: {
    width: 38,
    height: 38,
    backgroundColor: '#DDF3E9',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    flex: 1,
    gap: 4,
  },

  title: {
    fontSize: 11,
    fontWeight: '700',
    color: '#174D40',
  },

  description: {
    fontSize: 9,
    color: '#80948B',
  },

  arrow: {
    fontSize: 22,
    color: '#A1B7AD',
  },
});
