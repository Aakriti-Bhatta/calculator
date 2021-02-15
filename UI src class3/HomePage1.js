import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  BodyCard,
  CustomBUtton,
  DivBorder,
  FooterIcon,
  IconCard,
  PicCard,
} from "./constant";

const HomePage1 = () => {
  const clickHAndler = () => {
    alert("Pressed!");
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ScrollView>
        <View style={styles.view1}>
          <View style={styles.view1Header}>
            <FontAwesome name="map-marker" size={30} color="#e30c38" />
            <Text style={styles.veiw1HeaderText}>2142,Doggle NY,USA</Text>
          </View>
          <View style={styles.searchView}>
            <View style={styles.iconSearchfood}>
              <FontAwesome name="search" size={26} color="#6c757d" />
              <Text style={styles.searchFood}> Search Food</Text>
            </View>
            <View style={styles.menuicon}>
              <CustomBUtton
                color="#fff"
                name="bars"
                colr="#e30c38"
                onButtonPlaceCustomEventHandler={clickHAndler}
              />
            </View>
          </View>
          <View style={styles.flx}>
            <IconCard name="fast-food-outline" footertext="FastFood" />
            <IconCard name="pizza-outline" footertext="Pizza" />
            <IconCard name="nutrition-outline" footertext="Apple" />
            <IconCard name="layers-outline" footertext="Sandwich" />
          </View>

          <Text style={styles.h1}>Recommended Deals</Text>
          <View style={styles.Card2}>
            <PicCard
              color="#fcbd46"
              t1="Spicy"
              t2="Chowmin"
              src={{
                uri:
                  "https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              }}
            />
            <PicCard
              color="#34e9ff"
              t1="Honey"
              t2="Mojjan Dish"
              src={{
                uri:
                  "https://images.pexels.com/photos/5594487/pexels-photo-5594487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              }}
            />
          </View>
          <Text style={styles.h1}>Other Foods</Text>
          <View style={styles.lastCard}>
            <BodyCard
              src={{
                uri:
                  "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              }}
              crdT1="Chinese Cousin"
              crdT2="Lorem ipsum dolor sit amet, sed do."
              crdT3="34 Mins"
              onButtonPlaceCustomEventHandler={clickHAndler}
              color="#e30c38"
              name="plus"
              colr="#fff"
              crdPrice="$ 230"
            />
            <BodyCard
              src={{
                uri:
                  "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              }}
              crdT1="Chinese Cousin"
              crdT2="Lorem ipsum dolor sit amet, sed do."
              crdT3="34 Mins"
              onButtonPlaceCustomEventHandler={clickHAndler}
              color="#e30c38"
              name="plus"
              colr="#fff"
              crdPrice="$ 230"
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.view2}>
        <FooterIcon name="home" cor="#e30c38" des="Home" co="#e30c38" />
        <FooterIcon name="search" cor="#6c757d" des="Search" co="#6c757d" />
        <FooterIcon
          name="shopping-cart"
          cor="#6c757d"
          des="Cart"
          co="#6c757d"
        />
        <FooterIcon name="user-o" cor="#6c757d" des="Account" co="#6c757d" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f3f4",
    padding: 20,
  },
  view1: {
    flex: 6,
    backgroundColor: "#f5f3f4",
    paddingBottom: 50,
  },
  view2: {
    backgroundColor: "#fbfeff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderTopColor: "#f0f0f0",
    borderTopWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    // marginTop: 657,
    bottom: 0,
    width: "111%",
    paddingHorizontal: 20,
  },
  view1Header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
  },
  veiw1HeaderText: {
    fontSize: 17,
    paddingLeft: 8,

    fontWeight: "300",
    letterSpacing: 0.2,
  },
  searchView: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#dee2e6",
    borderRadius: 25,
    alignItems: "center",
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginVertical: 18,
  },
  iconSearchfood: {
    flexDirection: "row",
    justifyContent: "center",
  },
  searchFood: {
    paddingLeft: 5,
    color: "#6c757d",
    fontSize: 16,
  },
  flx: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  h1: {
    fontSize: 23,

    fontWeight: "bold",
    color: "#0b090a",
  },
  Card2: {
    flexDirection: "row",

    marginVertical: 12,
  },
  lastCard: {},
});

export default HomePage1;
