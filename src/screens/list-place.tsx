import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ItemPlace from "../components/item-place";
import Divider from "../components/divider";
import { THEME_COLOR } from "../data/colors";
import UseListPlace from "../networks/list-place-service";

export default function ListPlaceScreen() {
  const { data, isLoading, isError, isPending } = UseListPlace();

  if (isPending || isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color={THEME_COLOR} />
      </SafeAreaView>
    );
  }

  if (isError) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Error Load...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ItemPlace place={item} />}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={() => <Divider />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "stretch",
    width: "100%",
  },
});
