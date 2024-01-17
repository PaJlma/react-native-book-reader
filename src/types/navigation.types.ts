import { BookmarksScreenProps } from "@/components/screens/BookmarksScreen/BookmarksScreen.types";
import { LibraryScreenProps } from "@/components/screens/LibraryScreen/LibraryScreen.types";
import { MyShelfScreenProps } from "@/components/screens/MyShelfScreen/MyShelfScreen.types";
import { NavigationProp, RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  Library: LibraryScreenProps;
  Bookmarks: BookmarksScreenProps;
  MyShelf: MyShelfScreenProps;
};

export type AppNavigationProp = NavigationProp<RootStackParamList>;
export type AppRouteProp = RouteProp<RootStackParamList>;
