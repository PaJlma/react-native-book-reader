import { FC } from "react";
import { AppRouterProps } from "./AppRouter.types";
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationOptions, createNativeStackNavigator } from "@react-navigation/native-stack";
import LibraryScreen from "@/components/screens/LibraryScreen/LibraryScreen";
import { RootStackParamList } from "@/types/navigation.types";
import BookmarksScreen from "@/components/screens/BookmarksScreen/BookmarksScreen";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
