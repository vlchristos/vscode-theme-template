import { ThemeOptions } from ".";
import { getContrast50 } from "../utils/contrast";
import { palette } from "./palette";

const borderColor = palette.highlight;

const defaultColors = {
  // Activity bar
  "activityBar.activeBackground": false,
  "activityBar.activeBorder": palette.accent,
  "activityBar.activeFocusBorder": false,
  "activityBar.background": palette.primary,
  "activityBar.border": borderColor,
  "activityBar.dropBorder": palette.accentTransparent1,
  "activityBar.foreground": palette.textSecondary,
  "activityBar.inactiveForeground": palette.highlight,
  "activityBarBadge.background": palette.complementary1,
  "activityBarBadge.foreground": getContrast50(palette.complementary1),

  // Badge
  "badge.background": palette.complementary1,
  "badge.foreground": getContrast50(palette.complementary1),

  // Breadcrumb
  "breadcrumb.activeSelectionForeground": palette.activeText,
  "breadcrumb.background": false,
  "breadcrumb.focusForeground": palette.text,
  "breadcrumb.foreground": palette.highlight,
  "breadcrumbPicker.background": palette.primary,

  // Buttons
  "button.background": palette.complementary2,
  "button.border": false,
  "button.foreground": getContrast50(palette.complementary2),
  "button.hoverBackground": false,
  "button.secondaryBackground": palette.highlight,
  "button.secondaryForeground": getContrast50(palette.highlight),
  "button.secondaryHoverBackground": false,
  "button.separator": false,

  // Checkbox
  "checkbox.background": false,
  "checkbox.border": borderColor,
  "checkbox.foreground": palette.complementary2,

  // Dropdown
  "dropdown.background": palette.primary,
  "dropdown.border": borderColor,
  "dropdown.foreground": palette.text,
  "dropdown.listBackground": palette.primary,

  // Editor
  "editor.background": palette.secondary,
  "editor.findMatchHighlightBackground": false,
  "editor.findRangeHighlightBackground": false,
  "editor.foreground": palette.text,
  "editor.lineHighlightBackground": palette.highlightTransparent3,
  "editor.lineHighlightBorder": false,
  "editor.selectionBackground": palette.highlightTransparent3,
  "editor.selectionForeground": false,
  "editor.selectionHighlightBackground": false,
  "editor.wordHighlightBackground": false,
  "editor.wordHighlightStrongBackground": false,
  "editorCursor.foreground": palette.text,
  "editorGroup.border": borderColor,
  "editorGroup.dropBackground": palette.accentTransparent1,
  "editorGroupHeader.tabsBackground": palette.primary,
  "editorGroupHeader.tabsBorder": false,
  "editorHoverWidget.background": false,
  "editorHoverWidget.border": borderColor,
  "editorHoverWidget.foreground": false,
  "editorHoverWidget.highlightForeground": false,
  "editorHoverWidget.statusBarBackground": false,
  "editorIndentGuide.activeBackground": palette.highlight,
  "editorIndentGuide.background": palette.highlightTransparent1,
  "editorLineNumber.activeForeground": palette.textSecondary,
  "editorLineNumber.foreground": palette.highlight,
  "editorSuggestWidget.background": false,
  "editorSuggestWidget.border": borderColor,
  "editorSuggestWidget.focusHighlightForeground": false,
  "editorSuggestWidget.foreground": false,
  "editorSuggestWidget.highlightForeground": false,
  "editorSuggestWidget.selectedBackground": false,
  "editorSuggestWidget.selectedForeground": false,
  "editorSuggestWidget.selectedIconForeground": false,
  "editorSuggestWidgetStatus.foreground": false,
  "editorUnnecessaryCode.border": borderColor,
  "editorUnnecessaryCode.opacity": false,
  "editorWidget.background": palette.secondary,
  "editorWidget.border": borderColor,
  "editorWidget.foreground": palette.text,
  "editorWidget.resizeBorder": false,

  // Input
  "input.background": palette.primary,
  "input.border": borderColor,
  "input.foreground": palette.text,
  "input.placeholderForeground": palette.inactiveText,
  "inputOption.activeBackground": palette.accent,
  "inputOption.activeborder": borderColor,
  "inputOption.activeForeground": palette.activeText,
  "inputOption.hoverBackground": palette.highlight,
  "inputValidation.errorBackground": palette.accent,
  "inputValidation.errorBorder": palette.accent,
  "inputValidation.errorForeground": palette.activeText,
  "inputValidation.infoBackground": palette.highlight,
  "inputValidation.infoborder": borderColor,
  "inputValidation.infoForeground": palette.activeText,
  "inputValidation.warningBackground": palette.complementary3,
  "inputValidation.warningBorder": palette.complementary3,
  "inputValidation.warningForeground": palette.black,

  // List
  "list.activeSelectionBackground": palette.highlight,
  "list.activeSelectionForeground": palette.activeText,
  "list.activeSelectionIconForeground": palette.activeText,
  "list.deemphasizedForeground": false,
  "list.dropBackground": palette.accentTransparent1,
  "list.errorForeground": false,
  "list.filterMatchBackground": false,
  "list.filterMatchBorder": false,
  "list.focusAndSelectionOutline": false,
  "list.focusBackground": palette.primary,
  "list.focusForeground": palette.activeText,
  "list.focusHighlightForeground": palette.accent,
  "list.focusOutline": palette.accent,
  "list.highlightForeground": palette.accent,
  "list.hoverBackground": palette.highlightTransparent1,
  "list.hoverForeground": false,
  "list.inactiveFocusBackground": palette.highlightTransparent1,
  "list.inactiveFocusOutline": false,
  "list.inactiveSelectionBackground": palette.highlightTransparent3,
  "list.inactiveSelectionForeground": palette.activeText,
  "list.inactiveSelectionIconForeground": false,
  "list.invalidItemForeground": false,
  "list.warningForeground": false,
  "listFilterWidget.background": palette.secondary,
  "listFilterWidget.noMatchesOutline": false,
  "listFilterWidget.outline": false,
  "listFilterWidget.shadow": false,

  // Notification
  "notificationCenter.border": borderColor,
  "notificationCenterHeader.background": palette.primary,
  "notificationCenterHeader.foreground": palette.text,
  "notificationLink.foreground": palette.accent,
  "notifications.background": palette.secondary,
  "notifications.border": borderColor,
  "notifications.foreground": palette.text,
  "notificationsErrorIcon.foreground": palette.accent,
  "notificationsInfoIcon.foreground": palette.complementary1,
  "notificationsWarningIcon.foreground": palette.complementary3,
  "notificationToast.border": borderColor,

  // Panel
  "panel.background": palette.primary,
  "panel.border": borderColor,
  "panel.dropBorder": palette.accentTransparent1,
  "panelSection.border": borderColor,
  "panelSection.dropBackground": palette.accentTransparent1,
  "panelSectionHeader.background": palette.secondary,
  "panelSectionHeader.foreground": palette.text,
  "panelTitle.activeBorder": palette.accent,
  "panelTitle.activeForeground": palette.activeText,
  "panelTitle.inactiveForeground": palette.inactiveText,

  // Peek View
  "peekView.border": borderColor,
  "peekViewEditor.background": palette.primary,
  "peekViewEditor.matchHighlightBackground": palette.highlightTransparent3,
  "peekViewResult.background": palette.highlightTransparent2,
  "peekViewTitle.background": palette.highlightTransparent2,

  // Picker Group
  "pickerGroup.border": borderColor,
  "pickerGroup.foreground": palette.accent,
  "progressBar.background": palette.accent,

  // Quick Input
  "quickInput.background": palette.secondary,
  "quickInput.foreground": palette.text,
  "quickInputList.focusBackground": palette.highlight,
  "quickInputList.focusForeground": palette.activeText,
  "quickInputList.focusIconForeground": palette.accent,

  // Scrollbar
  "scrollbarSlider.activeBackground": palette.highlightTransparent3,
  "scrollbarSlider.background": palette.highlightTransparent1,
  "scrollbarSlider.hoverBackground": palette.highlightTransparent2,

  // Search Editor
  "searchEditor.findMatchBackground": false,
  "selection.background": palette.highlightTransparent3,
  "settings.modifiedItemIndicator": palette.accent,

  // Side Bar
  "sideBar.background": palette.primary,
  "sideBar.border": borderColor,
  "sideBar.dropBackground": palette.accentTransparent1,
  "sideBar.foreground": palette.textSecondary,
  "sideBarSectionHeader.background": palette.primary,
  "sideBarSectionHeader.border": borderColor,
  "sideBarSectionHeader.foreground": palette.textSecondary,
  "sideBarTitle.foreground": palette.text,

  // Status bar
  "statusBar.background": palette.primary,
  "statusBar.border": borderColor,
  "statusBar.debuggingBackground": palette.accent,
  "statusBar.debuggingForeground": palette.text,
  "statusBar.foreground": palette.textSecondary,
  "statusBar.noFolderBackground": palette.highlight,
  "statusBar.noFolderForeground": palette.text,
  "statusBarItem.activeBackground": false,
  "statusBarItem.compactHoverBackground": false,
  "statusBarItem.errorBackground": false,
  "statusBarItem.errorForeground": false,
  "statusBarItem.hoverBackground": false,
  "statusBarItem.remoteBackground": palette.primary,
  "statusBarItem.remoteForeground": palette.activeText,
  "statusBarItem.warningBackground": false,
  "statusBarItem.warningForeground": false,

  // Tab
  "tab.activeBackground": palette.secondary,
  "tab.activeBorder": palette.secondary,
  "tab.activeBorderTop": palette.accent,
  "tab.activeForeground": palette.activeText,
  "tab.border": borderColor,
  "tab.inactiveBackground": palette.primary,
  "tab.inactiveForeground": palette.inactiveText,
  "tab.lastPinnedBorder": false,
  "tab.unfocusedActiveBorder": false,
  "tab.unfocusedActiveBorderTop": palette.highlight,
  "tab.unfocusedActiveForeground": palette.text,
  "tab.unfocusedHoverForeground": palette.activeText,

  // Terminal
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
  "terminal.background": false,
  "terminal.border": borderColor,
  "terminal.dropBackground": false,
  "terminal.findMatchBackground": false,
  "terminal.findMatchBorder": false,
  "terminal.findMatchHighlightBackground": false,
  "terminal.findMatchHighlightBorder": false,
  "terminal.foreground": false,
  "terminal.inactiveSelectionBackground": false,
  "terminal.selectionBackground": palette.highlight,
  "terminal.selectionForeground": false,
  "terminal.tab.activeBorder": palette.accent,
  "terminalCommandDecoration.defaultBackground": false,
  "terminalCommandDecoration.errorBackground": false,
  "terminalCommandDecoration.successBackground": false,
  "terminalCursor.background": false,
  "terminalCursor.foreground": false,
  "terminalOverviewRuler.cursorForeground": false,
  "terminalOverviewRuler.findMatchForeground": false,

  // Text
  "textBlockQuote.background": false,
  "textLink.activeForeground": palette.activeText,
  "textLink.foreground": palette.complementary1,
  "textPreformat.foreground": false,

  // Title Bar
  "titleBar.activeBackground": palette.primary,
  "titleBar.activeForeground": palette.activeText,
  "titleBar.border": borderColor,
  "titleBar.inactiveBackground": palette.primary,
  "titleBar.inactiveForeground": palette.inactiveText,

  // Tree
  "tree.indentGuidesStroke": palette.highlight,
  "tree.tableColumnsBorder": false,
  "tree.tableOddRowsBackground": false,

  // Welcome page
  "welcomePage.tileBackground": palette.highlightTransparent1,
  focusBorder: palette.highlight,
  foreground: palette.text,

  // Debug
  "debugToolBar.background": palette.primary,
};

const frameless = {
  ...defaultColors,
  "activityBar.border": false,
  "button.border": false,
  "dropdown.border": false,
  "editorGroup.border": palette.black,
  "editorHoverWidget.border": false,
  "editorSuggestWidget.border": false,
  "editorUnnecessaryCode.border": false,
  "editorWidget.border": false,
  "panel.border": palette.black,
  "panelSection.border": palette.black,
  "sideBar.border": palette.black,
  "sideBarSectionHeader.border": false,
  "statusBar.border": palette.black,
  "tab.border": false,
  "titleBar.border": false,
};

const flat = {
  ...frameless,
  "editor.background": palette.primary,
  "activityBar.background": palette.primary,
  "activityBar.border": palette.black,
  "sideBar.background": palette.primary,
  "sideBar.border": palette.black,
  "sideBarSectionHeader.background": palette.primary,
  "sideBarSectionHeader.border": palette.black,
  "titleBar.activeBackground": palette.primary,
  "titleBar.border": palette.black,
};

export const getColors = ({ scheme }: ThemeOptions) => {
  switch (scheme) {
    case "default":
      return defaultColors;
    case "flat":
      return flat;
    case "frameless":
      return frameless;
  }
};
