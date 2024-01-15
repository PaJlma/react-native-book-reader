import { FC } from "react";
import { LibraryScreenProps } from "./LibraryScreen.types";
import DefaultLayout from "@/components/layouts/DefaultLayout/DefaultLayout";
import LibraryPage from "@/components/pages/LibraryPage/LibraryPage";

const LibraryScreen: FC<LibraryScreenProps> = (props) => {
  return (
    <DefaultLayout>
      <LibraryPage />
    </DefaultLayout>
  );
};

export default LibraryScreen;
