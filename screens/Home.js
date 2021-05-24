import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Button,
  Headline,
  Subheading,
  Caption,
  Paragraph,
  Card,
  Title,
} from "react-native-paper";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Headline style={styles.title}>Dummy app</Headline>
      <Paragraph style={styles.title}>
        To test concept nav and push notifications
      </Paragraph>
      <Button
        mode="contained"
        color="#74c189"
        style={{ width: "50%", alignSelf: "center", marginTop: 10 }}
        onPress={() =>
          navigation.navigate("Data", {
            itemId: 1,
            image: {
              uri: "https://firebrandbbq.com.au/wp-content/uploads/2015/10/FBC10KG-1-510x510.jpg",
            },
          })
        }
      >
        Item 1
      </Button>
      <Button
        mode="contained"
        color="#74c189"
        style={{ width: "50%", alignSelf: "center", marginTop: 10 }}
        onPress={() =>
          navigation.navigate("Data", {
            itemId: 2,
          })
        }
      >
        Item 2
      </Button>
      <Button
        mode="contained"
        color="#74c189"
        style={{ width: "50%", alignSelf: "center", marginTop: 10 }}
        onPress={() =>
          navigation.navigate("Data", {
            itemId: 3,
          })
        }
      >
        Item 3
      </Button>
      <Button
        mode="contained"
        color="#74c189"
        style={{ width: "50%", alignSelf: "center", marginTop: 10 }}
        onPress={() =>
          navigation.navigate("Data", {
            itemId: 4,
          })
        }
      >
        Item 4
      </Button>
      <Button
        mode="contained"
        color="#74c189"
        style={{ width: "50%", alignSelf: "center", marginTop: 10 }}
        onPress={() =>
          navigation.navigate("Data", {
            itemId: 5,
            image: {
              uri: "https://firebrandbbq.com.au/wp-content/uploads/2015/10/FBC10KG-1-510x510.jpg",
            },
          })
        }
      >
        Item 5
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    marginTop: -50,
  },
  title: {
    color: "white",
    textAlign: "center",
    //marginTop: 20
  },
});

export default Home;
