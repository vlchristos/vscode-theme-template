export const getContrast50 = (hexcolor: string | boolean) => {
  if (typeof hexcolor === "boolean") {
    return "#FFFFFF";
  }
  return parseInt(hexcolor.replace("#", ""), 16) > 0xffffff / 2
    ? "#000000"
    : "#FFFFFF";
};
