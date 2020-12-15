import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Header, TextInput} from 'react-native';

export default class HomeScreen extends React.Component{
    constructor(){
        super();
        this.state = {
          text: '',
          isSearchPressed: false
        }
    }
    getWord = async (word) => {
        var searchKeyword = word.toLowercase();
        var url = "https://rupinwhitehatjr.github.io/dictionary/%22+searchKeyword+%22.json" + searchKeyword + ".json"

        return fetch(url)
        .then((data) => {
          if(data.status == 200){
              return data.json()
          }
          else {
              return null
          }
        })

        .then((response) => {
            var responseObject = response

            if(responseObject){
                var wordData = responseObject.definitions[0]
                var definition = wordData.description
                var lexicalCategory = wordData.wordtype

                this.setState({
                    "word": this.state.text,
                    "definition": definition,
                    "lexicalCategory": lexicalCategory
                })
            }
            else{
                this.setState({
                    "word": this.state.text,
                    "definition": "Not Found"
                })
            }

        })
    }
    render (){
        return (
            <View style = {styles.container}>
            <Header backgroundColor = {'#9c8210'} centerComponent = {{text: 'Dictionary App', style: {color: '#FFF000', fontSize: 20}, }}/>

            <TextInput style = {styles.inputBox} onChangeText = {text =>{
                this.setState({ 
                  text: text,
                  isSearchPressed: false,
                  word: 'Loading...',
                  lexicalCategory: '',
                  examples: [],
                  definition: ''
                })
              }} value = {this.state.text}/>

            <TouchableOpacity style = {styles.goButton} onPress = {() =>{
                this.setState({
                  isSearchPressed: true,
                })
                this.getWord(this.state.text);
            }}>
               <Text style = {styles.buttonText}>Search</Text>
            </TouchableOpacity>

            </View>
        )
    }
}