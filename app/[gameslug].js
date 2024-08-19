import { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  ActivityIndicator,
  Image,
} from "react-native";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { BackIcon } from "../components/Icons";
import { useLocalSearchParams } from "expo-router";
import Screen from "../components/Screen";
import { Stack } from "expo-router";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "../components/Score";

const StylePressable = styled(Pressable);
export default function Detail() {
  const { gameslug } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    getGameDetails(gameslug).then(setGameInfo);
  }, [gameslug]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "yellow" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerRight: () => {},
          headerTitle: "Nombre del juego",
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator size={"large"} />
        ) : (
          <ScrollView>
            <View className="justify-center items-center text-center">
              <Image
                className="mb-4 rounded"
                source={{ uri: gameInfo.img }}
                style={{ width: 214, height: 294 }}
              />
              <Score score={gameInfo.score} maxScore={100} />
              <Text className="text-white font-bold text-2xl text-center">
                {gameInfo.title}
              </Text>
              <Text className="text-white/70 mt-4 text-left mb-8 text-base">
                {gameInfo.description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
