import { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FooterProps } from "./Footer.types";
import LibrarySVG from "@/app-assets/svg/library.svg";
import LibraryFilledSVG from "@/app-assets/svg/library-filled.svg";
import BookmarksSVG from "@/app-assets/svg/bookmarks.svg";
import BookmarksFilledSVG from "@/app-assets/svg/bookmarks-filled.svg";
import { colors } from "@/constants/colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppNavigationProp, AppRouteProp } from "@/types/navigation.types";

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

  pressable: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
    padding: 5,
  },

  text: {
    fontSize: 10,
  },
});

const Footer: FC<FooterProps> = (props) => {
  const { navigate } = useNavigation<AppNavigationProp>();
  const { name } = useRoute<AppRouteProp>();

  return (
    <View style={styles.body}>
      <Pressable style={styles.pressable} onPress={() => navigate("Library", {})}>
        {name === "Library" ? <LibraryFilledSVG width={25} height={25} /> : <LibrarySVG width={25} height={25} />}
        <Text style={styles.text}>Библиотека</Text>
      </Pressable>
      <Pressable style={styles.pressable} onPress={() => navigate("Bookmarks", {})}>
        {name === "Bookmarks" ? <BookmarksFilledSVG width={25} height={25} /> : <BookmarksSVG width={25} height={25} />}
        <Text style={styles.text}>Закладки</Text>
      </Pressable>
    </View>
  );
};

export default Footer;
