import React from 'react'
import {Text, View, Dimensions, StyleSheet} from 'react-native'

import RecipeCard from '../cards/Recipe'

let data = [
    {
        name: "Tea",
        image: "https://s23991.pcdn.co/wp-content/uploads/fly-images/102645/spiced-sweet-milk-tea-recipe-fp-400x400-c.jpg",
        recipe: "Step1\nStep2\nStep3"
    }
]

export default class Recipies extends React.Component {
    
    constructor(props: any) {
        super(props)
    }

    render () {
        return (
            <View style={styles.container}>

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
})