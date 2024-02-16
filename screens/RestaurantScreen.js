import { View, Text, ScrollView,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import * as Icon from "react-native-feather";
import { themecolors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import DishRow from '../components/dishRow';
import CartIcon from '../components/cartIcon';

export default function RestaurantScreen() {
  const {params}=useRoute();
  const navigation=useNavigation();
  let item=params;
  return (
    <View>
      <CartIcon/>
      
      <ScrollView>
        <View className='relative'>
          <Image className='w-full h-72' source={item.image} />
          <TouchableOpacity
          onPress={() => navigation.goBack()}
          className='absolute top-14 left-4 p-2 bg-gray-50 rounded-full shadow'>
            <Icon.ArrowLeft stroke={themecolors.bgColor(1)} strokeWidth={3}/>
          </TouchableOpacity>
        </View>
        <View style={{borderTopLeftRadius:40,borderTopRightRadius:0}} 
        className='bg-white -mt-12 pt-6'>
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row items-center space-x-1">
            <View className="flex-row items-center space-x-1">
                <Image source={require("../assets/images/fullStar.png")} className="h-4 w-4"/>
                <Text className="text-xs">
                  <Text className="text-green-700">{item.stars}</Text>
                  <Text className="text-gray-700"> ({item.reviews} review)</Text> · <Text className="font-semibold text-gray-700">{item.category}
                  </Text>
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
                <Icon.MapPin height="15" width="15" stroke="gray"/>
                <Text className="text-gray-600 text-xs">Nearby · {item.address}</Text>
         </View>
         </View>
         <Text className="mt-2  text-gray-500">{item.description}</Text>
          </View>
          </View>
          <View className="pb-36 bg-white">
            <Text className="px-5 py-4 font-bold text-2xl">Menu</Text>
            {/* {dishes here} */}
            {item.dishes.map((dish,index) =>{ // Replace the opening parenthesis with a curly brace
              return (
                <DishRow key={index} item={{...dish}} />
              )
            })
            }
              
            
        
          </View>
      </ScrollView>
    </View>
  )
}