import React from 'react';
import { 
  StyleSheet, 
  View, 
  Image, 
  SafeAreaView, 
  FlatList
} from 'react-native';
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import Post from './Post';

const userData = [
  {
    id: 1,
    name: 'Linh',
    image: require('./assets/img1.jpg'),
    likeCount: 128,
    avatar: require('./assets/ava1.jpg'),
  },
  {
    id: 2,
    name: 'An',
    image: require('./assets/img2.jpg'),
    likeCount: 20,
    avatar: require('./assets/ava2.png'),
  },
  {
    id: 2,
    name: 'Khung long',
    image: require('./assets/img3.jpg'),
    likeCount: 20,
    avatar: require('./assets/ava3.jpg'),
  },
]

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#f3f6fa" />
      <View style={styles.headerContainer}>
        <View style={styles.empty}></View>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
          }}
          style={styles.instagramLogo}
          resizeMode="contain"
        />
        <Feather
          name="inbox"
          size={27}
          color="black"
          style={styles.inbox}
        />
      </View>
      <FlatList 
        data={userData} 
        keyExtractor={(item, index) => item.id + index + "index"}
        renderItem={({ item } ) => <Post item={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    backgroundColor: "#f3f6fa",
    alignItems: "center",
    justifyContent: "space-between",
    height: 85,
  },
  empty: {
    width: 27, 
    marginLeft: 10,
  },
  instagramLogo: {
    flex: 1,
    width: null,
    height: 40,
  },
  inbox: {
    marginRight: 10,
  },
});
