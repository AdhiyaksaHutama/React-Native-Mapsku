import React, { Component } from 'react';
import { Text, View,StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Home extends Component{
    _item = () => {
        this.props.navigation.navigate('Explore');
      };
    render(){
        return(
            <View style={styles.container}>
                   <StatusBar
                       backgroundColor="transparent"
                       translucent={true}
                    />
                    
                <View style={{marginTop:'20%'}}>
                <View style={{flexDirection:'row', alignSelf:'center'}}>
                <Image source={require('../Resources/Images/Daffa.jpg')} style={{width:wp('20%'), height:hp('15%'), borderRadius:50, top:'10%', zIndex:10, alignSelf:'center', marginHorizontal:'5%'}}/>
             
                </View>
             
                <View style={{width:wp('80%'), height:hp('50%'), backgroundColor:'#ecf0f1', alignSelf:'center',borderRadius:20, }}>
                    <Text style={{fontSize:17, textAlign:'center', marginTop:'15%'}}>My name is</Text>
                    <Text style={{fontSize:18, textAlign:'center', marginTop:'7%'}}>Mohammad Daffa Arkan P</Text>
                    <Text style={{fontSize:17, textAlign:'center', marginTop:'2%'}}>Jl. Merpati No.171</Text>
                    <Text style={{fontSize:17, textAlign:'center', marginTop:'2%'}}>A11.2020.12738</Text>
                    <Text style={{fontSize:17, textAlign:'center', marginTop:'2%'}}>085159440715</Text>
                    <Text style={{fontSize:13, textAlign:'center', marginTop:'8%', }}>daffa_arkanmohammad@yahoo.com</Text>
                    
                </View>
                </View>
                <TouchableOpacity onPress={this._item} style={{padding:20, backgroundColor:'#6c5ce7', width:'50%', alignSelf:'center', borderRadius:20, bottom:'5%'}}><Text style={{textAlign:'center', color:'#fff'}}>My Books</Text></TouchableOpacity>
                   
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        margin:0,
        padding:0,
        flex:1,
        backgroundColor:'#1D256E'
    
    },
   
  
})