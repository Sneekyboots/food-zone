import { View, Text ,Image} from 'react-native'
import React from 'react'

export default function DishRow({item}) {
  return (
    <>
            <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
                <Image className="rounded-3xl" style={{height: 100, width: 100}} source={item.image}/>
                <View className="flex flex-1 space-y-3">
                    <View className="pl-3">
                        <Text className="text-xl">{item.name}</Text>
                        <Text className="text-gray-700">{item.description}</Text>
                    </View>
                    <View className="flex-row pl-3 justify-between items-center">
                        <Text className="text-gray-700 text-lg font-bold">
                            ${item.price}
                        </Text>
                        <View className="flex-row items-center">
                            
                        </View>
                        
                    </View>
                </View>
            </View>
    </>
  )
}