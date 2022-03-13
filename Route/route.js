import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home/Home'
import Explore from '../Home/Details/Explore';
import Baca from '../Home/Details/Baca';
const HomeStack = createStackNavigator();

export default function Route() {
  /*function HomeTabs() {
    return (
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Beranda') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Akun') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={'#709FB0'} />;
        },
      })}
 
      tabBarOptions={{
       activeTintColor: '#709FB0',
       inactiveTintColor: '#2c3e50',
       showIcon:true,
       
           style: {
                 backgroundColor: '#f5f6fa',
                 paddingBottom: 3,
           }
    }}>
       <Tab.Screen name="Beranda"  >
          
          {() => (
              <HomeStack.Navigator screenOptions={{
                headerShown: false
              }}>
              <HomeStack.Screen name="Home" component={Home} />
              
            </HomeStack.Navigator>
            
          )}  
        </Tab.Screen>
        <Tab.Screen name="Akun">
          {() => (
            <AkunStack.Navigator>
            <AkunStack.Screen
              name="Settings"
              component={Akun}
            />
         
          </AkunStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    );
  }
  */
  return (
    
    <NavigationContainer>
      
              <HomeStack.Navigator screenOptions={{
                headerShown: false
              }}>
              <HomeStack.Screen name="Home" component={Home} />
              <HomeStack.Screen name="Explore" component={Explore} />
              <HomeStack.Screen name="Baca" component={Baca} />
            
            </HomeStack.Navigator>
     
    
    </NavigationContainer>
  );
}
