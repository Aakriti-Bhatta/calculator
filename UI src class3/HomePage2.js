import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { CustomBUtton, BodyCard } from "./constant";

const HomePage2 = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.view1}>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          }}
        />
        <View style={styles.v1abs}>
          <AntDesign name="arrowleft" size={32} color="white" />
          <Text style={styles.h1}>American</Text>
          <Text style={styles.h5}>Food</Text>
        </View>
      </View>
      <View style={styles.view2}>
        <View style={{ marginLeft: "auto" }}>
          <CustomBUtton color="#fff" name="bars" colr="#e30c38" />
        </View>
        <View>
          <BodyCard
            src={{
              uri:
                "https://images.pexels.com/photos/1199958/pexels-photo-1199958.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            }}
            crdT1="American Burger"
            crdT2="Lorem ipsum dolor sit amet, consectetur  elit, sed do."
            crdT3="22 Mins"
            color="#e30c38"
            name="plus"
            colr="#fff"
            crdPrice="$ 26"
          />
          <BodyCard
            src={{
              uri:
                "https://images.pexels.com/photos/1988624/pexels-photo-1988624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            }}
            crdT1="Sandwich"
            crdT2="Lorem ipsum   to find examples of lorem ipsum  use  Letraset"
            crdT3="20 Mins"
            color="#e30c38"
            name="plus"
            colr="#fff"
            crdPrice="$ 31"
          />
          <BodyCard
            src={{
              uri:
                "https://images.pexels.com/photos/2119758/pexels-photo-2119758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            }}
            crdT1="Ham Burger"
            crdT2="Lorem ipsum dolor sit amet, consectetur  elit, sed do."
            crdT3="23 Mins"
            color="#e30c38"
            name="plus"
            colr="#fff"
            crdPrice="$ 22"
          />
          <BodyCard
            src={{
              uri:
                "https://images.pexels.com/photos/1563045/pexels-photo-1563045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            }}
            crdT1="Chicken Burger"
            crdT2="Lorem ipsum dolor sit amet, consectetur, sed do."
            crdT3="24 Mins"
            color="#e30c38"
            name="plus"
            colr="#fff"
            crdPrice="$ 23"
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  view1: {
    flex: 3,
    backgroundColor: "#f6ba01",
    position: "relative",
  },
  v1abs: {
    position: "absolute",
    top: "18%",
    left: "4%",
  },
  h1: {
    color: "#f4f1de",
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 0.8,
    marginTop: "25%",
  },
  h5: {
    color: "#f4f1de",
    fontSize: 25,
    fontWeight: "600",
    letterSpacing: 0.3,
    marginTop: 0,
  },
  view2: {
    flex: 6,
    backgroundColor: "#f5f3f4",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 18,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
export default HomePage2;
