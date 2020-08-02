import React from 'react'
import {View, ScrollView, Text, TextInput, StyleSheet, Dimensions, Alert} from 'react-native'

import {get} from "../../constants/recipies"
import RecipeCard from '../cards/recipe'
import Viewer from './Viewer'

import {connect} from 'react-redux'

import {save} from '../../actions/save_action.js'

let data:any = [];

interface RecipieInterface {
    name: string,
    image: String,
    recipie: String,
    view_recipie: boolean
}

interface ExploreInterface {
    query: string
    recipies: any[],
    view_recipie: boolean,
    show_name: string,
    show_cover: string,
    show_direction: string
}

class Explore extends React.Component <ExploreInterface, ExploreInterface> {
    
    constructor(props: any) {
        super(props)
        this.state = {
            query: "",
            recipies: [],
            view_recipie: false,
            show_cover: "abc",
            show_direction: "abc",
            show_name: "abc"
        }
    }

    componentDidMount = async () => {
        data = await get();
        console.log("fffffff")
        console.log(data)
    }

    search = async () => {
        let newRecipies: any[] = []
        for (let i=0; i<data.length; i++) {
            if (data[i].name.indexOf(this.state.query) > -1) {
                newRecipies.push(data[i])
            }
        }
        this.setState({recipies: newRecipies})
    }

    onChange_ = (e: string) => {
        this.setState({query: e});
        if (e == "") return this.setState({recipies: []})
        this.search();
    }

    showRecipie = async (recipie: any) => {
        this.setState({
            show_name: recipie.name,
            show_cover: recipie.image,
            show_direction: recipie.recipie,
            view_recipie: true
        })
    }

    hideRecipieViewer = async () =>{
        this.setState({view_recipie: false})
    }

    render () {
        return (
            <>
            <View style={{...styles.container, display: this.state.view_recipie ? "none" : "flex"}}>
                <TextInput
                    style={styles.inp}
                    placeholder="Search"
                    onChangeText = {this.onChange_}
                />
                <ScrollView>
                <View style={styles.container2}>
                    {
                        this.state.recipies.map(recipe => {
                            console.log(recipe)
                            return (
                                <RecipeCard 
                                    cover={recipe.image}
                                    name={recipe.name}
                                    onpress = {() => this.showRecipie(recipe)}
                                />
                            )
                        })
                    }
                </View>
                </ScrollView>
                </View>

                <ScrollView style={{display: this.state.view_recipie ? "flex" : "none"}}>
                    <Viewer 
                        title = {this.state.show_name}
                        cover = {this.state.show_cover}
                        directions = {this.state.show_direction}
                        hide = {this.hideRecipieViewer}
                    />
                </ScrollView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    inp: {
        backgroundColor: "lightgrey",
        padding: 10,
        borderRadius: 5,
        width: Dimensions.get('window').width - 30,
        height: 35,
        fontSize: 16
    },
    container : {
        marginTop: 50,
        width: Dimensions.get('window').width - 30,
        padding: 15,
        flexDirection:'row',
        flexWrap:'wrap',
        textAlign: "center"
    },
    container2 : {
        marginTop: 50,
        width: Dimensions.get('window').width - 30,
        flexDirection:'row',
        flexWrap:'wrap',
        textAlign: "center"
    },
    card: {
        margin: 10
    }
});

const mapStateToProps = (state:any) => {
    return {"saved" : state.saved}
};
  
const mapDispatchToProps = (dispatch:any) => {
    return {
        addToSaved : (recipeId:any) => dispatch(save(recipeId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Explore)