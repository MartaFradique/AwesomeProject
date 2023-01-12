import { View, Text, Image } from 'react-native'
import React from 'react'
import { SIZES, COLORS, FONTS, SHADOWS, assets } from '../constants'


export const  NFTTitle = () => {
  return (
    <View>
      <Text>NFTTitle</Text>
    </View>
  );
};
export const  EthPrice = () => {
    return (
      <View>
        <Text>EthPrice</Text>
      </View>
    );
};

export const  ImageCMP = ({imgUrl, index}) => {
    return (
      <Image
        source={imgUrl}
        resizeMode="contain" 
        style={{
            width:  48,
            height: 48,
            marginLeft: index === 0 ? 0 : -SIZES.font,
        }}

        
        />
    );
};
export const  EndDate = () => {
    return (
      <View>
        <Text>People</Text>
      </View>
    );
};
export const  People = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        {[assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
            <ImageCMP imgUrl={imgUrl} index={index} key={`people-${index}`} />
        ))}
       
      </View>
    );
};

export const SubInfo = () => {
    return (
      <View
        style={{
          width: "100%",
          paddingHorizontal: SIZES.font,
          marginTop: -SIZES.extraLarge,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <People />
        <EndDate />
      </View>
    );
  };
  