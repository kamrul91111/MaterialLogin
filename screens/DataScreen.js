import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Headline } from 'react-native-paper';

const DataScreen = (props) => {

    const { itemId, image, title } = props.route.params;

    return (
        <View style={styles.container}>
            <Headline style={{color: 'white'}}> ItemID: {itemId} </Headline>
            <Headline style={{color: 'white'}}> title: {title} </Headline>
            <Image source={image} style={{width: 300, height: 300}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default DataScreen
