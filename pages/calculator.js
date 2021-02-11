import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Item } from "../component/items";
import { Ionicons } from "@expo/vector-icons";
const Calculator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.v1}></View>
      <View style={styles.v2}>
        <View style={styles.v21}>
          <View style={styles.v21a}>
            <View style={styles.v21a1}>
              <Item>1</Item>
              <Item>2</Item>
              <Item>3</Item>
            </View>
            <View style={styles.v21a2}>
              <Item>4</Item>
              <Item>5</Item>
              <Item>6</Item>
            </View>
          </View>
          <View style={styles.v21b}>
            <Ionicons name="backspace-outline" size={32} />
          </View>
        </View>
        <View style={styles.v22}>
          <View style={styles.v22a}>
            <View style={styles.v22a1}>
              <Item>7</Item>
              <Item>8</Item>
              <Item>9</Item>
            </View>
            <View style={styles.v22a2}>
              <View style={styles.zero}>
                <Item>0</Item>
              </View>

              <Item>.</Item>
            </View>
          </View>
          <View style={styles.v22b}>
            <Text style={styles.ok}>ok</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  v1: {
    flex: 3,
    backgroundColor: "#fff",
  },
  v2: {
    flex: 4,
    backgroundColor: "#adb5bc",
  },
  v21: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
  },
  v21a1: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
  },
  v21a2: {
    flexDirection: "row",
  },
  v21b: {
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  v22: {
    flexDirection: "row",
  },
  v22a1: {
    flexDirection: "row",
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
  },
  v22a2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  v22b: {
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  ok: {
    fontSize: 26,
    textTransform: "uppercase",
    alignItems: "center",
    textAlign: "center",
  },
  zero: {
    width: 197,
  },
});

export default Calculator;
