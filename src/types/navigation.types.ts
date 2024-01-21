import { BookmarksScreenProps } from "@/components/screens/BookmarksScreen/BookmarksScreen.types";
import { LibraryScreenProps } from "@/components/screens/LibraryScreen/LibraryScreen.types";
import { MyShelfScreenProps } from "@/components/screens/MyShelfScreen/MyShelfScreen.types";
import { TxtListScreenProps } from "@/components/screens/TxtListScreen/TxtListScreen.types";
import { TxtReaderScreenProps } from "@/components/screens/TxtReaderScreen/TxtReaderScreen.types";
import { NavigationProp, RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  Library: LibraryScreenProps;
  Bookmarks: BookmarksScreenProps;
  MyShelf: MyShelfScreenProps;
  TxtList: TxtListScreenProps;
  TxtReader: TxtReaderScreenProps;
};

export type AppNavigationProp = NavigationProp<RootStackParamList>;
export type AppRouteProp = RouteProp<RootStackParamList>;
