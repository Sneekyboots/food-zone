import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { themecolors } from '../theme'
import { ScrollView } from 'react-native';
import RestaurantCard from './RestaurantCard';


export default function FeaturedRow({title,description,restaurants}) {
  return (
    <View>
      <View className="flex-row items-center justify-between px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text> 
          <Text className="text-xs text-gray-500">{description}</Text>

        </View>
        <TouchableOpacity>
          <Text style={{color:themecolors.text}}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="py-5 overflow-visible"
      >
        {
        restaurants.map((restaurant,index)=>{
          return(
            <RestaurantCard
            item={restaurant}
            key={index}/>
          )
        })
      }
      </ScrollView>
    </View>
  )
}