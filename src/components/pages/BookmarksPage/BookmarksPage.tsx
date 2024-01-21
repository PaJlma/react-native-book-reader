import { FC, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { BookmarksPageProps } from "./BookmarksPage.types";
import { useAppSelector } from "@/hooks/redux";
import TxtNavButton from "../TxtListPage/TxtNavButton/TxtNavButton";
import DropDown from "@/components/ui/DropDown/DropDown";
import TextSVG from "@/app-assets/svg/text-filled.svg";

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: "500",
    margin: 13,
  },
});

const BookmarksPage: FC<BookmarksPageProps> = (props) => {
  const bookmarkedTxtFiles = useAppSelector((state) => state.txtFiles).filter((file) => file.bookmarked);
  const [txtVisible, setTxtVisible] = useState<boolean>(true);

  const onDropDownClickHandler = () => {
    setTxtVisible(!txtVisible);
  };

  return (
    <ScrollView style={styles.body}>
      <DropDown
        title="Избранные .txt файлы"
        icon={<TextSVG width={25} height={25} />}
        active={txtVisible}
        onPress={onDropDownClickHandler}
      >
        {bookmarkedTxtFiles.map((file) => (
          <TxtNavButton key={file.uri} file={file} />
        ))}
      </DropDown>
    </ScrollView>
  );
};

export default BookmarksPage;
