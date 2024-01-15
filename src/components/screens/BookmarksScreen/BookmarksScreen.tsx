import DefaultLayout from "@/components/layouts/DefaultLayout/DefaultLayout";
import BookmarksPage from "@/components/pages/BookmarksPage/BookmarksPage";
import { BookmarksScreenProps } from "./BookmarksScreen.types";
import { FC } from "react";

const BookmarksScreen: FC<BookmarksScreenProps> = (props) => {
  return (
    <DefaultLayout>
      <BookmarksPage />
    </DefaultLayout>
  );
};

export default BookmarksScreen;
