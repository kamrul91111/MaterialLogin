import React, {useState} from 'react'
import {TextInput, Text, Button} from 'react-native'

function CreatePost({ navigation, route }) {
    const [postText, setPostText] = React.useState('');
  
    return (
      <>
        <TextInput
          multiline
          placeholder="What's on your mind?"
          style={{ height: 200, padding: 10, backgroundColor: 'white' }}
          value={postText}
          onChangeText={setPostText}
        />
        <Button
          title="Done"
          onPress={() => {
            // Pass and merge params back to home screen
            navigation.navigate({
              name: 'Post',
              params: { post: postText },
              merge: true,
            });
          }}
        />
      </>
    );
  }

  export default CreatePost