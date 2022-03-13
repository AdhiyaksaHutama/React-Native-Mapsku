import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, ScrollView,Image, StatusBar, ToastAndroid } from 'react-native';
import Carousel, { ParallaxImage,Pagination  } from 'react-native-snap-carousel';
const { width: screenWidth, height:screenHeight } = Dimensions.get('window')
import Data from '../Data/Data';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class Baca extends Component{
    constructor(props) {
    
        super(props);
        this.state = {
            activeSlide:0
         
           
          };
      }
      tekan = () => {
        ToastAndroid.show("Fitur ini belum tersedia, segera dirilis", ToastAndroid.SHORT)
      };
    render(){
        
      const post = this.props.route.params.item
        return(
            <View style={styles.container}>
                   <StatusBar
                       backgroundColor="transparent"
                       translucent={true}
                    />
            
            <Image source={post.src} style={{alignSelf:'center', width:wp('100%'), height:hp('35%')}}/>
            <View style={{padding:20, zIndex:10, backgroundColor:'#1D256E', bottom:'4%', height:hp('10%'), borderTopStartRadius:30, borderTopEndRadius:30, flexDirection:'row'}}>
                <Text style={{fontSize:20, fontWeight:'bold', color:'#fff', }}>{post.judul}</Text>
                <TouchableOpacity onPress={this.tekan}>
                <Image source={require('../../Resources/Images/c1.png')} style={{width:wp('10%'), height:hp('5%'), marginLeft:wp('8%')}}/>
                </TouchableOpacity>
            </View>
             <View style={{ backgroundColor:'#ecf0f1', padding:10, flex:1, bottom:'4%', overflow:'hidden'}}>
                 <ScrollView contentContainerStyle={{flexGrow:1, overflow:'hidden'}}>
                <Text style={{textAlign:'justify', fontSize:15, marginTop:'5%'}}>{post.isi}</Text>
</ScrollView>
            </View>
           
            
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        margin:0,
        padding:0,
        flex:1,
        backgroundColor:'#ecf0f1'
    
    },
   
  
})