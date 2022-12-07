import { theme } from "./theme";
import { syntax } from "./syntax";

const fs = require("fs").promises;

const generatre = () => ({
  name: "TEMPLATE",
  colors: { ...theme({ scheme: "frameless" }) },
  tokenColors: [...syntax],
  semanticHighlighting: true,
});

fs.mkdir("./themes", { recursive: true })
  .then(() =>
    Promise.all([
      fs.writeFile(
        "./themes/TEMPLATE-theme.json",
        JSON.stringify(generatre(), null, 2)
      ),
    ])
  )
  .catch(() => process.exit(1));
