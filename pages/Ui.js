import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { Card, TransCard } from "../component/components";
const UI = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.view1}>
        <View style={styles.view1first}>
          <Ionicons name="chevron-back-outline" size={30} color="#fff" />
          <Ionicons name="notifications-outline" size={30} color="#898bef" />
        </View>
        <View>
          <Text style={styles.balance}>Your Balance</Text>
          <Text style={styles.num}>$547,000.00</Text>
        </View>
        <View style={styles.headCard}>
          <Card
            color="#c4f2ff"
            name="gripfire"
            colr={"#3072f7"}
            title="$5000"
            subtitle="Expense"
          />
          <Card
            color="#ffe6d7"
            name="piggy-bank"
            colr={"#f2a813"}
            title="$15,000"
            subtitle="Spends to Goal"
          />
        </View>
      </View>
      <View style={styles.view2}>
        <View style={styles.view2first}>
          <Text style={styles.trans}>Transactions</Text>
          <Text style={styles.btn}>See All </Text>
        </View>
        <View style={styles.view2second}>
          <TransCard
            color="#04cb88"
            name="car"
            til="Car Purchase"
            subtil="Auto loan"
            txt="-$250"
          />
          <TransCard
            color="#3643b3"
            name="house-user"
            til="House Purchase"
            subtil="Sweet Home"
            txt="$2250"
          />
          <TransCard
            color="#f85d46"
            name="gift"
            til="Transport"
            subtil="Pathao"
            txt="$250"
          />
          <TransCard
            color="#18bbbc"
            name="shopping-bag"
            til="Shopping"
            subtil="Wish, Apple"
            txt="$350"
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2f26d9",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginTop: 0,
  },
  view1: {
    flex: 1,
    marginTop: 0,
    backgroundColor: "#2f26d9",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    padding: 20,
  },
  view1first: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  balance: {
    color: "#898bef",
    fontSize: 20,
    padding: "auto",
    marginTop: 16,
    marginBottom: 8,
  },
  num: {
    fontSize: 20,
    color: "#fff",
  },
  headCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  view2: {
    flex: 1,
    backgroundColor: "#fff",

    top: 0,
    padding: 20,
    borderTopLeftRadius: 30,

    borderTopRightRadius: 30,
  },
  view2first: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  trans: {
    fontSize: 20,
    textShadowColor: "#2e4464",
    color: "#2e4464",
  },
  btn: {
    width: 80,
    height: 30,
    backgroundColor: "#eeeff7",
    padding: 5,
    textAlignVertical: "center",
    textAlign: "center",
    borderRadius: 6,
    color: "#2d4a9f",
    fontSize: 13,
  },
  view2second: {
    marginTop: 6,
  },
});
export default UI;
