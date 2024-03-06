import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { THEME_COLOR } from "../data/colors";
import { RootStackParamList } from "./root-stack-params";

type splashScreenProp = StackNavigationProp<RootStackParamList, "Splash">;

export default function SplashScreen() {
  const navigation = useNavigation<splashScreenProp>();
  setTimeout(() => {
    navigation.navigate("ListPlace");
    navigation.reset({
      index: 0,
      routes: [{ name: "ListPlace" }],
    });
  }, 2000);
  return (
    <View style={styles.container}>
      <Text style={styles.textSplash}>Basic Networking</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textSplash: {
    fontSize: 24,
    fontWeight: "bold",
    color: THEME_COLOR,
  },
});
