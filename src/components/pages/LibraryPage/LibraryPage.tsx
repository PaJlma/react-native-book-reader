import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { LibraryPageProps } from "./LibraryPage.types";

const styles = StyleSheet.create({
  body: {
    flex: 1,
  }
})

const LibraryPage: FC<LibraryPageProps> = (props) => {
  return <View style={styles.body}></View>;
};

export default LibraryPage;
