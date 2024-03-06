import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { THEME_COLOR_TRANSPARENT } from "../data/colors";
import { RootStackParamList } from "../screens/root-stack-params";
import { PlaceModel } from "../models/place-model";

type listScreenProp = StackNavigationProp<RootStackParamList, "ListPlace">;

export default function ItemPlace({ place }: { place: PlaceModel }) {
  const navigation = useNavigation<listScreenProp>();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("DetailPlace", place);
      }}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? THEME_COLOR_TRANSPARENT : "transparent",
        },
      ]}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{place.nama}</Text>
        <Text style={styles.subtitle}>{place.lokasi}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
  },
});
