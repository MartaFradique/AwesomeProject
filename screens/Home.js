import { Text, View, SafeArea, FlatList } from 'react-native';
import { useState } from 'react';

import { COLORS, NFTData } from '../constants';
import { HomeHeader, NFTCard, FocusedStatusBar } from '../components';
import { SafeAreaView } from 'react-native-safe-area-context';




const Home = () => {


  return (
    <SafeAreaView style={{flex:1}}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <Text>{item.name}</Text>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            listHeaderComponent={<HomeHeader />}
        
          
          />
        </View>
      </View>


    </SafeAreaView>
  )
}

export default Home
