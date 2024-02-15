import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather";
import { themecolors } from '../theme';
import Categories from '../components/categories';
import FeaturedRow from '../components/featuredRow';
import { featured } from '../constants/index';


export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content"/>
      {/* search bar  */}
      <View className="flex-row items-center space-x-2 px-4 pb-2 ">
            <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                <Icon.Search height="25" width="25" stroke="gray" />
                <TextInput placeholder='Resturants' className="ml-2 flex-1" keyboardType='default' />
                <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                    <Icon.MapPin height="20" width="20" stroke="gray" />
                    <Text className="text-gray-600">New York, NYC</Text>
                </View>
            </View>
            <View style={{backgroundColor:themecolors.bgColor(1)}} className=" p-3  rounded-full bg-gray-500">
                <Icon.Sliders height="20" width="20"  strokeWidth={2.5} stroke="white"/>
            </View>
            </View>
        {/* main area  we add scoller to it so that the screen can be scrolled*/}
        <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom:30
        }}>
            {/* categories */}
        <Categories/>
        
        {/* features */}
        <View className="mt-5 space-y-4">
        {
            [featured,featured,featured].map((item,index)=>
            {
                return (
                    <FeaturedRow
                    key={index}
                    title={item.title}
                    restaurants={item.restaurants}
                    description={item.description}/>
                )
            })
        }
            
        </View>
        </ScrollView>
    

    </SafeAreaView>
  )
}