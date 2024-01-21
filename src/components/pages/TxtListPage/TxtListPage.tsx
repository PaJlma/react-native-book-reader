import { FC } from "react";
import { View, Button, Alert, StyleSheet, ScrollView } from "react-native";
import { TxtListPageProps } from "./TxtListPage.types";
import * as DocumentPicker from "expo-document-picker";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { addTxtFile } from "@/store/slices/txtFiles.slice";
import TxtNavButton from "./TxtNavButton/TxtNavButton";

const styles = StyleSheet.create({
  scroll: {
    height: "96%",
  },
});

const TxtListPage: FC<TxtListPageProps> = (props) => {
  const files = useAppSelector((state) => state.txtFiles);
  const dispatch = useAppDispatch();

  const onButtonClickHandler = async () => {
    const response = await DocumentPicker.getDocumentAsync({
      type: "text/plain",
      multiple: false,
      copyToCacheDirectory: true,
    });

    if (response.canceled) {
      return;
    }

    if (!response.assets) {
      Alert.alert("Ошибка", "Произошла ошибка при загрузке файла");
      return;
    }

    dispatch(addTxtFile({ ...response.assets[0], bookmarked: false, read: { scrolled: 0, percents: 0 } }));
  };

  return (
    <View>
      <Button title="Добавить файл" onPress={onButtonClickHandler} />
      <ScrollView style={styles.scroll}>
        {files.map((file) => (
          <TxtNavButton key={file.uri} file={file} />
        ))}
      </ScrollView>
    </View>
  );
};

export default TxtListPage;
