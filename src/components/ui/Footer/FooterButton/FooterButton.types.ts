import { FC, ReactElement } from "react";
import { PressableProps } from "react-native";
import { SvgProps } from "react-native-svg";

export interface FooterButtonProps extends PressableProps {
  text: string;
  icon: ReactElement<SvgProps>;
  activeIcon: ReactElement<SvgProps>;
  isActive?: boolean;
}
