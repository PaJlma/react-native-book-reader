import DefaultLayout from "@/components/layouts/DefaultLayout/DefaultLayout";
import MyShelfPage from "@/components/pages/MyShelfPage/MyShelfPage";
import { FC } from "react";
import { MyShelfScreenProps } from "./MyShelfScreen.types";

const MyShelfScreen: FC<MyShelfScreenProps> = (props) => {
  return (
    <DefaultLayout>
      <MyShelfPage />
    </DefaultLayout>
  );
};

export default MyShelfScreen;
