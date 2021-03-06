import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { THEME_COLOR_TRANSPARENT } from '../data/Colors';
import { RootStackParamList } from '../screens/RootStackParams';

type listScreenProp = StackNavigationProp<RootStackParamList, 'ListPlace'>;

export default function ItemPlace({place}:{place:any}) {
  const navigation = useNavigation<listScreenProp>();
  return (
    <Pressable onPress={() => {
        navigation.navigate('DetailPlace', {
          data: place
        });
      }}
      style={({pressed}) => [{
        backgroundColor: pressed ? THEME_COLOR_TRANSPARENT : 'transparent'
      }]}>
      <View style={styles.container}>
        <Text style={styles.title}>{place.nama}</Text>
        <Text style={styles.subtitle}>{place.lokasi}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 14
  },
})
