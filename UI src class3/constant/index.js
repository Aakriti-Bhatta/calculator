import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  TouchableNativeFeedback,
  View,
  Text,
  Image,
} from "react-native";

const CustomBUtton = (props) => {
  return (
    <TouchableNativeFeedback onPress={props.onButtonPlaceCustomEventHandler}>
      <View style={{ ...styles.button, backgroundColor: props.color }}>
        <FontAwesome name={props.name} size={24} color={props.colr} />
      </View>
    </TouchableNativeFeedback>
  );
};

const IconCard = (props) => {
  return (
    <View style={styles.flexCol}>
      <View style={styles.cir}>
        <Ionicons name={props.name} size={44} color="#e30c38" />
      </View>
      <Text style={styles.footertxt}>{props.footertext}</Text>
    </View>
  );
};
const PicCard = (props) => {
  return (
    <View style={{ ...styles.picCard, backgroundColor: props.color }}>
      <View style={styles.picCardHeader}>
        <View>
          <Text style={styles.t1}>{props.t1}</Text>
        </View>
        <View>
          <Text style={styles.t1}>{props.t2}</Text>
        </View>
      </View>
      <Image style={styles.cardImage} source={props.src} />
      <View style={styles.picCardFooter}>
        <FontAwesome name="heart-o" size={20} color="#fff" />
        <Text style={styles.smallfont}>99+</Text>
      </View>
    </View>
  );
};

const BodyCard = (props) => {
  return (
    <View style={styles.bodyCard}>
      <View style={styles.crdHeader}>
        <View style={styles.crdHeader1}>
          <Image style={styles.crdImage} source={props.src} />
        </View>
        <View style={styles.crdHeader2}>
          <Text style={styles.crdt1}>{props.crdT1}</Text>
          <Text style={styles.crdt2}>{props.crdT2}</Text>
          <Text style={styles.crdt3}>{props.crdT3}</Text>
        </View>
      </View>
      <View style={styles.crdFooter}>
        <TouchableNativeFeedback
          onPress={props.onButtonPlaceCustomEventHandler}
        >
          <View style={{ ...styles.button, backgroundColor: props.color }}>
            <FontAwesome name={props.name} size={20} color={props.colr} />
          </View>
        </TouchableNativeFeedback>
        <Text style={styles.crdt1}>{props.crdPrice}</Text>
      </View>
    </View>
  );
};
const FooterIcon = (props) => {
  return (
    <View style={styles.fixedsty}>
      <FontAwesome name={props.name} size={28} color={props.cor} />
      <Text style={{ ...styles.fixedtxt, color: props.co }}>{props.des}</Text>
    </View>
  );
};
const DivBorder = (props) => {
  return <View style={styles.borderStyle}>{props.children}</View>;
};
const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderColor: "#e4e3e3",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  flexCol: {
    justifyContent: "center",
    alignItems: "center",
  },
  cir: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },
  footertxt: {
    fontSize: 15,
    paddingLeft: 6,

    alignItems: "center",
    justifyContent: "center",
  },
  borderStyle: {
    width: 200,
    height: 2,
    color: "#0b090a",
  },
  picCard: {
    height: 200,
    width: 160,
    borderRadius: 20,
    paddingVertical: 8,
    marginRight: 35,
  },
  picCardHeader: {
    flexDirection: "column",
    marginBottom: 10,
  },

  t1: {
    color: "#fff",
    fontSize: 17,
    letterSpacing: 0.1,
    fontWeight: "bold",
    paddingLeft: 8,
  },
  cardImage: {
    width: 120,
    height: 100,
    resizeMode: "cover",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    opacity: 0.8,
  },
  picCardFooter: {
    flexDirection: "row",
    marginTop: 5,
    paddingLeft: 9,
  },
  smallfont: {
    color: "#fff",
    fontSize: 12,
    paddingLeft: 4,
    fontWeight: "bold",
    letterSpacing: 0.1,
  },
  bodyCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  crdHeader: {
    flexDirection: "row",
  },
  crdHeader1: {
    width: 120,
    height: 40,
  },
  crdImage: {
    width: 100,
    height: 80,

    resizeMode: "cover",
    borderRadius: 20,
  },
  crdHeader2: {
    justifyContent: "center",
    width: 140,
    paddingLeft: 5,
  },
  crdt1: {
    fontSize: 15,
    fontWeight: "bold",
  },
  crdt2: {
    fontSize: 13,
    color: "#6c757d",
  },
  crdt3: {
    fontSize: 14,
    color: "#6c757d",
    fontStyle: "italic",
  },
  crdFooter: {
    justifyContent: "space-between",
  },
  fixedsty: {
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
export { CustomBUtton, IconCard, DivBorder, PicCard, BodyCard, FooterIcon };
