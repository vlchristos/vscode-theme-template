export interface ThemeOptions {
  scheme: "frameless" | "flat" | "default";
}

export const theme = ({ scheme }: ThemeOptions) => {
  const CHECK = "#ef000d";
  const primary = "#1A1E23";
  const secondary = "#222831";
  const complementary1 = "#54A2F0FF";
  const complementary2 = "#54F0A2FF";
  const complementary3 = "#F0A254FF";
  const accent = "#F05454";
  const accentTransparent1 = "#F054544C";
  const accentTransparent2 = "#F0545498";
  const text = "#DDDDDD";
  const textSecondary = "#ADB5BDFF";
  const activeText = "#FFFFFF";
  const inactiveText = "#71757B";
  const highlight = "#374757";
  const highlightTransparent1 = "#37475759";
  const highlightTransparent2 = "#37475773";
  const highlightTransparent3 = "#3747578D";
  const black = "#000000";
  const error = "#E72F2FFF";
  const success = "#13D377FF";

  const border =
    scheme === "frameless" || scheme === "flat" ? false : highlight;

  return {
    "activityBar.background": primary,
    "activityBar.foreground": textSecondary,
    "activityBar.inactiveForeground": highlight,
    "activityBarBadge.background": complementary1,
    "activityBarBadge.foreground": activeText,
    "activityBar.activeBorder": accent,
    "activityBar.border": border,
    "activityBar.dropBorder": accentTransparent1,
    "activityBar.activeBackground": false,
    "activityBar.activeFocusBorder": false,
    "textLink.activeForeground": activeText,
    "textLink.foreground": complementary1,
    focusBorder: highlight,
    foreground: text,
    "progressBar.background": accent,
    "badge.foreground": activeText,
    "badge.background": complementary1,
    "selection.background": highlightTransparent3,
    "textBlockQuote.background": false,
    "textPreformat.foreground": false,
    "welcomePage.tileBackground": highlightTransparent1,
    "button.background": complementary2,
    "button.foreground": black,
    "button.secondaryBackground": highlight,
    "button.secondaryForeground": text,
    "button.border": border,
    "button.separator": false,
    "button.hoverBackground": false,
    "button.secondaryHoverBackground": false,
    "breadcrumb.foreground": highlight,
    "breadcrumb.background": false,
    "breadcrumb.focusForeground": text,
    "breadcrumb.activeSelectionForeground": activeText,
    "breadcrumbPicker.background": primary,
    "dropdown.background": primary,
    "dropdown.listBackground": primary,
    "dropdown.border": border,
    "dropdown.foreground": text,
    "editor.background": secondary,
    "editor.foreground": text,
    "editorLineNumber.foreground": highlight,
    "editorLineNumber.activeForeground": textSecondary,
    "editorCursor.foreground": text,
    "editorGroupHeader.tabsBorder": false,
    "editorIndentGuide.background": highlightTransparent1,
    "editorIndentGuide.activeBackground": highlight,
    "editor.selectionBackground": highlightTransparent3,
    "editor.selectionForeground": false,
    "searchEditor.findMatchBackground": false,
    "editor.lineHighlightBackground": highlightTransparent3,
    "editor.lineHighlightBorder": false,
    "editorUnnecessaryCode.border": border,
    "editorUnnecessaryCode.opacity": false,
    "editor.findMatchHighlightBackground": false,
    "editor.findRangeHighlightBackground": false,
    "editor.selectionHighlightBackground": false,
    "editor.wordHighlightBackground": false,
    "editor.wordHighlightStrongBackground": false,
    "checkbox.foreground": complementary2,
    "input.background": primary,
    "input.border": border,
    "input.foreground": text,
    "input.placeholderForeground": inactiveText,
    "inputOption.activeBackground": accent,
    "inputOption.activeBorder": highlight,
    "inputOption.activeForeground": activeText,
    "inputOption.hoverBackground": highlight,
    "inputValidation.errorBackground": accent,
    "inputValidation.errorForeground": activeText,
    "inputValidation.errorBorder": accent,
    "inputValidation.infoBackground": highlight,
    "inputValidation.infoForeground": activeText,
    "inputValidation.infoBorder": highlight,
    "inputValidation.warningBackground": complementary3,
    "inputValidation.warningForeground": black,
    "inputValidation.warningBorder": complementary3,
    "checkbox.background": false,
    "checkbox.border": border,
    "list.activeSelectionBackground": highlight,
    "list.activeSelectionForeground": activeText,
    "list.activeSelectionIconForeground": activeText,
    "list.dropBackground": accentTransparent1,
    "list.focusBackground": primary,
    "list.focusForeground": activeText,
    "list.focusOutline": accent,
    "list.focusAndSelectionOutline": false,
    "list.hoverBackground": highlightTransparent1,
    "list.hoverForeground": false,
    "list.inactiveSelectionBackground": highlightTransparent3,
    "list.inactiveSelectionForeground": activeText,
    "list.inactiveSelectionIconForeground": false,
    "list.inactiveFocusBackground": highlightTransparent1,
    "listFilterWidget.background": secondary,
    "tree.indentGuidesStroke": highlight,
    "list.focusHighlightForeground": accent,
    "list.highlightForeground": accent,
    "list.inactiveFocusOutline": false,
    "list.invalidItemForeground": false,
    "list.errorForeground": false,
    "list.warningForeground": false,
    "listFilterWidget.outline": false,
    "listFilterWidget.noMatchesOutline": false,
    "listFilterWidget.shadow": false,
    "list.filterMatchBackground": false,
    "list.filterMatchBorder": false,
    "list.deemphasizedForeground": false,
    "tree.tableColumnsBorder": false,
    "tree.tableOddRowsBackground": false,
    "notificationCenter.border": border,
    "notificationCenterHeader.foreground": text,
    "notificationCenterHeader.background": primary,
    "notificationToast.border": border,
    "notifications.foreground": text,
    "notifications.background": secondary,
    "notifications.border": border,
    "notificationLink.foreground": accent,
    "notificationsErrorIcon.foreground": accent,
    "notificationsWarningIcon.foreground": complementary3,
    "notificationsInfoIcon.foreground": complementary1,
    "panel.background": primary,
    "panel.border": border,
    "panel.dropBorder": accentTransparent1,
    "panelTitle.activeBorder": accent,
    "panelTitle.activeForeground": activeText,
    "panelTitle.inactiveForeground": inactiveText,
    "panelSection.border": border,
    "panelSection.dropBackground": accentTransparent1,
    "panelSectionHeader.background": secondary,
    "panelSectionHeader.foreground": text,
    "pickerGroup.border": border,
    "pickerGroup.foreground": accent,
    "quickInput.background": secondary,
    "quickInput.foreground": text,
    "quickInputList.focusBackground": highlight,
    "quickInputList.focusForeground": activeText,
    "quickInputList.focusIconForeground": accent,
    "scrollbarSlider.activeBackground": highlightTransparent3,
    "scrollbarSlider.background": highlightTransparent1,
    "scrollbarSlider.hoverBackground": highlightTransparent2,
    "sideBar.background": primary,
    "sideBar.foreground": textSecondary,
    "sideBar.border": border,
    "sideBar.dropBackground": accentTransparent1,
    "sideBarTitle.foreground": text,
    "sideBarSectionHeader.background": primary,
    "sideBarSectionHeader.foreground": textSecondary,
    "sideBarSectionHeader.border": border,
    "statusBar.background": primary,
    "statusBar.foreground": textSecondary,
    "statusBar.debuggingBackground": accent,
    "statusBar.debuggingForeground": text,
    "statusBar.noFolderForeground": text,
    "statusBar.noFolderBackground": highlight,
    "statusBarItem.remoteBackground": primary,
    "statusBarItem.remoteForeground": activeText,
    "statusBar.border": border,
    "statusBarItem.activeBackground": false,
    "statusBarItem.hoverBackground": false,
    "statusBarItem.errorBackground": false,
    "statusBarItem.errorForeground": false,
    "statusBarItem.warningBackground": false,
    "statusBarItem.warningForeground": false,
    "statusBarItem.compactHoverBackground": false,
    "editorGroup.border": border,
    "editorGroup.dropBackground": accentTransparent1,
    "editorGroupHeader.tabsBackground": primary,
    "tab.activeBackground": secondary,
    "tab.activeForeground": activeText,
    "tab.activeBorder": secondary,
    "tab.unfocusedActiveBorder": false,
    "tab.border": border,
    "tab.activeBorderTop": accent,
    "tab.unfocusedActiveBorderTop": highlight,
    "tab.lastPinnedBorder": false,
    "tab.inactiveBackground": primary,
    "tab.inactiveForeground": inactiveText,
    "tab.unfocusedActiveForeground": text,
    "tab.unfocusedHoverForeground": activeText,
    "terminal.background": false,
    "terminal.border": border,
    "terminal.foreground": false,
    "terminal.selectionBackground": highlight,
    "terminal.selectionForeground": false,
    "terminal.findMatchBackground": false,
    "terminal.findMatchHighlightBackground": false,
    "terminalOverviewRuler.cursorForeground": false,
    "terminalOverviewRuler.findMatchForeground": false,
    "terminal.ansiBlack": false,
    "terminal.ansiBlue": false,
    "terminal.ansiBrightBlack": false,
    "terminal.ansiBrightBlue": false,
    "terminal.ansiBrightCyan": false,
    "terminal.ansiBrightGreen": false,
    "terminal.ansiBrightMagenta": false,
    "terminal.ansiBrightRed": false,
    "terminal.ansiBrightWhite": false,
    "terminal.ansiBrightYellow": false,
    "terminal.ansiCyan": false,
    "terminal.ansiGreen": false,
    "terminal.ansiMagenta": false,
    "terminal.ansiRed": false,
    "terminal.ansiWhite": false,
    "terminal.ansiYellow": false,
    "terminal.inactiveSelectionBackground": false,
    "terminal.findMatchBorder": false,
    "terminal.findMatchHighlightBorder": false,
    "terminalCursor.background": false,
    "terminalCursor.foreground": false,
    "terminal.dropBackground": false,
    "terminal.tab.activeBorder": accent,
    "terminalCommandDecoration.defaultBackground": false,
    "terminalCommandDecoration.successBackground": false,
    "terminalCommandDecoration.errorBackground": false,
    "titleBar.activeBackground": primary,
    "titleBar.activeForeground": activeText,
    "titleBar.inactiveBackground": primary,
    "titleBar.inactiveForeground": inactiveText,
    "titleBar.border": border,
    "editorWidget.foreground": text,
    "editorWidget.background": secondary,
    "editorWidget.border": border,
    "editorSuggestWidget.foreground": false,
    "editorWidget.resizeBorder": false,
    "editorSuggestWidget.background": false,
    "editorSuggestWidget.border": border,
    "editorSuggestWidget.focusHighlightForeground": false,
    "editorSuggestWidget.highlightForeground": false,
    "editorSuggestWidget.selectedBackground": false,
    "editorSuggestWidget.selectedForeground": false,
    "editorSuggestWidget.selectedIconForeground": false,
    "editorSuggestWidgetStatus.foreground": false,
    "editorHoverWidget.foreground": false,
    "editorHoverWidget.background": false,
    "editorHoverWidget.border": border,
    "editorHoverWidget.highlightForeground": false,
    "editorHoverWidget.statusBarBackground": false,
    "peekViewEditor.background": primary,
    "peekView.border": border,
    "peekViewEditor.matchHighlightBackground": highlightTransparent3,
    "peekViewResult.background": highlightTransparent2,
    "peekViewTitle.background": highlightTransparent2,
    "settings.modifiedItemIndicator": accent,
  };
};
