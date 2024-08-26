import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Link } from "expo-router";
import Screen from "../components/Screen";
import { Stack } from "expo-router";

export default function index() {
  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#14522d" },
          headerTintColor: "white",
          headerLeft: () => {},
          headerRight: () => {},
          headerTitle: "Inicio Sesion",
          headerTitleAlign: "center",
        }}
      />
      {/* Form */}
      <View className="flex items-center mx-4 space-y-4">
        <View className="bg-transparent border border-1 border-gray-300 p-5 rounded-3xl w-full">
          <TextInput
            placeholder="USUARIO"
            placeholderTextColor={"black"}
            className="uppercase"
          />
        </View>
        <View className="bg-transparent border border-1 border-gray-300 p-5 rounded-3xl w-full">
          <TextInput
            placeholder="CONTRASEÑA"
            placeholderTextColor={"black"}
            className="uppercase"
          />
        </View>

        <View className="w-full">
          <TouchableOpacity className="w-full bg-green-900 p-3 rounded-3xl mb-3">
            <Text className=" text-xl font-bold text-white text-center">
              Iniciar
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Text className=" text-base  text-black text-center">
            ¿No tienes una cuenta?
          </Text>
          <Link asChild href={"Auth/register-account"}>
            <TouchableOpacity>
              <Text className=" text-base font-bold text-green-900 text-center ml-1">
                Crear cuenta
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </Screen>
  );
}
