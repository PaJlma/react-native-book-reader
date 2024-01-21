import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { MyShelfPageProps } from "./MyShelfPage.types";
import NavButton from "@/components/ui/NavButton/NavButton";
import TextSVG from "@/app-assets/svg/text-filled.svg";

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

const MyShelfPage: FC<MyShelfPageProps> = (props) => {
  return (
    <View style={styles.body}>
      <NavButton icon={<TextSVG width={25} height={25} />} navigation={{ screen: "TxtList", params: {} }}>
        Чтение .txt файлов
      </NavButton>
    </View>
  );
};

export default MyShelfPage;
