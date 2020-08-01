import React from 'react'
import {Text, ScrollView, View, Dimensions, StyleSheet, Alert} from 'react-native'

import RecipeCard from '../cards/recipe'
import Viewer from './Viewer'

import data from '../../constants/recipies'

import {connect} from 'react-redux'

import {save} from '../../actions/save_action.js'

class Recipies extends React.Component<any, any> {
    
    constructor(props: any) {
        super(props)
        this.state = {
            view_recipie: false
        }
    }

    showRecipie = async (recipie: any) => {
        this.setState({
            show_name: recipie.name,
            show_cover: recipie.image,
            show_direction: recipie.recipie,
            show_id: recipie.id,
            view_recipie: true
        })
    }

    hideRecipieViewer = async () =>{
        this.setState({view_recipie: false})
    }

    render () {
        return (
            <>
            <ScrollView style={{display: this.state.view_recipie ? "none" : "flex"}}>
            <View style={styles.container}>
                {
                    data.map(recipe => {
                        return (
                            <RecipeCard 
                                cover={recipe.image}
                                name={recipe.name}
                                onpress = {() => this.showRecipie(recipe)}
                            />
                        )
                    })
                }
                {
                    data.map(recipe => {
                        return (
                            <RecipeCard 
                                cover={recipe.image}
                                name={recipe.name}
                            />
                        )
                    })
                }
            </View>
            </ScrollView>
            <ScrollView style={{display: this.state.view_recipie ? "flex" : "none"}}>
                <Viewer 
                    title = {this.state.show_name}
                    cover = {this.state.show_cover}
                    directions = {this.state.show_direction}
                    id = {this.state.show_id}
                    hide = {this.hideRecipieViewer}
                    saved = {this.props.saved}
                />
            </ScrollView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        marginTop: 50,
        width: Dimensions.get('window').width - 30,
        padding: 15,
        flexDirection:'row',
        flexWrap:'wrap',
        textAlign: "center"
    },
    card: {
        margin: 10
    }
})

const mapStateToProps = (state:any) => {
    return {"saved" : state.saved}
};
  
const mapDispatchToProps = (dispatch:any) => {
    return {
        addToSaved : (recipeId:any) => dispatch(save(recipeId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipies)