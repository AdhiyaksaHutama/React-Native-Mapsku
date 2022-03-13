import React, { Component } from 'react';
import { Text, View,StyleSheet, Image, TouchableOpacity } from 'react-native';
import Route from './Route/route';

export default class App extends Component{
    render(){
        return(
            <Route/>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        margin:0,
        padding:0,
        flex:1,
        backgroundColor:'#FFFCFC'
    
    },
   
  
})