import { StyleSheet, Text, type StyleProp, type TextStyle } from 'react-native';

type EmphasisTextProps = {
  /** Bagian yang diapit *tanda bintang* dirender miring. */
  text: string;
  style?: StyleProp<TextStyle>;
};

export default function EmphasisText({ text, style }: EmphasisTextProps) {
  const parts = text.split(/(\*[^*]+\*)/g);

  return (
    <Text style={style}>
      {parts.map((part, index) =>
        part.length > 2 && part.startsWith('*') && part.endsWith('*') ? (
          <Text key={index} style={styles.italic}>
            {part.slice(1, -1)}
          </Text>
        ) : (
          part
        )
      )}
    </Text>
  );
}

const styles = StyleSheet.create({
  italic: {
    fontStyle: 'italic',
  },
});
