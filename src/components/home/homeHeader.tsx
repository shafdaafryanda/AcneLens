
import { View, Text, StyleSheet } from 'react-native';

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AcneLens</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#064B3F',
  },
});
