import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, CodeSpecimen, ReactSpecimen } from 'catalog';
import px from '../src';

// TODO: extract
import IronComponents from '../src/components/iron';
// import ironComponentsDocs from '../src/components/iron/README.md';
import pxAppHeaderDocs from '../src/components/px/AppHeader/README.md';
import pxAppNavDocs from '../src/components/px/AppNav/README.md';
import pxAccordionDocs from '../src/components/px/Accordion/README.md';
import pxAlertLabelDocs from '../src/components/px/AlertLabel/README.md';
import pxAlertMessageDocs from '../src/components/px/AlertMessage/README.md';
import pxButtonDocs from '../src/components/px/Button/README.md';
import pxBreadcrumbsDocs from '../src/components/px/Breadcrumbs/README.md';
import pxBrandingBarDocs from '../src/components/px/BrandingBar/README.md';
import pxCardDocs from '../src/components/px/Card/README.md';
import pxChipDocs from '../src/components/px/Chip/README.md';
import pxInputDocs from '../src/components/px/Input/README.md';
import pxIconSetDocs from '../src/components/px/IconSet/README.md';
import pxToggleInputDocs from '../src/components/px/Toggle/README.md';
import pxDropDownDocs from '../src/components/px/Dropdown/README.md';
import pxGridDocs from '../src/components/px/Grid/README.md';
import pxModalDocs from '../src/components/px/Modal/README.md';
import pxNavbarDocs from '../src/components/px/Navbar/README.md';
import pxNotificationDocs from '../src/components/px/Notification/README.md';
import pxSpinnerDocs from '../src/components/px/Spinner/README.md';
import pxTableViewDocs from '../src/components/px/TableView/README.md';
import pxTabsDocs from '../src/components/px/Tabs/README.md';
import pxProgressbarDocs from '../src/components/px/ProgressBar/README.md';
import pxPopoverDocs from '../src/components/px/Popover/README.md';
import pxOverlayDocs from '../src/components/px/Overlay/README.md';
import pxTreeDocs from '../src/components/px/Tree/README.md';
import pxKeyValuePairDocs from '../src/components/px/KeyValuePair/README.md';
import pxViewHeaderDocs from '../src/components/px/ViewHeader/README.md';
import pxPanelDocs from '../src/components/px/Panel/README.md';

// import pxDrawerDocs from '../src/components/px/Drawer/README.md';
// import pxLayoutDocs from '../src/components/px/Layout/README.md';
// import pxTileDocs from '../src/components/px/Tile/README.md';
/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
const NAME = require('../package.json').name;
// const USER = require('../package.json').user;
const VERSION = require('../package.json').version;
// const logo = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/49212/predix_ds_logo.webp';

// Add your documentation imports here. These are available to
// React specimen. Do NOT pass React here as Catalog does that.
const documentationImports = {
  IronComponents,
  px,
  PxReact: px
};


const title = `${NAME} v${VERSION}`; // eslint-disable-line no-undef

const pages = [
  {
    path: '/',
    title: 'Introduction',
    component: require('../README.md')
  },
  /*
  {
    path: '/getting-started',
    title: 'Getting Started',
    pages: [
      {path: 'installation', title: 'Installation', component: require('./installation.md')}
     // {path: 'customization', title: 'Customization', component: require('./customization.md')},
    //  {path: 'tutorial', title: 'Turorial', component: require('./tutorial.md')},
   //   {path: 'example', title: 'Example', component: require('./example.md')}
    ]
  },

  {
    path: '/layout',
    title: 'Layout',
    responsiveSizes: responsiveSizes,
    pages: [
      {path: 'basics', title: 'Basics', component: require('./layout-basics.md')},
      {
        path: 'layout-grid',
        title: 'Grid',
        responsiveSizes: responsiveSizes,
        component: require('./layout-grid.md')}
    ]
  }, */
  {
    title: 'Component Demos',
    pages: [
      { path: 'Accordion', title: 'Accordion', component: pxAccordionDocs },
      { path: 'AlertLabel', title: 'Alert Label', component: pxAlertLabelDocs },
      { path: 'AlertMessage', title: 'Alert Message', component: pxAlertMessageDocs },
      { path: 'AppHeader', title: 'App Header', component: pxAppHeaderDocs },
      { path: 'AppNav', title: 'App Nav', component: pxAppNavDocs },
      //  { path: 'ActionSheet', title: 'Action Sheet', component: pxActionSheetDocs},
      { path: 'Button', title: 'Button', component: pxButtonDocs },
      { path: 'BrandingBar', title: 'Branding Bar', component: pxBrandingBarDocs },
      { path: 'Breadcrumbs', title: 'Breadcrumbs', component: pxBreadcrumbsDocs },
      { path: 'Card', title: 'Card', component: pxCardDocs },
      { path: 'Chip', title: 'Chip', component: pxChipDocs },
      // { path: 'Drawer', title: 'Drawer', component: pxDrawerDocs },
      //  { path: 'DataTable', title: 'DataTable', component: pxDatatableDocs },
      { path: 'Dropdown', title: 'Dropdown', component: pxDropDownDocs },
      { path: 'Grid', title: 'Grid', component: pxGridDocs },
      { path: 'Icons', title: 'Icons', component: pxIconSetDocs },
      { path: 'Input', title: 'Input', component: pxInputDocs },
      { path: 'KeyValuePair', title: 'Key-Value Pair', component: pxKeyValuePairDocs },
      //   { path: 'Layout', title: 'Layout', component: pxLayoutDocs },
      { path: 'Navbar', title: 'Navbar', component: pxNavbarDocs },
      { path: 'Notification', title: 'Notification', component: pxNotificationDocs },
      { path: 'Modal', title: 'Modal', component: pxModalDocs },
      { path: 'Overlay', title: 'Overlay', component: pxOverlayDocs },
      { path: 'Panel', title: 'Panel', component: pxPanelDocs },
      { path: 'Popover', title: 'Popover', component: pxPopoverDocs },
      { path: 'ProgressBar', title: 'Progress Bar', component: pxProgressbarDocs },
      { path: 'Spinner', title: 'Spinner', component: pxSpinnerDocs },

      { path: 'Tabs', title: 'Tabs', component: pxTabsDocs },
      // { path: 'Tile', title: 'Tile', component: pxTileDocs },
      { path: 'Tree', title: 'Tree', component: pxTreeDocs },
      { path: 'Toggle', title: 'Toggle', component: pxToggleInputDocs },
      { path: 'TableView', title: 'Table View', component: pxTableViewDocs },
      { path: 'ViewHeader', title: 'View Header', component: pxViewHeaderDocs }
    ]
  }
];

// Catalog - logoSrc="../images/logo.png"
const themeOptions = {
  fontFamily: 'GE Inspira Sans',
  // lightColor: 'green',
  background: '#e8ecf0',
  textColor: '#111',
  linkColor: '#097691',

  // Heading
  pageHeadingBackground: '#fff',
  pageHeadingTextColor: '#111',
  // pageHeadingHeight: '50px',

  // Sidebar
  sidebarColor: '#1a252d',
  sidebarColorHeading: '#fff',
  sidebarColorLine: '#7d8f9b',
  sidebarColorText: '#7d8f9b',
  sidebarColorActive: '#097691',
  sidebarColorTextActive: '#097691'
};
ReactDOM.render(
  <div>

    <Catalog
      theme={themeOptions}
      // logoSrc={logo}
      imports={documentationImports}
      pages={pages}
      specimens={{
        javascript: props => <CodeSpecimen {...props} lang="javascript" />,
        js: props => <CodeSpecimen {...props} lang="javascript" />,
        jsx: props => <ReactSpecimen {...props} />
      }}
      title={title}
    />
  </div>,
  document.getElementById('catalog')
);
