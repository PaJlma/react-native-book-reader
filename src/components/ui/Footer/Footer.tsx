import { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FooterProps } from "./Footer.types";
import LibrarySVG from "@/app-assets/svg/library.svg";
import LibraryFilledSVG from "@/app-assets/svg/library-filled.svg";
import BookmarksSVG from "@/app-assets/svg/bookmarks.svg";
import BookmarksFilledSVG from "@/app-assets/svg/bookmarks-filled.svg";
import BookSVG from "@/app-assets/svg/book.svg";
import BookFilledSVG from "@/app-assets/svg/book-filled.svg";
import { colors } from "@/constants/colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppNavigationProp, AppRouteProp } from "@/types/navigation.types";
import FooterButton from "./FooterButton/FooterButton";

const styles = StyleSheet.create({
  body: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 15,
    paddingBottom: 15,
    borderTopColor: colors.black,
    borderTopWidth: 1,
  },
});

const Footer: FC<FooterProps> = (props) => {
  const { navigate } = useNavigation<AppNavigationProp>();
  const route = useRoute<AppRouteProp>();

  return (
    <View style={styles.body}>
      <FooterButton
        text="Библиотека"
        onPress={() => navigate("Library", {})}
        isActive={route.name === "Library"}
        icon={<LibrarySVG width={25} height={25} />}
        activeIcon={<LibraryFilledSVG width={25} height={25} />}
      />
      <FooterButton
        text="Закладки"
        onPress={() => navigate("Bookmarks", {})}
        isActive={route.name === "Bookmarks"}
        icon={<BookmarksSVG width={25} height={25} />}
        activeIcon={<BookmarksFilledSVG width={25} height={25} />}
      />
      <FooterButton
        text="Моя полка"
        onPress={() => navigate("MyShelf", {})}
        isActive={route.name === "MyShelf"}
        icon={<BookSVG width={25} height={25} />}
        activeIcon={<BookFilledSVG width={25} height={25} />}
      />
    </View>
  );
};

export default Footer;
