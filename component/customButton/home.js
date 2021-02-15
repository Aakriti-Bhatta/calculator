import React from "react";
import { Button, ScrollView, Text, View, StyleSheet } from "react-native";
import { CustomButton } from "./CustomButton";

export default function Home() {
  const clickHandler = () => {
    console.log("Button was clicked.");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Buttons</Text>
        <View style={{ width: "80%" }}>
          <Button title="click Me" onPress={chickHandler} />
        </View>
        <View style={{ width: "80%" }}>
          <Button title="Click Me" color="red" onPress={clickHandler} />
        </View>
        <View style={{ width: "80%", marginBottom: 40 }}>
          <Button
            title="Click Me"
            color="red"
            disabled
            onPress={clickHandler}
          />
        </View>
        <CustomButton
          color="red"
          textColor="white"
          title="TouchableOpacity"
          onButtonPlaceCustomEventHandler={chickHandler}
        />
        <Text>Custom Buttons</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: "cover",
  },
});
