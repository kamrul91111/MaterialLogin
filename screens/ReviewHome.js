import { style } from "@material-ui/system";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  Headline,
  Subheading,
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
} from "react-native-paper";

const ReviewHome = ({ navigation }) => {
  const [reviews, setReviews] = useState([
    { key: '1', 
      title: "Breaking Bad", 
      rating: 5, 
      image: {uri: 'https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR5,0,182,268_AL_.jpg'},
      body: "amazing moview" },
    { key: '3', 
      title: "The Serpant", 
      rating: 4, 
      image: {uri: 'https://m.media-amazon.com/images/M/MV5BY2U4ZTE1YTgtNmEzZi00N2E4LTk0MWItOTY3Y2RlNzliZTZjXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg'},
      body: "amazing moview" },
    { key: '4', 
      title: "Inception", 
      rating: 2, 
      image: {uri: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg'},
      body: "amazing moview" },
    {
      key: '5',
      title: "Madmen",
      rating: 5,
      image: {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTghMJjYrcGxVC95jQiTwJeTKt7zUT33Ke1isjwnOUEFP7ZjW1u'},
      body: "amazing moview",
    },
  ]);

  return (
    <ScrollView style={styles.container}>
      <Headline style={styles.headline}> Popular Movie Ratings </Headline>
      <FlatList
        horizontal
        //grabbing the initial states as data
        data={reviews}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        //how to render the data
        //item refers to entire json object
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={{margin: 2}}
            onPress={()=> navigation.navigate('ReviewDetails', item)}
          >
            <Card>
              {/* <Card.Cover source={{ uri: "https://picsum.photos/700" }} /> */}
              <Card.Cover source={item.image} style={{width: 200, height: 280 }} />
              <Card.Content>
                <Title style={{textAlign: 'center'}}> {item.title}  </Title>
                <Paragraph style={{textAlign: 'center'}}> Rating: {item.rating} </Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  headline: {
    textAlign: "center",
    color: "white",
    marginTop: 10,
    padding: 5,
  },
});

export default ReviewHome;
