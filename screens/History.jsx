import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function History(props) {
  const history = props.route.params.history || [];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {history.map((item, index) => (
          <View key={index} style={styles.historyItem}>
            <Text style={styles.historyText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    paddingBottom: 5,
  },
  historyItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  historyText: {
    fontSize: 25,
  },
});