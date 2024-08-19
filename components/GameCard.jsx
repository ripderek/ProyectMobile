import { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Pressable,
} from "react-native";
import { Score } from "./Score";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StylePressable = styled(Pressable);
export function GameCard({ game }) {
  return (
    <Link asChild href={`/${game.slug}`} className="text-blue-400">
      <StylePressable className="active:opacity-40 border border-black active:border-white/50 mb-2 bg-gray-500/10 rounded-xl p-4">
        <View
          key={game.slug}
          className="flex-row bg-slate-500/10 p-4 rounded-xl gap-4 mb-10 m-2"
        >
          <Image source={{ uri: game.image }} style={styles.image} />
          <View className="flex-shrink">
            <Text className="text-white" style={styles.title}>
              {game.title}
            </Text>
            <Score score={game.score} maxScore={100} />

            <Text style={styles.description}>
              {game.description.slice(0, 100)} ...
            </Text>
          </View>
        </View>
      </StylePressable>
    </Link>
  );
}

//Para animar la opacidad a medida que se vean los elementos de la card
export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",

    color: "#fff",
  },
  description: {
    fontSize: 16,
    color: "#fff",
  },
});
