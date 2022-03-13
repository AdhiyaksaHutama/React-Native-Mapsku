import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity,Image, StatusBar } from 'react-native';
import Carousel, { ParallaxImage,Pagination  } from 'react-native-snap-carousel';
const { width: screenWidth } = Dimensions.get('window')
import Data from '../Data/Data';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class Explore extends Component{
    constructor(props) {
    
        super(props);
        this.state = {
            activeSlide:0
         
           
          };
      }
      get pagination () {
        const {activeSlide } = this.state;
        console.log(activeSlide)
        return (
            <Pagination
              dotsLength={Data.length}
              activeDotIndex={activeSlide}
    
              dotStyle={{
                  width: 15,
                  height: 15,
                  borderRadius: 10,
                  marginHorizontal: 8,
                  backgroundColor: '#ecf0f1'
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        );
    }
    _item = () => {
        this.props.navigation.navigate('Baca',{post:item});
      };
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                   <StatusBar
                       backgroundColor="transparent"
                       translucent={true}
                    />
             <Text style={{marginTop:'10%', marginLeft:'8%', fontSize:12, fontWeight:"bold",color:'#777EB8'}}>CHAPTER 1</Text>   
             <Text style={{marginTop:'2%', marginLeft:'8%', fontSize:30, fontWeight:"bold",color:'#FCFDFF'}}>My books collection</Text>   

             <Carousel
       
       onSnapToItem={(index) => this.setState({ activeSlide: index }) }
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          numColumns={4}
          removeClippedSubviews={false}
          itemWidth={screenWidth - 70}
          keyExtractor={(item, index) => index.toString()}
          data={Data}
          
          renderItem={(post,parallaxProps) => {
            const item = post.item;
            return (
              <View style={styles.item}>
                  <View style={{width: wp('80%'), height:hp('60%'), backgroundColor:'#fff', alignSelf:'center', marginTop:'30%', borderRadius:30,}}>
                    <Image source={item.src} style={{resizeMode:'cover', width:wp('80%'), height:hp('28%'), alignSelf:'center', borderRadius:20}}/>
                    <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center', marginTop:'6%', color:'#2E3030'}}>{item.judul}</Text>
                    <Text style={{fontSize:12, textAlign:'justify', marginTop:'5%', justifyContent:'flex-start', color:'#858A98',marginHorizontal:'5%' }}>{item.deskripsi}</Text>
                  </View>
                <TouchableOpacity  onPress={() => navigate('Baca',{item})} style={{padding:20, backgroundColor:'#6c5ce7', bottom:'20%', width:wp('50%'), borderRadius:30, alignSelf:'center', marginTop:'20%'}}><Text style={{textAlign:'center', color:'#ecf0f1', fontWeight:'bold', fontSize:17}}>Ayo membaca !</Text></TouchableOpacity>
              </View>
            )
          }
        }
          hasParallaxImages={true}
         
        />
        { this.pagination }
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
    card:{
        height:hp('60%'),
        width:wp('65%'), 
        backgroundColor: 'rgba(52, 52, 52, 0.0)',
        borderRadius:8 , 
        borderColor:'#999',
        borderWidth:0.5,
      
      
        
      
      
       },
       gambar:{
         color:'#fff'  
       },
       imgBackground: {
          width: '100%',
          height: '100%',
          flex: 1 
      },
       subj:{
        fontFamily:'NunitoSans-Bold',
        fontSize:17,
        zIndex:10,
        color:'#FEFEFE',
        marginLeft:'5%'
        
       },
       distance:{
          fontFamily:'NunitoSans-Bold',
          marginTop:'5%',
          top:'5%',
          fontSize:20,
          zIndex:10,
          color:'#FAFCFE',
          marginLeft:'5%',
          left:'15%',
          marginRight:'5%',
      
          
         },
         distance1:{
          fontFamily:'NunitoSans-Bold',
          bottom:'7%',
          fontSize:20,
          marginLeft:'15%',
          color:'#FAFCFE',
         
      
          
         },
         km1:{
          fontFamily:'NunitoSans-Bold',
          bottom:'7%',
          fontSize:15,
          left:'15%',
          color:'#FAFCFE',
         
      
          
         },
         km:{
          fontFamily:'NunitoSans-Bold',
          marginTop:'5%',
          left:'15%',
          fontSize:15,
          zIndex:10,
          top:'10%',
          color:'#FAFCFE',
      
      
      
         },
        item: {
         
    flex:1,
    bottom:'10%'
      
        },
        imageContainer: {
          flex: 1,
      
          width:'100%',
          height:'100%',
          borderRadius: 8,
        },
        containerTitle:{
      
            flex:1,
            backgroundColor:'#70a1ff',
            borderBottomStartRadius:30,
            borderBottomEndRadius:30
      
        },
        title:{
            color:'#f1f2f6',
            fontSize:18,
            marginLeft:'5%',
            marginTop:'8%'
        }
   
  
})