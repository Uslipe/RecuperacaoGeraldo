import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Text, Button } from "react-native";

export default function Pesquisar({ navigation }) {
  const [racaCao, setRacaCao] = useState("");

  return (
    //Campo de Input + Botão
    <View style={styles.container}>
      <View style={styles.vw}>
        <Text style={styles.text}>
          Informe a raça em inglês e em letras minusculas.
        </Text>
        <Text style={styles.text}>
          A raça deve conter apenas o nome radical. Ex: retriever. No lugar de
          golden retriever
        </Text>
      </View>

      <TextInput
        style={{
          borderColor: "gray",
          padding: 20,
          borderRadius: 16,
          borderWidth: 1,
          margin: 16,
        }}
        placeholder="Digite aqui - Ex: akita, poodle, retriever"
        onChangeText={(text) => setRacaCao(text)}
      ></TextInput>

      <Button
        title="Escolher raça"
        onPress={() =>
          navigation.navigate("Visualizar", {
            paramKey: racaCao,
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  vw: {
    width: 300,
    height: 200,
  },

  text: {
    fontSize: 20,
    alignSelf: "center",
    marginBottom: 15,
  },
});
