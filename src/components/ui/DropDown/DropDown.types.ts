import { ReactElement, ReactNode } from "react";
import { PressableProps } from "react-native";
import { SvgProps } from "react-native-svg";

export interface DropDownProps extends PressableProps {
  active?: boolean;
  title?: string;
  icon?: ReactElement<SvgProps>;
  children?: ReactNode;
}
