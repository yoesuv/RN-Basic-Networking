import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";

import { PlaceModel } from "../models/place-model";
import { RootStackParamList } from "./root-stack-params";

type DetailRouteProp = RouteProp<RootStackParamList, "DetailPlace">;

export default function DetailPlaceScreen() {
  const route = useRoute<DetailRouteProp>();
  const data: PlaceModel = route.params;
  console.log(`DetailPlace # data =====> \n ${JSON.stringify(data, null, 4)}`);
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <View style={styles.placeHolderImage} />
        <Image source={{ uri: data.gambar }} style={styles.containerImage} />
      </View>
      <Text style={styles.title}>{data.nama}</Text>
      <Text style={styles.description}>{data.deskripsi}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerImage: {
    width: "100%",
    height: 250,
  },
  placeHolderImage: {
    backgroundColor: "#EEEEEE",
    width: "100%",
    height: 250,
    position: "absolute",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 8,
    marginHorizontal: 10,
  },
  description: {
    fontSize: 16,
    marginHorizontal: 10,
  },
});
