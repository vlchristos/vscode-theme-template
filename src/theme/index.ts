import { getColors } from "./colors";

export interface ThemeOptions {
  scheme: "frameless" | "flat" | "default";
}

export const theme = ({ scheme }: ThemeOptions) => {
  const colors = getColors({ scheme });
  return colors;
};
