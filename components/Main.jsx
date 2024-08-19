import { View, ScrollView, ActivityIndicator, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import Screen from "./Screen";

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();
  //funcion para obtener la lista de juegos de metacritic
  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  //para hacer la funcionalidad pull to refres en el flatlist
  const [refreshing, setRefreshing] = useState(false);
  const HandleRefresh = () => {
    setRefreshing(true);
    getLatestGames().then((games) => {
      setGames(games);
    });
    setRefreshing(false);
  };
  return (
    <Screen>
      {games.length === 0 ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
          refreshing={refreshing}
          onRefresh={HandleRefresh}
        />
      )}
    </Screen>
  );
}
