(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./node_modules/react-icons/lib/cjs/iconBase.js":function(module,exports,__webpack_require__){"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=this&&this.__rest||function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};Object.defineProperty(exports,"__esModule",{value:!0}),exports.IconBase=exports.GenIcon=void 0;var React=__webpack_require__("./node_modules/react/index.js"),iconContext_1=__webpack_require__("./node_modules/react-icons/lib/cjs/iconContext.js");function Tree2Element(tree){return tree&&tree.map((function(node,i){return React.createElement(node.tag,__assign({key:i},node.attr),Tree2Element(node.child))}))}function IconBase(props){var elem=function(conf){var className,attr=props.attr,size=props.size,title=props.title,svgProps=__rest(props,["attr","size","title"]),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),React.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className:className,style:__assign(__assign({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&React.createElement("title",null,title),props.children)};return void 0!==iconContext_1.IconContext?React.createElement(iconContext_1.IconContext.Consumer,null,(function(conf){return elem(conf)})):elem(iconContext_1.DefaultContext)}exports.GenIcon=function GenIcon(data){return function(props){return React.createElement(IconBase,__assign({attr:__assign({},data.attr)},props),Tree2Element(data.child))}},exports.IconBase=IconBase},"./node_modules/react-icons/lib/cjs/iconContext.js":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.IconContext=exports.DefaultContext=void 0;var React=__webpack_require__("./node_modules/react/index.js");exports.DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},exports.IconContext=React.createContext&&React.createContext(exports.DefaultContext)},"./node_modules/react-icons/lib/cjs/iconsManifest.js":function(module,exports){module.exports.IconsManifest=[{id:"ci",name:"Circum Icons",projectUrl:"https://circumicons.com/",license:"MPL-2.0 license",licenseUrl:"https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE"},{id:"fa",name:"Font Awesome 5",projectUrl:"https://fontawesome.com/",license:"CC BY 4.0 License",licenseUrl:"https://creativecommons.org/licenses/by/4.0/"},{id:"io",name:"Ionicons 4",projectUrl:"https://ionicons.com/",license:"MIT",licenseUrl:"https://github.com/ionic-team/ionicons/blob/master/LICENSE"},{id:"io5",name:"Ionicons 5",projectUrl:"https://ionicons.com/",license:"MIT",licenseUrl:"https://github.com/ionic-team/ionicons/blob/master/LICENSE"},{id:"md",name:"Material Design icons",projectUrl:"http://google.github.io/material-design-icons/",license:"Apache License Version 2.0",licenseUrl:"https://github.com/google/material-design-icons/blob/master/LICENSE"},{id:"ti",name:"Typicons",projectUrl:"http://s-ings.com/typicons/",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/"},{id:"go",name:"Github Octicons icons",projectUrl:"https://octicons.github.com/",license:"MIT",licenseUrl:"https://github.com/primer/octicons/blob/master/LICENSE"},{id:"fi",name:"Feather",projectUrl:"https://feathericons.com/",license:"MIT",licenseUrl:"https://github.com/feathericons/feather/blob/master/LICENSE"},{id:"gi",name:"Game Icons",projectUrl:"https://game-icons.net/",license:"CC BY 3.0",licenseUrl:"https://creativecommons.org/licenses/by/3.0/"},{id:"wi",name:"Weather Icons",projectUrl:"https://erikflowers.github.io/weather-icons/",license:"SIL OFL 1.1",licenseUrl:"http://scripts.sil.org/OFL"},{id:"di",name:"Devicons",projectUrl:"https://vorillaz.github.io/devicons/",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"ai",name:"Ant Design Icons",projectUrl:"https://github.com/ant-design/ant-design-icons",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"bs",name:"Bootstrap Icons",projectUrl:"https://github.com/twbs/icons",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"ri",name:"Remix Icon",projectUrl:"https://github.com/Remix-Design/RemixIcon",license:"Apache License Version 2.0",licenseUrl:"http://www.apache.org/licenses/"},{id:"fc",name:"Flat Color Icons",projectUrl:"https://github.com/icons8/flat-color-icons",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"gr",name:"Grommet-Icons",projectUrl:"https://github.com/grommet/grommet-icons",license:"Apache License Version 2.0",licenseUrl:"http://www.apache.org/licenses/"},{id:"hi",name:"Heroicons",projectUrl:"https://github.com/tailwindlabs/heroicons",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"hi2",name:"Heroicons 2",projectUrl:"https://github.com/tailwindlabs/heroicons",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"si",name:"Simple Icons",projectUrl:"https://simpleicons.org/",license:"CC0 1.0 Universal",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/"},{id:"sl",name:"Simple Line Icons",projectUrl:"https://thesabbir.github.io/simple-line-icons/",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"im",name:"IcoMoon Free",projectUrl:"https://github.com/Keyamoon/IcoMoon-Free",license:"CC BY 4.0 License",licenseUrl:"https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt"},{id:"bi",name:"BoxIcons",projectUrl:"https://github.com/atisawd/boxicons",license:"CC BY 4.0 License",licenseUrl:"https://github.com/atisawd/boxicons/blob/master/LICENSE"},{id:"cg",name:"css.gg",projectUrl:"https://github.com/astrit/css.gg",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"vsc",name:"VS Code Icons",projectUrl:"https://github.com/microsoft/vscode-codicons",license:"CC BY 4.0",licenseUrl:"https://creativecommons.org/licenses/by/4.0/"},{id:"tb",name:"Tabler Icons",projectUrl:"https://github.com/tabler/tabler-icons",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"tfi",name:"Themify Icons",projectUrl:"https://github.com/lykmapipo/themify-icons",license:"MIT",licenseUrl:"https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE"},{id:"rx",name:"Radix Icons",projectUrl:"https://icons.radix-ui.com",license:"MIT",licenseUrl:"https://github.com/radix-ui/icons/blob/master/LICENSE"}]},"./node_modules/react-icons/lib/cjs/index.js":function(module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),__exportStar(__webpack_require__("./node_modules/react-icons/lib/cjs/iconsManifest.js"),exports),__exportStar(__webpack_require__("./node_modules/react-icons/lib/cjs/iconBase.js"),exports),__exportStar(__webpack_require__("./node_modules/react-icons/lib/cjs/iconContext.js"),exports)}}]);