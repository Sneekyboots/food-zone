import { View, Text, TouchableWithoutFeedback ,Image} from 'react-native'
import React from 'react'

export default function RestaurantCard({item}) {
  return (
    <TouchableWithoutFeedback>
        <View className="mr-6 bg-white rounded-3xl shadow-lg">
        <Image className="h-36 w-64 rounded-t-3xl"
         source={item.image}/>
         <View className="p-3 pb-4 space-y-2">
            <Text className="text-lg font-bold pt-2">{item.name}</Text>
            <View className="flex-row items-center space-x-1">
                <Image source={require("../assets/images/fullStar.png")} className="h-4 w-4"/>
                <Text className="text-xs">
                  <Text className="text-green-700">{item.stars}</Text>
                  <Text className="text-gray-700"> ({item.reviews} review)</Text> · <Text className="font-semibold text-gray-700">{item.category}</Text>
              </Text>
            </View>
         </View>
        </View>
    </TouchableWithoutFeedback>
  )
}