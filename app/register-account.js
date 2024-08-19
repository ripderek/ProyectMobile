import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
  Modal,
} from "react-native";
import CheckBox from "expo-checkbox";
import { Stack } from "expo-router";
import Screen from "../components/Screen";
import { UserIcon, Phone, InfoIcon2 } from "../components/Icons";

const transparent = "rgba(0,0,0,0.5)";
export default function registeraccount() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [OpenModal, setOpenModal] = useState(false);

  //para retornar el modal skere modo diablo
  function renderModal() {
    return (
      <Modal visible={OpenModal} animationType="fade" transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: transparent,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 15,
              width: "70%",
              borderRadius: 25,
            }}
          >
            <View className="text-center items-center justify-center">
              <InfoIcon2 colorIcon={"gold"} sizeIcon={30} />
            </View>
            <View className="text-center items-center justify-center">
              <Text className=" text-lg font-bold text-green-900  text-center mt-2">
                Usuario registrado exitosamente
              </Text>
            </View>
            <View className="text-center items-center justify-center">
              <Text className=" text-base  text-gray-700  text-center mt-2">
                Se ha enviado un correo de confirmación para activar tu cuenta
              </Text>
            </View>
            <View className="w-full mt-3">
              <TouchableOpacity
                className="w-full bg-green-900 p-3 rounded-3xl mb-3"
                onPress={() => setOpenModal(false)}
              >
                <Text className=" text-xl font-bold text-white text-center">
                  Aceptar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#14522d" },
          headerTintColor: "white",
          headerLeft: () => {},
          headerRight: () => {},
          headerTitle: "Registro",
          headerTitleAlign: "center",
        }}
      />
      {renderModal()}
      <ScrollView>
        {/* Form */}
        <View className="flex mx-4 space-y-4">
          <View className="flex-row ">
            <View>
              <UserIcon colorIcon={"gray"} sizeIcon={20} />
            </View>
            <Text className=" text-base  text-gray-500  text-left ml-1">
              Datos personales
            </Text>
          </View>
          <View className="bg-transparent border border-1 border-gray-300 p-5 rounded-3xl w-full">
            <TextInput
              placeholder="NOMBRES"
              placeholderTextColor={"black"}
              className="uppercase"
            />
          </View>
          <View className="bg-transparent border border-1 border-gray-300 p-5 rounded-3xl w-full">
            <TextInput
              placeholder="APELLIDOS"
              placeholderTextColor={"black"}
              className="uppercase"
            />
          </View>
          <View className="bg-transparent border border-1 border-gray-300 p-5 rounded-3xl w-full">
            <TextInput
              placeholder="CÉDULA"
              placeholderTextColor={"black"}
              className="uppercase"
            />
          </View>
          <View className="bg-transparent border border-1 border-gray-300 p-5 rounded-3xl w-full">
            <TextInput
              placeholder="FECHA DE NACIMIENTO"
              placeholderTextColor={"black"}
              className="uppercase"
            />
          </View>
          <View className="bg-transparent border border-1 border-gray-300 p-5 rounded-3xl w-full">
            <TextInput
              placeholder="GÉNERO"
              placeholderTextColor={"black"}
              className="uppercase"
            />
          </View>
          <View className="flex-row ">
            <View>
              <Phone colorIcon={"gray"} sizeIcon={20} />
            </View>
            <Text className=" text-base  text-gray-500  text-left ml-1">
              Datos de contacto
            </Text>
          </View>
          <View className="bg-transparent border border-1 border-gray-300 p-5 rounded-3xl w-full">
            <TextInput
              placeholder="TELÉFONO MÓVIL"
              placeholderTextColor={"black"}
              className="uppercase"
            />
          </View>
          <View className="bg-transparent border border-1 border-gray-300 p-5 rounded-3xl w-full">
            <TextInput
              placeholder="PROVINCIA"
              placeholderTextColor={"black"}
              className="uppercase"
            />
          </View>
          <View className="bg-transparent border border-1 border-gray-300 p-5 rounded-3xl w-full">
            <TextInput
              placeholder="CIUDAD"
              placeholderTextColor={"black"}
              className="uppercase"
            />
          </View>
          {/* FOOTER DEL FORM  */}
          <View className="flex-row w-full ml-2">
            <View className="mt-3">
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              />
            </View>
            <View className="m-2">
              <Text className=" text-xs    text-left ml-1 text-green-900">
                He leído y acepto la{" "}
                <Text className=" text-xs  underline ml-2 mr-1 text-lime-700">
                  Política de privacidad
                </Text>{" "}
                y los{" "}
                <Text className=" text-xs  underline ml-1 mr-1 text-lime-700">
                  Términos y condiciones
                </Text>{" "}
                del programa
              </Text>
            </View>
          </View>
          {/* SECOND CHECKBOX  */}
          <View className="flex-row w-full ml-2">
            <View className="mt-3">
              <CheckBox
                disabled={false}
                value={toggleCheckBox1}
                onValueChange={(newValue) => setToggleCheckBox1(newValue)}
              />
            </View>
            <View className="m-2">
              <Text className=" text-base  text-green-900  text-left ml-1">
                Acepto ser contactado para recibir promociones y noticias
              </Text>
            </View>
          </View>
          {toggleCheckBox ? (
            <View className="w-full">
              <TouchableOpacity
                className="w-full bg-green-900 p-3 rounded-3xl mb-3"
                onPress={() => setOpenModal(true)}
              >
                <Text className=" text-xl font-bold text-white text-center">
                  Continuar
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View className="w-full">
              <TouchableOpacity
                className="w-full bg-transparent p-3 rounded-3xl mb-3 border border-1 border-gray-300"
                disabled
              >
                <Text className=" text-xl font-bold text-gray-300 text-center">
                  Continuar
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </Screen>
  );
}
