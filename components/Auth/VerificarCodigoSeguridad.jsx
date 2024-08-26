import { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
  Modal,
} from "react-native";
import { Stack } from "expo-router";
import Screen from "../../components/Screen";
import axios from "axios";
import { Loader } from "../../components/Layouts/Loader";
import { useLocalSearchParams } from "expo-router";

export function VerificacionIdPersona({ IDPersona }) {
  //prueba para la funcion del OTP para separar en varios textinputs el codigo de verificacion
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [optString, setOtpString] = useState("");
  const handleChange = (text, index) => {
    const newOtp = [...otp];

    // Si el usuario presiona retroceso y el campo está vacío, borra el anterior
    if (text === "" && otp[index] === "" && index > 0) {
      refs[index - 1].focus();
      newOtp[index - 1] = "";
    } else {
      // De lo contrario, actualiza el valor del campo actual
      newOtp[index] = text;
      if (text && index < otp.length - 1) {
        refs[index + 1].focus();
      }
    }

    setOtp(newOtp);
    setOtpString(newOtp.join(""));
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      refs[index - 1].focus();
    }
  };

  const refs = [];

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#14522d" },
          headerTintColor: "white",
          headerLeft: null,
          headerRight: () => {},
          headerTitle: "Código de seguridad",
          headerTitleAlign: "center",
          headerBackVisible: false,
        }}
      />
      <View className="flex text-center justify-center items-center space-y-4">
        <View className="flex-row ">
          <Text className=" text-2xl  text-green-900  mt-6 text-center">
            Ingresa tu código de verificación
          </Text>
        </View>
      </View>

      <View className="items-center justify-center text-center">
        <View style={styles.container}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (refs[index] = ref)}
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              className="border-2 p-3 rounded-lg border-gray-500/50"
            />
          ))}
        </View>
      </View>

      <View className="w-full mt-6">
        {optString.length === 6 ? (
          <TouchableOpacity
            className="w-full bg-green-900 p-3 rounded-3xl mb-3"
            //onPress={() => EnviarDatosRegistrar()}
          >
            <Text className=" text-xl font-bold text-white text-center">
              Verificar código
            </Text>
          </TouchableOpacity>
        ) : (
          ""
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
  },
  input: {
    fontSize: 24,
    textAlign: "center",
    width: 40,
    marginHorizontal: 5,
  },
});
