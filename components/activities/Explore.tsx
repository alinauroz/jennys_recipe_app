import React from 'react'
import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native'

export default class Explore extends React.Component {
    
    constructor(props: any) {
        super(props)
    }

    render () {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inp}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        marginTop: 50,
        width: Dimensions.get('window').width - 30,
        padding: 15
    },
    inp: {
        
    }
});