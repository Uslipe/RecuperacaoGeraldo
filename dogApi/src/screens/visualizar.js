import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";

export default function Visualizar({ route }) {
  const [cao, setCao] = useState([]);

  const getCao = async () => {
    try {
      const response = await fetch(
        `https://dog.ceo/api/breed/${route.params.paramKey}/images/random`
      );
      const json = await response.json();
      console.log(json);
      setCao(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCao();
  }, []);

  return (
    //Campo de Input + Botão
    <View style={styles.container}>
      <Text
        style={styles.text}
      >{`Você escolheu: ${route.params.paramKey}`}</Text>
      <Image
        source={{
          uri: cao.message,
        }}
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: "center",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  butao: {},
});
