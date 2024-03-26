import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, FlatList } from 'react-native';
import data from './instagram-feed/data';

export default function App() {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={item.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.detailText}>Likes: {item.likes}</Text>
      <Text style={styles.detailText}>Comments: {item.commentCount}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Instagram Feed Application</Text>
      <FlatList
        data={data.articles}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={styles.list}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc0cb',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
  },
  list: {
    width: '100%', // Makes FlatList take the full width
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%', // Adjust as needed
    height: 200, // Adjust as needed
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailText: {
    fontSize: 14,
  },
});

