export const syntax = [
  {
    scope: ["comment", "punctuation.definition.comment", "string.comment"],
    settings: {
      foreground: "#768390",
    },
  },
  {
    scope: [
      "constant",
      "entity.name.constant",
      "variable.other.constant",
      "variable.other.enummember",
      "variable.language",
      "entity",
    ],
    settings: {
      foreground: "#6cb6ff",
    },
  },
  {
    scope: ["entity.name", "meta.export.default", "meta.definition.variable"],
    settings: {
      foreground: "#f69d50",
    },
  },
  {
    scope: [
      "variable.parameter.function",
      "meta.jsx.children",
      "meta.block",
      "meta.tag.attributes",
      "entity.name.constant",
      "meta.object.member",
      "meta.embedded.expression",
    ],
    settings: {
      foreground: "#adbac7",
    },
  },
  {
    scope: "entity.name.function",
    settings: {
      foreground: "#dcbdfb",
    },
  },
  {
    scope: ["entity.name.tag", "support.class.component"],
    settings: {
      foreground: "#8ddb8c",
    },
  },
  {
    scope: "keyword",
    settings: {
      foreground: "#f47067",
    },
  },
  {
    scope: ["storage", "storage.type"],
    settings: {
      foreground: "#f47067",
    },
  },
  {
    scope: [
      "storage.modifier.package",
      "storage.modifier.import",
      "storage.type.java",
    ],
    settings: {
      foreground: "#adbac7",
    },
  },
  {
    scope: ["string", "string punctuation.section.embedded source"],
    settings: {
      foreground: "#96d0ff",
    },
  },
  {
    scope: "support",
    settings: {
      foreground: "#6cb6ff",
    },
  },
  {
    scope: "meta.property-name",
    settings: {
      foreground: "#6cb6ff",
    },
  },
  {
    scope: "variable",
    settings: {
      foreground: "#f69d50",
    },
  },
  {
    scope: "variable.other",
    settings: {
      foreground: "#adbac7",
    },
  },
  {
    scope: "invalid.broken",
    settings: {
      fontStyle: "italic",
      foreground: "#ff938a",
    },
  },
  {
    scope: "invalid.deprecated",
    settings: {
      fontStyle: "italic",
      foreground: "#ff938a",
    },
  },
  {
    scope: "invalid.illegal",
    settings: {
      fontStyle: "italic",
      foreground: "#ff938a",
    },
  },
  {
    scope: "invalid.unimplemented",
    settings: {
      fontStyle: "italic",
      foreground: "#ff938a",
    },
  },
  {
    scope: "carriage-return",
    settings: {
      fontStyle: "italic underline",
      background: "#f47067",
      foreground: "#cdd9e5",
      content: "^M",
    },
  },
  {
    scope: "message.error",
    settings: {
      foreground: "#ff938a",
    },
  },
  {
    scope: "string variable",
    settings: {
      foreground: "#6cb6ff",
    },
  },
  {
    scope: ["source.regexp", "string.regexp"],
    settings: {
      foreground: "#96d0ff",
    },
  },
  {
    scope: [
      "string.regexp.character-class",
      "string.regexp constant.character.escape",
      "string.regexp source.ruby.embedded",
      "string.regexp string.regexp.arbitrary-repitition",
    ],
    settings: {
      foreground: "#96d0ff",
    },
  },
  {
    scope: "string.regexp constant.character.escape",
    settings: {
      fontStyle: "bold",
      foreground: "#8ddb8c",
    },
  },
  {
    scope: "support.constant",
    settings: {
      foreground: "#6cb6ff",
    },
  },
  {
    scope: "support.variable",
    settings: {
      foreground: "#6cb6ff",
    },
  },
  {
    scope: "support.type.property-name.json",
    settings: {
      foreground: "#8ddb8c",
    },
  },
  {
    scope: "meta.module-reference",
    settings: {
      foreground: "#6cb6ff",
    },
  },
  {
    scope: "punctuation.definition.list.begin.markdown",
    settings: {
      foreground: "#f69d50",
    },
  },
  {
    scope: ["markup.heading", "markup.heading entity.name"],
    settings: {
      fontStyle: "bold",
      foreground: "#6cb6ff",
    },
  },
  {
    scope: "markup.quote",
    settings: {
      foreground: "#8ddb8c",
    },
  },
  {
    scope: "markup.italic",
    settings: {
      fontStyle: "italic",
      foreground: "#adbac7",
    },
  },
  {
    scope: "markup.bold",
    settings: {
      fontStyle: "bold",
      foreground: "#adbac7",
    },
  },
  {
    scope: ["markup.underline"],
    settings: {
      fontStyle: "underline",
    },
  },
  {
    scope: ["markup.strikethrough"],
    settings: {
      fontStyle: "strikethrough",
    },
  },
  {
    scope: "markup.inline.raw",
    settings: {
      foreground: "#6cb6ff",
    },
  },
  {
    scope: [
      "markup.deleted",
      "meta.diff.header.from-file",
      "punctuation.definition.deleted",
    ],
    settings: {
      background: "#5d0f12",
      foreground: "#ff938a",
    },
  },
  {
    scope: ["punctuation.section.embedded"],
    settings: {
      foreground: "#f47067",
    },
  },
  {
    scope: [
      "markup.inserted",
      "meta.diff.header.to-file",
      "punctuation.definition.inserted",
    ],
    settings: {
      background: "#113417",
      foreground: "#8ddb8c",
    },
  },
  {
    scope: ["markup.changed", "punctuation.definition.changed"],
    settings: {
      background: "#682d0f",
      foreground: "#f69d50",
    },
  },
  {
    scope: ["markup.ignored", "markup.untracked"],
    settings: {
      foreground: "#2d333b",
      background: "#6cb6ff",
    },
  },
  {
    scope: "meta.diff.range",
    settings: {
      foreground: "#dcbdfb",
      fontStyle: "bold",
    },
  },
  {
    scope: "meta.diff.header",
    settings: {
      foreground: "#6cb6ff",
    },
  },
  {
    scope: "meta.separator",
    settings: {
      fontStyle: "bold",
      foreground: "#6cb6ff",
    },
  },
  {
    scope: "meta.output",
    settings: {
      foreground: "#6cb6ff",
    },
  },
  {
    scope: [
      "brackethighlighter.tag",
      "brackethighlighter.curly",
      "brackethighlighter.round",
      "brackethighlighter.square",
      "brackethighlighter.angle",
      "brackethighlighter.quote",
    ],
    settings: {
      foreground: "#768390",
    },
  },
  {
    scope: "brackethighlighter.unmatched",
    settings: {
      foreground: "#ff938a",
    },
  },
  {
    scope: ["constant.other.reference.link", "string.other.link"],
    settings: {
      foreground: "#96d0ff",
      fontStyle: "underline",
    },
  },
];
