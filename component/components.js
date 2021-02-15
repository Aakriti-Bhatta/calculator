import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
export const Card = (props) => {
  return (
    <View style={{ ...styles.card, backgroundColor: props.color }}>
      <FontAwesome5 name={props.name} size={50} color={props.colr} />
      <Text style={styles.cardTitle}>{props.title}</Text>
      <Text style={styles.cardSubtitle}>{props.subtitle}</Text>
    </View>
  );
};
export const TransCard = (props) => {
  return (
    <View style={styles.transCard}>
      <View style={styles.transCard1}>
        <View style={{ ...styles.circle, backgroundColor: props.color }}>
          <FontAwesome5 name={props.name} size={28} color="#fff" />
        </View>
        <View style={styles.transCardBody}>
          <Text style={styles.transCardTitle}>{props.til}</Text>
          <Text style={styles.transCardSubtitle}>{props.subtil}</Text>
        </View>
      </View>
      <View style={styles.transCard2}>
        <Text style={styles.text}>{props.txt}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    marginTop: 12,
    height: 140,
    width: 160,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    letterSpacing: 1,
    marginTop: 5,
  },
  cardSubtitle: {
    color: "#6597a2",
    fontSize: 16,
  },
  transCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  transCard1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    height: 60,
    width: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  transCardBody: {
    marginLeft: 10,
  },
  transCardTitle: {
    fontSize: 14,
  },
  transCardSubtitle: {
    fontSize: 13,
    color: "#a7b2bb",
  },
  text: {
    fontSize: 14,
    fontWeight: "100",
  },
});
