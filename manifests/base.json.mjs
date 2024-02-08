export const render = ({ version, edition }) => {
  let localizedSuffix;
  switch (edition) {
    case 'main':
      localizedSuffix = '';
      break;
    case 'test':
      localizedSuffix = ` __MSG_FOR_TESTING__`;
      break;
    default:
      throw new TypeError(`Edition type ${edition} is unknown.`);
  }
  return {
    "manifest_version": 3,

    "name": `__MSG_extName__${localizedSuffix}`,
    "default_locale": "ru",
    "description": "__MSG_extDesc__",
    "version": `${version}`,
    "icons": {
      "128": "/icons/default-128.png"
    },
    "author": "anticensority+owners@googlegroups.com",
    "permissions": [
        "proxy"
      , "alarms"
      , "storage"
      , "unlimitedStorage"
      , "tabs"
      , "contextMenus"
      , "notifications"
    ],
      
    "action": {
      "default_title":
        `__MSG_ThisSiteIsntProxied__ | __MSG_Version__: ${version + localizedSuffix}`,
      "default_popup": "/src/pages/options/index.html"
    },
    "options_ui": {
      "page": "/src/pages/options/index.html"
    }
  };
};