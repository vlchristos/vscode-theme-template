import { theme } from "./theme";
import { syntax } from "./syntax";

const fs = require("fs").promises;

const generateThemeDefault = () => ({
  name: "TEMPLATE",
  colors: { ...theme({ scheme: "default" }) },
  tokenColors: [...syntax],
  semanticHighlighting: true,
});
const generateThemeFrameless = () => ({
  name: "TEMPLATE Frameless",
  colors: { ...theme({ scheme: "frameless" }) },
  tokenColors: [...syntax],
  semanticHighlighting: true,
});
const generateThemeFlat = () => ({
  name: "TEMPLATE Flat",
  colors: { ...theme({ scheme: "flat" }) },
  tokenColors: [...syntax],
  semanticHighlighting: true,
});

fs.mkdir("./themes", { recursive: true })
  .then(() =>
    Promise.all([
      fs.writeFile(
        "./themes/TEMPLATE-theme.json",
        JSON.stringify(generateThemeDefault(), null, 2)
      ),
      fs.writeFile(
        "./themes/TEMPLATE-theme-frameless.json",
        JSON.stringify(generateThemeFrameless(), null, 2)
      ),
      fs.writeFile(
        "./themes/TEMPLATE-theme-flat.json",
        JSON.stringify(generateThemeFlat(), null, 2)
      ),
    ])
  )
  .catch(() => process.exit(1));
