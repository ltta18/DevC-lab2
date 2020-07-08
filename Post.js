import React from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  Image 
} from "react-native";
import { 
  Feather, 
  AntDesign 
} from "@expo/vector-icons";

export default function Post({ item }) {
  return (
    <View>
      <View style={styles.avatarContainer}>
        <Image
          source={item.avatar}
          style={styles.avatar}
          resizeMode="cover"
        />
        <Text style={styles.username}>{item.name}</Text>
      </View>
      <View style={styles.postContainer}>
        <Image
          source={item.image}
          style={styles.postImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.actionContainer}>
        <Feather 
          name="heart" 
          size={27} 
          color="black" 
          style={styles.actionIcon}
          onPress={() => alert('Liked')}
        />
        <Feather 
          name="message-square" 
          size={27} 
          color="black" 
          style={styles.actionIcon}
          onPress={() => alert('Commented')}
        />
        <Feather 
          name="share" 
          size={27} 
          color="black" 
          style={styles.actionIcon}
          onPress={() => alert('Shared')}
        />
      </View>
      <View style={styles.likeContainer}>
        <AntDesign 
          name="heart" 
          size={27} 
          color="black" 
          style={styles.actionIcon}/>
        <Text style={styles.actionIcon}>{item.likeCount} likes</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
    marginHorizontal: 10,
    marginTop: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  username: {
    marginLeft: 12,
    fontSize: 15,
    fontWeight: '600',
  },
  postContainer: {
    height: 300,
  },
  postImage: {
    flex: 1,
    width: null,
    height: null,
  },
  actionContainer: {
    height: 50,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    
  },
  actionIcon: {
    marginLeft: 10,
  },
  likeContainer: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    alignItems: 'center',
  },
});
