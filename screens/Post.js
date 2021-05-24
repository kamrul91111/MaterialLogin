import React, {useEffect} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import {  Headline, Subheader } from 'react-native-paper'

function Post({ navigation, route }) {
    // useEffect(() => {
    //     if (route.params?.post) {
    //       // Post updated, do something with `route.params.post`
    //       // For example, send the post to the server
    //     }
    //   }, [route.params?.post]);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Create Post"
          onPress={() => navigation.navigate('Create Post')}
        />
        <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
      </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Post
