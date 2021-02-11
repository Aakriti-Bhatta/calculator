import React from "react";
import { StyleSheet, Text, View } from "react-native";
export const Item = (props) => {
  return <Text style={styles.textstyle}>{props.children}</Text>;
};
const styles = StyleSheet.create({
  textstyle: {
    fontSize: 26,
    textAlign: "center",
    // borderBottomWidth: 2,
    // borderBottomColor: "#fff",
    borderRightWidth: 2,
    borderRightColor: "#fff",
    paddingHorizontal: 40,
    paddingVertical: 30,
  },
});
