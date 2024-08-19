import { View, Text } from "react-native";
import { Stack } from "expo-router";
import { Logo } from "../components/Logo";
import { Link } from "expo-router";
import { InfoIcon } from "../components/Icons";

export default function Layout() {
  return (
    <View className="flex-1  ">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link asChild href={"/about"} className="text-white">
              <InfoIcon />
            </Link>
          ),
        }}
      />
    </View>
  );
}
