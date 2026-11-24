
import { View, Text, StyleSheet } from 'react-native';
import QuestionIcon from '../icons/question.svg';

export default function ReadyNotice() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <QuestionIcon width={20} height={20} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>
          Siap untuk Diagnosa?
        </Text>

        <Text style={styles.description}>
          Apakah foto sudah jelas dan fokus pada area kulit bermasalah?
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#DCEFE6',
    borderRadius: 11,
    padding: 11,
    gap: 9,
  },

  iconContainer: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    flex: 1,
    gap: 3,
  },

  title: {
    fontSize: 10,
    fontWeight: '800',
    color: '#174D40',
  },

  description: {
    fontSize: 9,
    lineHeight: 13,
    color: '#71887E',
  },
});
