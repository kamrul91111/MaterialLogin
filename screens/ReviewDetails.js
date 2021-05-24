import React from 'react'
import { View, Text, image, StyleSheet, ScrollView, Image } from 'react-native'
import { Subheading, Headline } from 'react-native-paper';

const ReviewDetails = (props) => {
    const {title, rating, body, image} = props.route.params;

    return (
        <ScrollView style={styles.container}>
            <Headline style={styles.text}> {title} </Headline>
            <Image source={image} style={{width: 180, height: 250, alignSelf: 'center'}} />
            <Subheading style={styles.text}> {body} </Subheading>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    },
    text: {
        textAlign: 'center',
        color: 'white',
        padding: 5,
    }
})

export default ReviewDetails
