import { FC, useState } from "react";
import { Button, Text, View } from "react-native";
import { MyShelfPageProps } from "./MyShelfPage.types";
import DocumentPicker from "react-native-document-picker";

const MyShelfPage: FC<MyShelfPageProps> = (props) => {
  const [text, setText] = useState<string>();

  const onButtonPressHandler = async () => {
    const [response] = await DocumentPicker.pick({
      type: [DocumentPicker.types.plainText],
      allowMultiSelection: false,
    });

    if (response.name) {
      setText(response.name);
    }
  };

  return (
    <View>
      <Button title="Открыть файл" onPress={onButtonPressHandler} />
      <Text>{text}</Text>
    </View>
  );
};

export default MyShelfPage;
