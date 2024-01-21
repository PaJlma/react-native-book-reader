import { AppNavigationProp } from "@/types/navigation.types";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { FC } from "react";
import { TxtNavButtonProps } from "./TxtNavButton.types";
import TextSVG from "@/app-assets/svg/text.svg";
import BookmarkSVG from "@/app-assets/svg/bookmark.svg";
import BookmarkFilledSVG from "@/app-assets/svg/bookmark-filled.svg";
import CancelSVG from "@/app-assets/svg/cancel.svg";
import { useAppDispatch } from "@/hooks/redux";
import { removeTxtFile, toggleTxtMarked } from "@/store/slices/txtFiles.slice";

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "#fff",
  },

  group: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  name: {
    fontSize: 16,
    maxWidth: 90,
    height: 20,
    overflow: "hidden",
  },

  percents: {
    fontSize: 12,
  },

  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 100,
  },
});

const TxtNavButton: FC<TxtNavButtonProps> = ({ file, ...props }) => {
  const { navigate } = useNavigation<AppNavigationProp>();
  const dispatch = useAppDispatch();

  const onBookmarkButtonClick = () => {
    dispatch(toggleTxtMarked(file.uri));
  };

  const onCancelButtonClick = () => {
    dispatch(removeTxtFile(file.uri));
  };

  return (
    <Pressable style={styles.body} onPress={() => navigate("TxtReader", { uri: file.uri, name: file.name })} {...props}>
      <View style={styles.group}>
        <TextSVG width={20} height={20} />
        <Text numberOfLines={1} style={styles.name}>{file.name}</Text>
      </View>

      <View style={styles.group}>
        <Text style={styles.percents}>{`${file.read.percents}%`}</Text>
        <Pressable onPress={onBookmarkButtonClick} style={styles.button}>
          {file.bookmarked ? <BookmarkSVG width={25} height={25} /> : <BookmarkFilledSVG width={25} height={25} />}
        </Pressable>
        <Pressable onPress={onCancelButtonClick} style={styles.button}>
          <CancelSVG width={25} height={25} />
        </Pressable>
      </View>
    </Pressable>
  );
};

export default TxtNavButton;
