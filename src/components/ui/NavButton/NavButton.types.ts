import { RootStackParamList } from "@/types/navigation.types";
import { ReactElement } from "react";
import { PressableProps } from "react-native";
import { SvgProps } from "react-native-svg";

export interface NavButtonProps extends Omit<PressableProps, "onPress"> {
  navigation: {
    screen: keyof RootStackParamList;
    params: object;
  };
  icon?: ReactElement<SvgProps>;
  children?: string;
}
