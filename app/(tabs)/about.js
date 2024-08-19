import { Link } from "expo-router";
import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { HomeIcon } from "../../components/Icons";
import { styled } from "nativewind";
import Screen from "../../components/Screen";

const StylePressable = styled(Pressable);

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Text className="text-white font-bold mb-8 text-2xl "> About</Text>
        <Text className="text-white mb-4">
          lorem lorem lorem lorem loemreeeee
        </Text>
        <Text className="text-white mb-4">
          lorem lorem lorem lorem loemreeeee
        </Text>
        <Text className="text-white mb-4">
          lorem lorem lorem lorem loemreeeee
        </Text>
        <Text className="text-white mb-4">
          lorem lorem lorem lorem loemreeeee
        </Text>
        <Text className="text-white mb-4">
          lorem lorem lorem lorem loemreeeee
        </Text>
        <Text className="text-white mb-4">
          lorem lorem lorem lorem loemreeeee
        </Text>
        <Text className="text-white mb-4">
          lorem lorem lorem lorem loemreeeee
        </Text>
        <Text className="text-white mb-4">
          lorem lorem lorem lorem loemreeeee
        </Text>
        <Text className="text-white mb-4">
          lorem lorem lorem lorem loemreeeee
        </Text>
        <Text className="text-white mb-4">
          lorem lorem lorem lorem loemreeeee
        </Text>
        <Text className="text-white mb-4">
          lorem lorem lorem lorem loemreeeee
        </Text>
        <Text className="text-white mb-4">
          lorem lorem lorem lorem loemreeeee
        </Text>
        <Text className="text-white mb-4">
          lorem lorem lorem lorem loemreeeee
        </Text>
        <Text className="text-white mb-4">
          lorem lorem lorem lorem loemreeeee
        </Text>
        <Link asChild href={"/"} className="text-blue-400">
          <StylePressable className="active:opacity-40">
            <HomeIcon />
          </StylePressable>
        </Link>
      </ScrollView>
    </Screen>
  );
}
