import { TxtFile } from "@/types/txtFiles.types";
import { PressableProps } from "react-native";

export interface TxtNavButtonProps extends Omit<PressableProps, "onPress"> {
  file: TxtFile;
}
