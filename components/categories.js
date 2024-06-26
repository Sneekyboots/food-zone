import { View, Text  , ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../constants'

export default function Categories() {
    const [activecategory,setactivecategory]=useState(false);
    
  return (
    <View className="mt-4 ">
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="overflow-visible"
      contentContainerStyle={{
        paddingHorizontal:15
      }}    >
{
    categories.map((category,index)=>{
        let isActive = category.id==activecategory;
              let btnclass = isActive? ' bg-gray-600': ' bg-gray-200';
              let textclass = isActive? ' font-semibold text-gray-800': ' text-gray-500';
        return (
            <View key={index} className="flex justify-center items-center mr-6">
                <TouchableOpacity 
                    className={"p-1 rounded-full shadow bg-gray-200"+ btnclass}
                    onPress={()=>setactivecategory(category.id)}>
                <Image style={{width:45, height:45}} source={category.image}></Image>
                </TouchableOpacity>
                <Text className={"text-sm"+textclass}>{category.name}</Text>
            </View>
        );
    })
}
      </ScrollView>
    </View>
  );
}