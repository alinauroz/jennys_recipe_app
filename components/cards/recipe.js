import React from 'react'
import {View, ImageBackground, Text, StyleSheet, Dimension} from 'react-native'

export default class RecipeCard extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <View style = {Object.assign(styles.container, )}>
                <ImageBackground source = {this.props.cover}>

                </ImageBackground>
            </View>
        )
    }
}

