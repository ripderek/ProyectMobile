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
import Screen from "../../components/Screen";
import {
  UserIcon,
  Phone,
  InfoIcon2,
  AccountICon,
} from "../../components/Icons";
import { Loader } from "../../components/Layouts/Loader";
import axios from "axios";
import { Link } from "expo-router";

const transparent = "rgba(0,0,0,0.5)";
export function Registeraccount() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [OpenModal, setOpenModal] = useState(false);
  const [OpenLoader, setOpenLoader] = useState(false);
  const [ID_Persona, setIDpersona] = useState("1");
  //estado para almacenar toda la informacion
  const [InfoRegistrar, SetInfoRegistrar] = useState({
    cedula: "",
    correo: "",
    nombres: "",
    apellidos: "",
    numero_telefono: "",
    contrasenia: "",
    genero: "1",
    ciudad: "1",
  });
  //constante para guardar los nuevos datos
  const HandleChange = (name, value) => {
    //console.log(name, value);
    SetInfoRegistrar({ ...InfoRegistrar, [name]: value });
    // setUser({ ...user, tipo_identificacion: tipoidentificacion });
  };
  //funcion para enviar los datos a la API
  const EnviarDatosRegistrar = async () => {
    //primero hay que verificar si la informacion esta correcta por ejemplo si no van vacios los inputs y el tamano de la cedula y celular
    if (VerficarInformacion()) {
      setOpenLoader(true);
      try {
        const result = await axios.post(
          "http://aplicaciones.uteq.edu.ec:9009/api/persona/save",
          InfoRegistrar,
          {
            withCredentials: true,
          }
        );
        //Capturar el resultado para obtener el ID que devuelve despues de crearse el usuario
        //console.log(result.data);
        setIDpersona(result.data.id);
        //se abre el modal indicando que se envio el codigo al correo o al celular registrado
        setOpenLoader(false);
        setOpenModal(true);
      } catch (error) {
        alert("Error en la peticion");
        console.log(error);
        setOpenLoader(false);
      }
    }
  };

  //funcion para verificar que no vayan vacias las propiedades del estado que contiene la informacion
  const VerficarInformacion = () => {
    const isEmpty = (str) => !str.trim();
    if (isEmpty(InfoRegistrar.nombres)) {
      alert("El campo nombres no puede estar vacío");
      return false;
    }
    if (isEmpty(InfoRegistrar.apellidos)) {
      alert("El campo apellidos no puede estar vacío");
      return false;
    }
    if (isEmpty(InfoRegistrar.cedula)) {
      alert("El campo cédula no puede estar vacío");
      return false;
    }
    if (InfoRegistrar.cedula.length !== 10) {
      alert("El campo cédula debe tener 10 dígitos");
      return false;
    }

    if (isEmpty(InfoRegistrar.numero_telefono)) {
      alert("El campo número de telefono no puede estar vacío");
      return false;
    }
    if (InfoRegistrar.numero_telefono.length !== 10) {
      alert("El campo número de telefono debe tener 10 dígitos");
      return false;
    }
    if (isEmpty(InfoRegistrar.correo)) {
      alert("El campo correo no puede estar vacío");
      return false;
    }
    if (isEmpty(InfoRegistrar.contrasenia)) {
      alert("El campo contraseña no puede estar vacío");
      return false;
    }
    if (isEmpty(InfoRegistrar.ciudad)) {
      alert("Debe seleccionar una ciudad");
      return false;
    }

    if (isEmpty(InfoRegistrar.genero)) {
      alert("Debe seleccionar un genero");
      return false;
    }

    return true;
  };

  //para retornar el modal indicando que se registro el usuario para enviarlo a verificar el codigo para la cuenta
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
              <Link asChild href={`Auth/VerficarCodigo/${ID_Persona}`}>
                <TouchableOpacity
                  className="w-full bg-green-900 p-3 rounded-3xl mb-3"
                  onPress={() => setOpenModal(false)}
                >
                  <Text className=" text-xl font-bold text-white text-center">
                    Aceptar
                  </Text>
                </TouchableOpacity>
              </Link>
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
      {/* PARA ABRIR EL LOADER*/}
      {OpenLoader ? <Loader /> : ""}

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
              value={InfoRegistrar.nombres}
              onChangeText={(value) => HandleChange("nombres", value)}
            />
          </View>
          <View className="bg-transparent border border-1 border-gray-300 p-5 rounded-3xl w-full">
            <TextInput
              placeholder="APELLIDOS"
              placeholderTextColor={"black"}
              className="uppercase"
              value={InfoRegistrar.apellidos}
              onChangeText={(value) => HandleChange("apellidos", value)}
            />
          </View>
          <View className="bg-transparent border border-1 border-gray-300 p-5 rounded-3xl w-full">
            <TextInput
              placeholder="CÉDULA"
              placeholderTextColor={"black"}
              className="uppercase"
              //keyboardType="numeric"
              inputMode="numeric"
              maxLength={10}
              value={InfoRegistrar.cedula}
              onChangeText={(value) => HandleChange("cedula", value)}
            />
          </View>
          {/*
          <View className="bg-transparent border border-1 border-gray-300 p-5 rounded-3xl w-full">
            <TextInput
              placeholder="FECHA DE NACIMIENTO"
              placeholderTextColor={"black"}
              className="uppercase"
            />
          </View>
           */}
          {/* 
          <View className="bg-transparent border border-1 border-gray-300 p-5 rounded-3xl w-full">
            <TextInput
              placeholder="GÉNERO"
              placeholderTextColor={"black"}
              className="uppercase"
              inputMode="numeric"
              value={InfoRegistrar.genero}
              onChangeText={(value) => HandleChange("genero", value)}
            />
          </View>
*/}
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
              inputMode="numeric"
              maxLength={10}
              value={InfoRegistrar.numero_telefono}
              onChangeText={(value) => HandleChange("numero_telefono", value)}
            />
          </View>
          {/* 
          <View className="bg-transparent border border-1 border-gray-300 p-5 rounded-3xl w-full">
            <TextInput
              placeholder="PROVINCIA"
              placeholderTextColor={"black"}
              className="uppercase"
            />
          </View>
          */}
          {/* 
          <View className="bg-transparent border border-1 border-gray-300 p-5 rounded-3xl w-full">
            <TextInput
              placeholder="CIUDAD"
              placeholderTextColor={"black"}
              className="uppercase"
              inputMode="numeric"
              value={InfoRegistrar.ciudad}
              onChangeText={(value) => HandleChange("ciudad", value)}
            />
          </View>
          */}
          {/* DATOS DE LA CUENTA */}
          <View className="flex-row ">
            <View>
              <UserIcon colorIcon={"gray"} sizeIcon={20} />
            </View>
            <Text className=" text-base  text-gray-500  text-left ml-1">
              Datos de la cuenta
            </Text>
          </View>
          <View className="bg-transparent border border-1 border-gray-300 p-5 rounded-3xl w-full">
            <TextInput
              placeholder="CORREO ELECTRÓNICO"
              placeholderTextColor={"black"}
              //className="uppercase"
              inputMode="email"
              value={InfoRegistrar.correo}
              onChangeText={(value) => HandleChange("correo", value)}
            />
          </View>
          <View className="bg-transparent border border-1 border-gray-300 p-5 rounded-3xl w-full">
            <TextInput
              placeholder="CONTRASEÑA"
              placeholderTextColor={"black"}
              //className="uppercase"
              secureTextEntry={true}
              value={InfoRegistrar.contrasenia}
              onChangeText={(value) => HandleChange("contrasenia", value)}
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
                onPress={() => EnviarDatosRegistrar()}
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

          {/* BOTON SOLO PARA HACER PRUEBA */}
          <View className="w-full">
            <Link
              asChild
              href={`Auth/VerficarCodigo/${ID_Persona}`}
              className="text-blue-400"
            >
              <TouchableOpacity className="w-full bg-transparent p-3 rounded-3xl mb-3 border border-1 border-gray-300">
                <Text className=" text-xl font-bold text-gray-300 text-center">
                  OBTENER CODIGO TEST VIEW
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
