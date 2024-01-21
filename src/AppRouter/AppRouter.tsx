import { FC } from "react";
import { AppRouterProps } from "./AppRouter.types";
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationOptions, createNativeStackNavigator } from "@react-navigation/native-stack";
import LibraryScreen from "@/components/screens/LibraryScreen/LibraryScreen";
import { RootStackParamList } from "@/types/navigation.types";
import BookmarksScreen from "@/components/screens/BookmarksScreen/BookmarksScreen";
import MyShelfScreen from "@/components/screens/MyShelfScreen/MyShelfScreen";
import TxtListScreen from "@/components/screens/TxtListScreen/TxtListScreen";
import TxtReaderScreen from "@/components/screens/TxtReaderScreen/TxtReaderScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const options: NativeStackNavigationOptions = {
  headerBackVisible: false,
  animation: "fade",
};

const AppRouter: FC<AppRouterProps> = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Library" options={{ ...options, title: "Библиотека" }} component={LibraryScreen} />
        <Stack.Screen name="Bookmarks" options={{ ...options, title: "Закладки" }} component={BookmarksScreen} />
        <Stack.Screen name="MyShelf" options={{ ...options, title: "Моя полка" }} component={MyShelfScreen} />
        <Stack.Screen
          name="TxtList"
          options={{ animation: "slide_from_right", title: "Чтение .txt файлов" }}
          component={TxtListScreen}
        />
        <Stack.Screen
          name="TxtReader"
          options={({ route }) => ({ animation: "slide_from_right", title: route.params.name })}
          component={TxtReaderScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
