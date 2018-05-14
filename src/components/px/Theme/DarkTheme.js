import { injectGlobal } from 'styled-components';

injectGlobal`

@font-face {
  font-family: "GE Inspira Sans";
  font-weight: normal;
  font-style: normal;
  src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans.eot");
  src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans.eot?#iefix") format("embedded-opentype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans.woff") format("woff"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans.ttf") format("truetype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans.svg#GE Inspira Sans") format("svg");
}

@font-face {
  font-family: "GE Inspira Sans";
  font-weight: normal;
  font-style: italic;
  src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Italic.eot");
  src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Italic.eot?#iefix") format("embedded-opentype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Italic.woff") format("woff"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Italic.ttf") format("truetype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Italic.svg#GE Inspira Sans") format("svg");
}

@font-face {
  font-family: "GE Inspira Sans";
  font-weight: bold;
  font-style: normal;
  src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Bold.eot");
  src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Bold.eot?#iefix") format("embedded-opentype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Bold.woff") format("woff"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Bold.ttf") format("truetype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-Bold.svg#GE Inspira Sans") format("svg");
}

@font-face {
  font-family: "GE Inspira Sans";
  font-weight: bold;
  font-style: italic;
  src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-BoldItalic.eot");
  src: url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-BoldItalic.eot?#iefix") format("embedded-opentype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-BoldItalic.woff") format("woff"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-BoldItalic.ttf") format("truetype"), url("//dzlpbrbc7yvq0.cloudfront.net/predixdev/fonts/2.0.0/GEInspiraSans-BoldItalic.svg#GE Inspira Sans") format("svg");
}
 
 

.weight--normal {
  font-weight: 400 !important;
}

.weight--bold {
  font-weight: 600 !important;
}

 
abbr[title] {
  border-bottom: 1px dotted;
}


b,
strong {
  font-weight: bold;
}

dfn {
  font-style: italic;
}

mark {
  background: #ff0;
  color: #000;
}

small {
  font-size: 80%;
}
 
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}



:root {
  --px-base-text-color: #b6c3cc;
  --px-base-background-color: #23343f;
  --px-actionable-text-color: #45ace5;
  --px-actionable-text-color--hover: #2d7399;
  --px-actionable-text-color--active: #1e4d66;
  --px-selectable-text-color: #09819c;
  --px-selectable-text-color--hover: #065769;
  --px-selectable-text-color--active: #032c36;
  --px-actionable-alt-text-color: #b6c3cc;
  --px-actionable-alt-text-color--hover: #45ace5;
  --px-actionable-alt-text-color--active: #1e4d66;
  --px-actionable-disabled-text-color: rgba(103, 126, 140, 0.5);
  --px-btn-group-text-color: white;
  --px-btn-group-background-color: #09819c;
  --px-btn-group-background-color--hover: #2c404c;
  --px-btn-group-background-color--pressed: #0c1419;
  --px-btn-group-border-color: transparent;
  --px-btn-group-border-color--hover: transparent;
  --px-btn-group-border-color--pressed: transparent;
  --px-btn-color: white;
  --px-btn-background: #425866;
  --px-btn-background--hover: #2c404c;
  --px-btn-background--pressed: #0c1419;
  --px-btn-border-color: transparent;
  --px-btn-border-color--hover: transparent;
  --px-btn-border-color--press: transparent;
  --px-btn-shadow: none;
  --px-btn-shadow--light: none;
  --px-btn-primary-color: #2c404c;
  --px-btn-primary-background: #d8e0e5;
  --px-btn-primary-background--hover: #a3b5bf;
  --px-btn-primary-background--pressed: #889aa5;
  --px-btn-primary-border-color: transparent;
  --px-btn-tertiary-color: #45ace5;
  --px-btn-tertiary-color--hover: #2d7399;
  --px-btn-tertiary-color--pressed: #1e4d66;
  --px-btn-tertiary-background: transparent;
  --px-btn-tertiary-background--hover: #364c59;
  --px-btn-tertiary-background--pressed: #677e8c;
  --px-btn-tertiary-border-color: #677e8c;
  --px-btn-disabled-color: rgba(103, 126, 140, 0.5);
  --px-btn-disabled-background: transparent;
  --px-btn-disabled-border-color: rgba(103, 126, 140, 0.25);
  --px-btn-call-to-action-color: white;
  --px-btn-call-to-action-border-color: transparent;
  --px-btn-call-to-action-background: #007acc;
  --px-btn-call-to-action-background--hover: #005c99;
  --px-btn-call-to-action-background--pressed: #003d66;
  --px-btn-icon-border: 0 solid;
  --px-btn-icon-background: transparent;
  --px-btn-bare-color--hover: #45ace5;
  --px-btn-bare-color--pressed: #1e4d66;
  --px-btn-bare-color: #b6c3cc;
  --px-btn-primary-bare-color--visited: #45ace5;
  --px-btn-primary-bare-color--hover: #2d7399;
  --px-btn-primary-bare-color--pressed: #1e4d66;
  --px-code-text-color: #8098ff;
  --px-code-background-color: #0c1419;
  --px-code-border-color: transparent;
  --px-input-text-color: #b6c3cc;
  --px-input-label-text-color: #677e8c;
  --px-input-text-color--placeholder: rgba(103, 126, 140, 0.6);
  --px-input-text-color--placeholder--focused: rgba(44, 64, 76, 0.6);
  --px-input-text-color--help: #677e8c;
  --px-input-background-color: transparent;
  --px-input-background-color--hover: #2c404c;
  --px-input-background-color--focused: #eefbff;
  --px-input-background-color--disabled: transparent;
  --px-input-border-color--outer: #677e8c;
  --px-input-border-color--outer--focused: #007acc;
  --px-input-text-color--focused: #2c404c;
  --px-input-text-color--disabled: rgba(103, 126, 140, 0.5);
  --px-input-border-color--disabled: rgba(103, 126, 140, 0.25);
  --px-input-textarea-background--focused: #eefbff;
  --px-select-text-color: #2c404c;
  --px-select-background-color: #d8e0e5;
  --px-select-background-color--hover: #a3b5bf;
  --px-select-background-color--active: #889aa5;
  --px-select-border-color: transparent;
  --px-select-text-color: #b6c3cc;
  --px-multiselect-background-color: #e2e8ed;
  --px-validation-warning-text-color: #ff8b3a;
  --px-validation-warning-background-color: #fff0e6;
  --px-validation-error-text-color: #f34336;
  --px-validation-error-background-color: #ffecec;
  --px-validation-success-text-color: #b4e34f;
  --px-validation-success-background-color: #ecffee;
  --px-headings-heading-page-color: #b6c3cc;
  --px-headings-heading-section-color: #677e8c;
  --px-headings-heading-subsection-color: #677e8c;
  --px-headings-heading-subsection-background: rgba(5, 9, 12, 0.5);
  --px-headings-label-color: #677e8c;
  --px-headings-value-color: #b6c3cc;
  --px-list-ui-border-color: #677e8c;
  --px-list-ui-separator-color: #2c404c;
  --px-table-border-color: #677e8c;
  --px-table-separator-color: #2c404c;
  --px-toggle__background--checked: #007acc;
  --px-toggle__background--checked--hover: #005c99;
  --px-toggle__background--checked--pressed: #003d66;
  --px-toggle__background--checked--disabled: rgba(103, 126, 140, 0.5);
  --px-toggle__background--unchecked: #2c404c;
  --px-toggle__background--unchecked--hover: #23343f;
  --px-toggle__background--unchecked--pressed: #1b2a33;
  --px-toggle__background--unchecked--disabled: #1b2a33;
  --px-toggle__background-border--unchecked: #889aa5;
  --px-toggle__background-border--unchecked--hover: #677e8c;
  --px-toggle__background-border--unchecked--pressed: #4f6472;
  --px-toggle__background-border--unchecked--disabled: rgba(103, 126, 140, 0.5);
  --px-toggle__switch: #d8e0e5;
  --px-toggle__switch--hover: #a3b5bf;
  --px-toggle__switch--pressed: #889aa5;
  --px-toggle__switch--disabled: #1b2a33;
  --px-toggle__switch-border: #889aa5;
  --px-toggle__switch-border--hover: #677e8c;
  --px-toggle__switch-border--pressed: #4f6472;
  --px-toggle__switch-border--disabled: rgba(103, 126, 140, 0.5);
  --px-alert-label-border-color: transparent;
  --px-alert-label-text-color--important: white;
  --px-alert-label-background-color--important: #f34336;
  --px-alert-label-text-color--warning: white;
  --px-alert-label-background-color--warning: #ff8b3a;
  --px-alert-label-text-color--error: #595502;
  --px-alert-label-background-color--error: #fec600;
  --px-alert-label-background-color--information: white;
  --px-alert-label-background-color--information: #1479c9;
  --px-alert-label-text-color--healthy: white;
  --px-alert-label-background-color--healthy: #7fae1b;
  --px-alert-label-text-color--unknown: white;
  --px-alert-label-background-color--unknown: #b8b8b8;
  --px-alert-message-background-color: white;
  --px-alert-message-text-color: #2c404c;
  --px-alert-message-color--important: #f34336;
  --px-alert-message-color--warning: #ff8b3a;
  --px-alert-message-color--error: #fec600;
  --px-alert-message-color--information: #1479c9;
  --px-alert-message-color--unknown: #b8b8b8;
  --px-alert-message-dismiss-icon-color: #889aa5;
  --px-app-nav-background-color: #0c1419;
  --px-app-nav-item-background-color--collapsed: #1b2a33;
  --px-app-nav-item-background-color--empty: #1b2a33;
  --px-app-nav-item-background-color--hover: #23343f;
  --px-app-nav-item-background-color--pressed: #2c404c;
  --px-app-nav-item-background-color--selected: #1b2a33;
  --px-app-nav-item-background-color: #0c1419;
  --px-app-nav-item-icon-color--collapsed: #b6c3cc;
  --px-app-nav-item-icon-color--hover: #b6c3cc;
  --px-app-nav-item-icon-color--pressed: #b6c3cc;
  --px-app-nav-item-icon-color--selected: #b6c3cc;
  --px-app-nav-item-icon-color: #b6c3cc;
  --px-app-nav-item-stripe-color--selected: #09819c;
  --px-app-nav-item-text-color--collapsed: #b6c3cc;
  --px-app-nav-item-text-color--hover: #b6c3cc;
  --px-app-nav-item-text-color--pressed: #b6c3cc;
  --px-app-nav-item-text-color--selected: #b6c3cc;
  --px-app-nav-item-text-color: #b6c3cc;
  --px-app-nav-subitem-background-color--hover: #1b2a33;
  --px-app-nav-subitem-background-color--selected: #09819c;
  --px-app-nav-subitem-background-color: #23343f;
  --px-app-nav-subitem-text-color--collapsed: #b6c3cc;
  --px-app-nav-subitem-text-color--hover: #b6c3cc;
  --px-app-nav-subitem-text-color--selected: white;
  --px-app-nav-subitem-text-color: #b6c3cc;
  --px-app-nav-subitem-background-color--collapsed: #0c1419;
  --px-app-nav-subitem-background-color--collapsed-hover: #23343f;
  --px-app-nav-subitem-accent-color--parent-collapsed-selected: #09819c;
  --px-app-nav-subitem-background-color--parent-collapsed-hover: #1b2a33;
  --px-app-nav-subitem-background-color--parent-collapsed-selected: #09819c;
  --px-app-nav-subitem-text-color--parent-collapsed-selected: white;
  --px-app-nav-subitem-text-color--parent-collapsed-not-selected: #b6c3cc;
  --px-app-nav-subitem-background-color--parent-collapsed-not-selected: #23343f;
  --px-card-background-color: #121f26;
  --px-card-border-color: #364c59;
  --px-card-header-color: #677e8c;
  --px-card-icon-color: #677e8c;
  --px-card-action-icon-color: #677e8c;
  --px-card-action-icon-color--hover: #45ace5;
  --px-card-action-icon-color--pressed: #1e4d66;
  --px-deck-selector-border-color: #0c1419;
  --px-deck-selector-shadow-color: rgba(0, 0, 0, 0.2);
  --px-deck-selector-background-color: #23343f;
  --px-deck-selector-text-color: #b6c3cc;
  --px-deck-selector-background-color--hover: #1b2a33;
  --px-deck-selector-text-color--hover: #b6c3cc;
  --px-deck-selector-background-color--selected: #09819c;
  --px-deck-selector-text-color--selected: white;
  --px-deck-selector-li-border: #2c404c;
  --px-breadcrumbs-chevron-color: #4f6472;
  --px-percent-circle-fill-color: #5dac9f;
  --px-percent-circle-background-color: #2c404c;
  --px-percent-circle-text-color: #b6c3cc;
  --px-simple-bar-chart-text-color: #b6c3cc;
  --px-simple-bar-chart-background-color: transparent;
  --px-simple-bar-chart-axis-color: #677e8c;
  --px-simple-horizontal-bar-chart-background-color: transparent;
  --px-simple-horizontal-bar-chart-legend-text-color: #b6c3cc;
  --px-simple-horizontal-bar-chart-label-text-color: #b6c3cc;
  --px-simple-horizontal-bar-chart-axis-color: #677e8c;
  --px-simple-line-chart-background-color: transparent;
  --px-simple-line-chart-border-color: #677e8c;
  --px-simple-line-chart-grid-color: #2c404c;
  --px-simple-line-chart-bottom-color: transparent;
  --px-simple-line-chart-axis-bar-color: #23343f;
  --px-simple-line-chart-axis-label-color: #677e8c;
  --px-simple-line-chart-axis-label-font-weight: normal;
  --px-simple-line-chart-line-color: #86c600;
  --px-simple-line-chart-threshold-line-color: #e9a24b;
  --px-win-loss-border-color: #677e8c;
  --px-win-loss-background-color: transparent;
  --px-win-loss-positive-fill-color: #92ce40;
  --px-win-loss-negative-fill-color: #e58189;
  --px-chip-background-color: transparent;
  --px-chip-background-color--hover: rgba(103, 126, 140, 0.2);
  --px-chip-background-color--selected: rgba(103, 126, 140, 0.3);
  --px-chip-border-color: #889aa5;
  --px-chip-border-color--hover: #889aa5;
  --px-chip-border-color--selected: #45ace5;
  --px-chip-text-color: #b6c3cc;
  --px-chip-text-color--selected: #45ace5;
  --px-chip-icon-color: #677e8c;
  --px-chip-icon-color--hover: #45ace5;
  --px-clipboard-icon-color: #b6c3cc;
  --px-clipboard-icon-color--hover: #007acc;
  --px-clipboard-icon-color--pressed: #003d66;
  --px-clipboard-icon-color--copied: #7fae1b;
  --px-context-browser-header-background-color: #1b2a33;
  --px-context-browser-header-border-color: #121f26;
  --px-context-browser-header-text-color: #09819c;
  --px-context-browser-icon-stroke: #b6c3cc;
  --px-context-browser-item-text-color: #b6c3cc;
  --px-context-browser-item-background-color--hover: #1b2a33;
  --px-context-browser-item-background-color--selected: #09819c;
  --px-context-browser-item-color--selected: #b6c3cc;
  --px-context-browser-item-text-color--selected: white;
  --px-context-browser-icon-stroke--item-selected: white;
  --px-context-browser-panel-border-color: black;
  --px-context-browser-panel-background-color: #23343f;
  --px-context-browser-loading-background-color: #007acc;
  --px-context-browser-loading-foreground-color: #b5e5fd;
  --px-context-browser-icon-select-stroke: #4f7b00;
  --px-context-browser-icon-select-fill: #86c600;
  --px-context-browser-icon-favorite-stroke: #8a8300;
  --px-context-browser-icon-favorite-fill: #dbd139;
  --px-context-browser-trigger-hover-background: #425866;
  --px-context-browser-trigger-icon-color: #b6c3cc;
  --px-data-table-border-color: #677e8c;
  --px-data-table-separator-color: #2c404c;
  --px-data-table-header-text-color: inherit;
  --px-data-table-header-background-color: inherit;
  --px-data-table-background-color-striped--even: rgba(103, 126, 140, 0.1);
  --px-data-table-cell-border-validation--failed: #f34336;
  --px-data-table-cell-border-color--edit: #007acc;
  --px-data-table-cell-border-color--selected: rgba(103, 126, 140, 0.2);
  --px-data-table-cell-border-validation--failed: #f34336;
  --px-data-table-cell-background-color--selected: rgba(103, 126, 140, 0.2);
  --px-data-table-cell-background-color--edit: transparent;
  --px-data-table-cell-text-color--selected: #b6c3cc;
  --px-data-table-cell-text-color-validation--failed: #f34336;
  --px-data-table-cell-text-color--sorted: #09819c;
  --px-data-table-cell-text-color--editing: #b6c3cc;
  --px-data-table-results-text-color--none: #889aa5;
  --px-data-table-insertion-indicator-td-background-color: #007acc;
  --px-data-table-text-input-background-color--filter: transparent;
  --px-data-table-tr--filter: transparent;
  --px-data-table-text-color--dragged: #007acc;
  --px-data-table-text-color--hover: #005c99;
  --px-data-table-highlight--high: rgba(243, 67, 54, 0.25);
  --px-data-table-highlight--medium: rgba(254, 198, 0, 0.25);
  --px-data-table-highlight--low: rgba(20, 121, 201, 0.25);
  --px-calendar-background-color--hover: rgba(0, 0, 0, 0.25);
  --px-calendar-background-color--pressed: #032c36;
  --px-calendar-background-color--selected: #09819c;
  --px-calendar-title-color: #889aa5;
  --px-calendar-text-color: #b6c3cc;
  --px-calendar-text-color--hover: #b6c3cc;
  --px-calendar-text-color--selected: white;
  --px-calendar-alt-background-color: #065769;
  --px-calendar-sub-labels--text-color: #677e8c;
  --px-calendar-today-border: #09819c;
  --px-datetime-icon-color: #889aa5;
  --px-datetime-read-only-text-color: #4f6472;
  --px-datetime-entry-selected: #a6dffc;
  --px-datetime-preset-title-color: #677e8c;
  --px-datetime-dropdown-content-color: --px-base-text-color;
  --dt-field-background-color-fix: #1b2a33;
  --px-datetime-picker-border-color: #0c1419;
  --px-datetime-picker-background-color: #23343f;
  --px-datetime-range-field-to-color: #4f6472;
  --px-range-panel-border-color: #0c1419;
  --px-range-panel-background-color: #23343f;
  --px-demo-snippet-background-color: #0c1419;
  --px-dropdown-bg-color: #23343f;
  --px-dropdown-bg-color--hover: #2c404c;
  --px-dropdown-bg-color--selected: #09819c;
  --px-dropdown-text-color--disabled: rgba(255, 255, 255, 0.2);
  --px-dropdown-text-color--selected: #b6c3cc;
  --px-dropdown-border-color: #0c1419;
  --px-dropdown-text-color: #b6c3cc;
  --px-file-upload-file-list-color: #677e8c;
  --px-file-upload-validation-color: #f34336;
  --px-file-upload-dropzone-background-color: rgba(255, 255, 255, 0.15);
  --px-heatmap-grid-start-color: #2c404c;
  --px-heatmap-grid-end-color: #f34336;
  --px-heatmap-grid-table-border-color: #2c404c;
  --px-inbox-border-color: #2c404c;
  --px-inbox-secondary-text-color: #677e8c;
  --px-inbox-li-background-color: #121f26;
  --px-inbox-li-background-color--selected: #09819c;
  --px-inbox-li-text-color--selected: #b6c3cc;
  --px-inbox-icon-outline-color: white;
  --px-inbox-alert-color: #f34336;
  --px-inbox-warning-color: #ff8b3a;
  --px-inbox-error-color: #fec600;
  --px-inbox-information-color: #1479c9;
  --px-inbox-height: 100vh;
  --px-inbox-list-width: 320px;
  --px-kpi-text-color: #b6c3cc;
  --px-kpi-secondary-text-color: #677e8c;
  --px-kpi-border-color: #677e8c;
  --px-kpi-separator-color: #2c404c;
  --px-login-text-color: #b6c3cc;
  --px-map-icon-unknown-color: #4d4d4d;
  --px-map-icon-info-color: #005c99;
  --px-map-icon-warning-color: #cc5500;
  --px-map-icon-important-color: #b40000;
  --px-map-icon-border-color: #05090c;
  --px-map-icon-symbol-color: #05090c;
  --px-map-marker-symbol-stroke: #d8e0e5;
  --px-map-marker-group-cluster-path-size: 10px;
  --px-map-marker-group-cluster-font-size: 15px;
  --px-map-marker-group-cluster-font-weight: normal;
  --px-map-marker-group-cluster-font-color: inherit;
  --px-map-marker-group-cluster-font-size: inherit;
  --px-map-marker-group-cluster-font-weight: inherit;
  --px-map-marker-group-cluster-line-height: inherit;
  --px-map-marker-group-cluster-border-size: 5px;
  --px-map-marker-group-cluster-border-color: #05090c;
  --px-map-marker-group-cluster-polygon-stroke-color: #526fda;
  --px-map-marker-group-cluster-polygon-fill-color: #36488e;
  --px-map-marker-group-cluster-background-color: #23343f;
  --px-map-control-button-background-color: #23343f;
  --px-map-control-button-text-color: #b6c3cc;
  --px-map-control-button-border-width: 3px;
  --px-map-control-button-border-color: rgba(0, 0, 0, 0.3);
  --px-map-control-button-background-color--hover: #1b2a33;
  --px-map-control-button-text-color--hover: #889aa5;
  --px-map-control-button-border-color--disabled: #4f6472;
  --px-map-control-button-text-color--disabled: #4f6472;
  --px-map-info-control-background-color: #23343f;
  --px-map-info-control-border-color: #05090c;
  --px-map-data-box-border-color__top: #2c404c;
  --px-map-data-box-border-color__left: #2c404c;
  --px-map-popup-content-wrapper-border: #05090c;
  --px-map-popup-content-wrapper-background-color: #23343f;
  --px-map-popup-content-wrapper-text-color: #b6c3cc;
  --px-map-marker-locate-icon-color: #005c99;
  --px-map-marker-locate-icon-border-color: #05090c;
  --px-map-marker-locate-icon-accuracy-color: black;
  --px-map-marker-locate-icon-accuracy-opacity: 0.3;
  --px-modal-background-color: #e2e8ed;
  --px-modal-overlay-color: rgba(0, 0, 0, 0.65);
  --px-modal-border-color: transparent;
  --px-modal-text-color: #2c404c;
  --px-modal-btn--disabled: #c5d1d8;
  --px-overlay-color: rgba(0, 0, 0, 0.65);
  --px-popover-background-color: #23343f;
  --px-popover-border-color: #0c1419;
  --px-popover-text-color: #b6c3cc;
  --px-popover-shadow-color: rgba(0, 0, 0, 0.15);
  --px-progress-bar-fill-color: #007acc;
  --px-progress-bar-background-color: #b5e5fd;
  --px-slider-border-color: transparent;
  --px-slider-border-color--disabled: rgba(103, 126, 140, 0.5);
  --px-slider-border-color--selected: #007acc;
  --px-slider-background-color: rgba(103, 126, 140, 0.4);
  --px-slider-background-color--disabled: transparent;
  --px-slider-background-color--selected: #007acc;
  --px-slider-background-color--hover: #005c99;
  --px-slider-background-color--pressed: #003d66;
  --px-slider-progress-border-color--disabled: transparent;
  --px-slider-progress-background-color--disabled: rgba(103, 126, 140, 0.5);
  --px-handle-stroke-color: #889aa5;
  --px-handle-stroke-color--hover: #677e8c;
  --px-handle-stroke-color--active: #4f6472;
  --px-handle-color--disabled: rgba(103, 126, 140, 0.5);
  --px-handle-background-color: #d8e0e5;
  --px-handle-background-color--hover: #a3b5bf;
  --px-handle-background-color--active: #889aa5;
  --px-handle-background-color--disabled: #2c404c;
  --px-slider-label-color: #b6c3cc;
  --px-spinner-fill-color: #007acc;
  --px-spinner-background-color: #b5e5fd;
  --px-table-row-color: inherit;
  --px-table-row-background-color: #1b2a33;
  --px-table-row-selected-background-color: #09819c;
  --px-table-row-selected-color: white;
  --px-table-row-title-color: inherit;
  --px-table-row-subtitle-color: #889aa5;
  --px-table-row-body-color: #677e8c;
  --px-table-row-label-color: #677e8c;
  --px-table-row-header-color: inherit;
  --px-table-row-header-background-color: #e2e8ed;
  --px-table-row-border-color: #677e8c;
  --px-table-row-separator-color: #2c404c;
  --px-table-row-button-color-alert: #f34336;
  --px-table-row-button-color-alert-hover: #f9a59f;
  --px-table-row-button-color-alert-pressed: #b40000;
  --px-table-row-button-color-warn: #ff8b3a;
  --px-table-row-button-color-warn-hover: #ffc499;
  --px-table-row-button-color-warn-pressed: #cc5500;
  --px-table-row-button-color-primary: #007acc;
  --px-table-row-button-color-primary-hover: #005c99;
  --px-table-row-button-color-primary-pressed: #003d66;
  --px-table-row-button-color-info: #2c404c;
  --px-table-row-button-color-info-hover: #425866;
  --px-table-row-button-color-info-pressed: #1b2a33;
  --px-table-row-button-font-color: #b6c3cc;
  --px-tab-color: #b6c3cc;
  --px-tab-color--hover: #09819c;
  --px-tab-color--active: #032c36;
  --px-tab-color--selected: #09819c;
  --px-tab-border-color: #2c404c;
  --px-tile-background-color: #23343f;
  --px-tile-thumbnail-background-color: #1b2a33;
  --px-tile-overlay-background-color: #e2e8ed;
  --px-tile-overlay-text-color: #1b2a33;
  --px-timeline-border-color: #677e8c;
  --px-timeline-text-color: #b6c3cc;
  --px-timeline-alt-text-color: #677e8c;
  --px-timeline-quote-mark-color: #364c59;
  --px-tree-text-color--hover: #b6c3cc;
  --px-tree-background-color--hover: #2c404c;
  --px-tree-text-color--selected: #b6c3cc;
  --px-tree-background-color--selected: #09819c;
  --px-tooltip-background-color: #23343f;
  --px-tooltip-text-color: #b6c3cc;
  --px-tooltip-border-color: #0c1419;
  --px-tooltip-shadow-color: rgba(0, 0, 0, 0.15);
  --px-typeahead-background-color: #364c59;
  --px-typeahead-background-color--hover: #2c404c;
  --px-typeahead-background-color--selected: #09819c;
  --px-typeahead-border-color: #59717f;
  --px-typeahead-box-shadow-color: rgba(0, 0, 0, 0.15);
  --px-typeahead-text-color: #b6c3cc;
  --px-typeahead-text-color--hover: #b6c3cc;
  --px-typeahead-text-color--selected: #b6c3cc;
  --px-typeahead-icon-color: #b6c3cc;
  --px-typeahead-icon-color--disabled: rgba(103, 126, 140, 0.5);
  --px-view-header-background-color: #0c1419;
  --px-view-header-title-color: #b6c3cc;
  --px-view-header-subtitle-color: #677e8c;
  --px-vis-font-family: "GE Inspira Sans";
  --px-vis-axis-brush-outline-color: #007acc;
  --px-vis-axis-brush-fill-color: #96a8b2;
  --px-vis-axis-brush-fill-opacity: 0.3;
  --px-vis-axis-color: #677e8c;
  --px-vis-axis-title-color: #677e8c;
  --px-vis-axis-common-tick-color: #677e8c;
  --px-vis-axis-inline-title-color: #2c404c;
  --px-vis-axis-inline-type-color: #b6c3cc;
  --px-vis-axis-inline-box-color: #2c404c;
  --px-dynamic-menu-icon-color: #007acc;
  --px-dynamic-menu-background-color: #23343f;
  --px-dynamic-menu-border-color: #0c1419;
  --px-dynamic-menu-text-color: #b6c3cc;
  --px-dynamic-menu-item-background-color: #09819c;
  --px-dynamic-menu-item-text-color: white;
  --px-vis-nav-brush-outline-color: #677e8c;
  --px-vis-nav-brush-fill-color: #677e8c;
  --px-vis-nav-brush-opacity: 0.2;
  --px-vis-nav-brush-gradient-fill-color: #677e8c;
  --px-vis-nav-brush-gradient-opacity-1: 0.1;
  --px-vis-nav-brush-gradient-opacity-2: 0.8;
  --px-vis-nav-brush-handle-fill-color: #23343f;
  --px-vis-nav-brush-handle-lines-color: #677e8c;
  --px-vis-nav-brush-handle-fill-color-hover: #364c59;
  --px-vis-nav-brush-handle-lines-color-hover: #677e8c;
  --px-vis-nav-brush-handle-fill-color-press: #1b2a33;
  --px-vis-nav-brush-handle-lines-color-press: #2c404c;
  --px-vis-cursor-line-color: #677e8c;
  --px-vis-event-line-color: #677e8c;
  --px-vis-event-icon-color: #a3b5bf;
  --px-vis-gridlines-color: #2c404c;
  --px-vis-pie-empty-color: #cccccc;
  --px-vis-threshold-color: #889aa5;
  --px-vis-zoom-brush-outline-color: #007acc;
  --px-vis-zoom-brush-fill-color: black;
  --px-vis-zoom-brush-fill-opacity: 0.5;
  --px-vis-pie-title-color: #677e8c;
  --px-vis-pie-title-value-color: #b6c3cc;
  --px-vis-pie-title-font-size: 45px;
  --px-vis-pie-title-value-font-size: 45px;
  --px-vis-register-series-name: #677e8c;
  --px-vis-register-data-value: #b6c3cc;
  --px-vis-register-box: #364c59;
  --px-vis-toolbar-icon-color: #b6c3cc;
  --px-vis-toolbar-selected-color: #45ace5;
  --px-vis-toolbar-hover-color: #2d7399;
  --px-vis-toolbar-active-color: #45ace5;
  --px-vis-toolbar-subrow-background-color: rgba(12, 20, 25, 0.8);
  --px-vis-series-color-0: #5abff8;
  --px-vis-series-color-1: #e28d17;
  --px-vis-series-color-2: #7bbc00;
  --px-vis-series-color-3: #a677ef;
  --px-vis-series-color-4: #ffa076;
  --px-vis-series-color-5: #6184ff;
  --px-vis-series-color-6: #db6abc;
  --px-vis-series-color-7: #4d978b;
  --px-vis-series-color-8: #de4377;
  --px-vis-series-color-9: #659540;
  --px-vis-series-color-10: #e05455;
  --px-vis-series-color-11: #4882a8;
  --px-vis-series-color-12: #d3c800;
  --px-vis-series-color-13: #7a7a7a;
  --px-vis-series-color-14: #b2912e;
  --px-vis-series-color-15: #82d2fb;
  --px-vis-series-color-16: #ecaf68;
  --px-vis-series-color-17: #92ce40;
  --px-vis-series-color-18: #bf9ef4;
  --px-vis-series-color-19: #f2bf9f;
  --px-vis-series-color-20: #95a7ff;
  --px-vis-series-color-21: #e393d2;
  --px-vis-series-color-22: #78baaf;
  --px-vis-series-color-23: #df669b;
  --px-vis-series-color-24: #8eb47c;
  --px-vis-series-color-25: #e58189;
  --px-vis-series-color-26: #7da7c3;
  --px-vis-series-color-27: #e1d75e;
  --px-vis-series-color-28: #a3a3a3;
  --px-vis-series-color-29: #cab272;
  --px-vis-series-color-30: #a6dffc;
  --px-vis-series-color-31: #f2c89a;
  --px-vis-series-color-32: #aedc80;
  --px-vis-series-color-33: #d2bbf9;
  --px-vis-series-color-34: #f6d4bf;
  --px-vis-series-color-35: #b9c3ff;
  --px-vis-series-color-36: #e9b4e0;
  --px-vis-series-color-37: #aed5cf;
  --px-vis-series-color-38: #e594bd;
  --px-vis-series-color-39: #b0cca6;
  --px-vis-series-color-40: #eba9b0;
  --px-vis-series-color-41: #a8c4d6;
  --px-vis-series-color-42: #ebe393;
  --px-vis-series-color-43: #cccccc;
  --px-vis-series-color-44: #dccaa0;
  --px-vis-series-color-45: #3b7ea4;
  --px-vis-series-color-46: #955c11;
  --px-vis-series-color-47: #4f7b00;
  --px-vis-series-color-48: #6b4c9b;
  --px-vis-series-color-49: #9d6c4e;
  --px-vis-series-color-50: #4056aa;
  --px-vis-series-color-51: #90457b;
  --px-vis-series-color-52: #315e57;
  --px-vis-series-color-53: #912948;
  --px-vis-series-color-54: #42622a;
  --px-vis-series-color-55: #903537;
  --px-vis-series-color-56: #2e546d;
  --px-vis-series-color-57: #8a8300;
  --px-vis-series-color-58: #4d4d4d;
  --px-vis-series-color-59: #745e1f;
  --px-vis-series-color-60: #6fc9fa;
  --px-vis-series-color-61: #e9a24b;
  --px-vis-series-color-62: #86c600;
  --px-vis-series-color-63: #b48cf2;
  --px-vis-series-color-64: #f0b38d;
  --px-vis-series-color-65: #8098ff;
  --px-vis-series-color-66: #e081c9;
  --px-vis-series-color-67: #5dac9f;
  --px-vis-series-color-68: #de5288;
  --px-vis-series-color-69: #7ba662;
  --px-vis-series-color-70: #e36e74;
  --px-vis-series-color-71: #6797b8;
  --px-vis-series-color-72: #dbd139;
  --px-vis-series-color-73: #8f8f8f;
  --px-vis-series-color-74: #c0a455;
  --px-vis-series-color-75: #99dafb;
  --px-vis-series-color-76: #f0bf88;
  --px-vis-series-color-77: #a4d76b;
  --px-vis-series-color-78: #ccb1f7;
  --px-vis-series-color-79: #f4ccb4;
  --px-vis-series-color-80: #adb9ff;
  --px-vis-series-color-81: #e7a8db;
  --px-vis-series-color-82: #93c8bf;
  --px-vis-series-color-83: #e284b2;
  --px-vis-series-color-84: #a4c497;
  --px-vis-series-color-85: #e99ba3;
  --px-vis-series-color-86: #99bad0;
  --px-vis-series-color-87: #e8e082;
  --px-vis-series-color-88: #b8b8b8;
  --px-vis-series-color-89: #d6c28f;
  --px-vis-series-color-90: #b5e5fd;
  --px-vis-series-color-91: #f4d2ad;
  --px-vis-series-color-92: #bbe297;
  --px-vis-series-color-93: #d9c6f9;
  --px-vis-series-color-94: #f7dbc9;
  --px-vis-series-color-95: #c5cdff;
  --px-vis-series-color-96: #ecbfe5;
  --px-vis-series-color-97: #c9e3df;
  --px-vis-series-color-98: #e8a5c8;
  --px-vis-series-color-99: #bdd4b5;
  --px-vis-series-color-100: #edb6bd;
  --px-vis-series-color-101: #b6cedd;
  --px-vis-series-color-102: #efe8a5;
  --px-vis-series-color-103: #e0e0e0;
  --px-vis-series-color-104: #e1d3b0;
  --px-vis-series-color-105: #2f6787;
  --px-vis-series-color-106: #7c4d10;
  --px-vis-series-color-107: #406600;
  --px-vis-series-color-108: #594080;
  --px-vis-series-color-109: #815940;
  --px-vis-series-color-110: #36488e;
  --px-vis-series-color-111: #773966;
  --px-vis-series-color-112: #23433e;
  --px-vis-series-color-113: #78213c;
  --px-vis-series-color-114: #355023;
  --px-vis-series-color-115: #782c2e;
  --px-vis-series-color-116: #26455a;
  --px-vis-series-color-117: #736d00;
  --px-vis-series-color-118: #3d3d3d;
  --px-vis-series-color-119: #604e1a;
  --px-vis-series-color-120: #4da4d5;
  --px-vis-series-color-121: #c47a14;
  --px-vis-series-color-122: #679f00;
  --px-vis-series-color-123: #8c65cb;
  --px-vis-series-color-124: #cb8c63;
  --px-vis-series-color-125: #526fda;
  --px-vis-series-color-126: #bb5a9f;
  --px-vis-series-color-127: #3e796f;
  --px-vis-series-color-128: #bc385e;
  --px-vis-series-color-129: #557e36;
  --px-vis-series-color-130: #be4748;
  --px-vis-series-color-131: #3e7091;
  --px-vis-series-color-132: #b4ab00;
  --px-vis-series-color-133: #666666;
  --px-vis-series-color-134: #977b27;
  --px-vis-series-color-135: #245069;
  --px-vis-series-color-136: #613c0d;
  --px-vis-series-color-137: #325000;
  --px-vis-series-color-138: #463266;
  --px-vis-series-color-139: #654632;
  --px-vis-series-color-140: #2b3a72;
  --px-vis-series-color-141: #602e52;
  --px-vis-series-color-142: #152825;
  --px-vis-series-color-143: #5f1830;
  --px-vis-series-color-144: #2a401b;
  --px-vis-series-color-145: #612325;
  --px-vis-series-color-146: #1e3747;
  --px-vis-series-color-147: #595502;
  --px-vis-series-color-148: #292929;
  --px-vis-series-color-149: #4c3e14;
  --px-gauge-fill-error-color: #f34336;
  --px-gauge-fill-anomaly-color: #fec600;
  --px-gauge-fill-abnormal-color: #ff8b3a;
  --px-gauge-fill-normal-color: #1479c9;
  --px-gauge-empty-color: #2c404c;
  --px-gauge-needle-color: #4f6472;
}



html {
  font-family: "GE Inspira Sans", sans-serif;
  font-size: 15px;
  background-color: var(--px-base-background-color);
}



`;
