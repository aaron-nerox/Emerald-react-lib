import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*\n! tailwindcss v3.0.23 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\r\n.pointer-events-none {\n  pointer-events: none;\n}\r\n.visible {\n  visibility: visible;\n}\r\n.fixed {\n  position: fixed;\n}\r\n.absolute {\n  position: absolute;\n}\r\n.relative {\n  position: relative;\n}\r\n.top-0 {\n  top: 0px;\n}\r\n.right-0 {\n  right: 0px;\n}\r\n.left-0 {\n  left: 0px;\n}\r\n.bottom-0 {\n  bottom: 0px;\n}\r\n.right-3 {\n  right: 0.75rem;\n}\r\n.top-\\[100\\%\\] {\n  top: 100%;\n}\r\n.bottom-\\[100\\%\\] {\n  bottom: 100%;\n}\r\n.right-\\[100\\%\\] {\n  right: 100%;\n}\r\n.left-\\[100\\%\\] {\n  left: 100%;\n}\r\n.right-1 {\n  right: 0.25rem;\n}\r\n.z-10 {\n  z-index: 10;\n}\r\n.m-1 {\n  margin: 0.25rem;\n}\r\n.m-3 {\n  margin: 0.75rem;\n}\r\n.m-2 {\n  margin: 0.5rem;\n}\r\n.m-auto {\n  margin: auto;\n}\r\n.\\!m-0 {\n  margin: 0px !important;\n}\r\n.my-2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\r\n.mx-3 {\n  margin-left: 0.75rem;\n  margin-right: 0.75rem;\n}\r\n.mx-2 {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\r\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\r\n.my-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\r\n.mr-3 {\n  margin-right: 0.75rem;\n}\r\n.mr-2 {\n  margin-right: 0.5rem;\n}\r\n.ml-1 {\n  margin-left: 0.25rem;\n}\r\n.mb-5 {\n  margin-bottom: 1.25rem;\n}\r\n.ml-\\[22\\%\\] {\n  margin-left: 22%;\n}\r\n.ml-\\[0\\%\\] {\n  margin-left: 0%;\n}\r\n.mt-\\[50px\\] {\n  margin-top: 50px;\n}\r\n.inline-flex {\n  display: inline-flex;\n}\r\n.grid {\n  display: grid;\n}\r\n.hidden {\n  display: none;\n}\r\n.\\!hidden {\n  display: none !important;\n}\r\n.aspect-square {\n  aspect-ratio: 1 / 1;\n}\r\n.h-fit {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\r\n.h-\\[15px\\] {\n  height: 15px;\n}\r\n.h-\\[20px\\] {\n  height: 20px;\n}\r\n.h-5 {\n  height: 1.25rem;\n}\r\n.h-7 {\n  height: 1.75rem;\n}\r\n.h-\\[1\\.5px\\] {\n  height: 1.5px;\n}\r\n.h-screen {\n  height: 100vh;\n}\r\n.h-full {\n  height: 100%;\n}\r\n.h-1\\/6 {\n  height: 16.666667%;\n}\r\n.h-\\[25px\\] {\n  height: 25px;\n}\r\n.h-\\[50px\\] {\n  height: 50px;\n}\r\n.h-\\[32px\\] {\n  height: 32px;\n}\r\n.h-\\[22px\\] {\n  height: 22px;\n}\r\n.h-\\[42px\\] {\n  height: 42px;\n}\r\n.h-\\[64px\\] {\n  height: 64px;\n}\r\n.h-11 {\n  height: 2.75rem;\n}\r\n.h-\\[100px\\] {\n  height: 100px;\n}\r\n.h-\\[300px\\] {\n  height: 300px;\n}\r\n.max-h-screen {\n  max-height: 100vh;\n}\r\n.min-h-\\[150px\\] {\n  min-height: 150px;\n}\r\n.w-fit {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\r\n.w-\\[15px\\] {\n  width: 15px;\n}\r\n.w-\\[20px\\] {\n  width: 20px;\n}\r\n.w-5 {\n  width: 1.25rem;\n}\r\n.w-7 {\n  width: 1.75rem;\n}\r\n.w-\\[1\\.5px\\] {\n  width: 1.5px;\n}\r\n.w-full {\n  width: 100%;\n}\r\n.w-1\\/6 {\n  width: 16.666667%;\n}\r\n.w-\\[25px\\] {\n  width: 25px;\n}\r\n.w-\\[22\\%\\] {\n  width: 22%;\n}\r\n.\\!w-fit {\n  width: -webkit-fit-content !important;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n}\r\n.w-\\[54px\\] {\n  width: 54px;\n}\r\n.w-\\[22px\\] {\n  width: 22px;\n}\r\n.w-max {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\r\n.w-auto {\n  width: auto;\n}\r\n.w-\\[100px\\] {\n  width: 100px;\n}\r\n.w-2 {\n  width: 0.5rem;\n}\r\n.w-\\[300px\\] {\n  width: 300px;\n}\r\n.min-w-\\[20px\\] {\n  min-width: 20px;\n}\r\n.min-w-\\[40px\\] {\n  min-width: 40px;\n}\r\n.max-w-\\[33px\\] {\n  max-width: 33px;\n}\r\n.cursor-pointer {\n  cursor: pointer;\n}\r\n.select-none {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\r\n.appearance-none {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\r\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\r\n.grid-rows-1 {\n  grid-template-rows: repeat(1, minmax(0, 1fr));\n}\r\n.flex-row {\n  flex-direction: row;\n}\r\n.flex-col {\n  flex-direction: column;\n}\r\n.place-content-center {\n  place-content: center;\n}\r\n.place-items-center {\n  place-items: center;\n}\r\n.content-center {\n  align-content: center;\n}\r\n.items-start {\n  align-items: flex-start;\n}\r\n.items-end {\n  align-items: flex-end;\n}\r\n.items-center {\n  align-items: center;\n}\r\n.justify-items-start {\n  justify-items: start;\n}\r\n.justify-items-end {\n  justify-items: end;\n}\r\n.justify-items-center {\n  justify-items: center;\n}\r\n.overflow-hidden {\n  overflow: hidden;\n}\r\n.overflow-clip {\n  overflow: clip;\n}\r\n.overflow-y-auto {\n  overflow-y: auto;\n}\r\n.overflow-x-hidden {\n  overflow-x: hidden;\n}\r\n.overflow-y-hidden {\n  overflow-y: hidden;\n}\r\n.overflow-x-scroll {\n  overflow-x: scroll;\n}\r\n.overflow-y-scroll {\n  overflow-y: scroll;\n}\r\n.text-ellipsis {\n  text-overflow: ellipsis;\n}\r\n.rounded-full {\n  border-radius: 1000px;\n}\r\n.rounded-lg {\n  border-radius: 15px;\n}\r\n.rounded-md {\n  border-radius: 10px;\n}\r\n.rounded-xl {\n  border-radius: 20px;\n}\r\n.rounded-sm {\n  border-radius: 8px;\n}\r\n.rounded-tn {\n  border-radius: 6px;\n}\r\n.rounded {\n  border-radius: 0.25rem;\n}\r\n.rounded-b-lg {\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n}\r\n.border-\\[2px\\] {\n  border-width: 2px;\n}\r\n.border-emerald-primary {\n  --tw-border-opacity: 1;\n  border-color: rgb(2 225 206 / var(--tw-border-opacity));\n}\r\n.bg-emerald-primary {\n  --tw-bg-opacity: 1;\n  background-color: rgb(2 225 206 / var(--tw-bg-opacity));\n}\r\n.bg-emerald-primary-surface {\n  --tw-bg-opacity: 1;\n  background-color: rgb(221 255 252 / var(--tw-bg-opacity));\n}\r\n.bg-emerald-primary-screen {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 254 254 / var(--tw-bg-opacity));\n}\r\n.bg-emerald-disabled {\n  --tw-bg-opacity: 1;\n  background-color: rgb(217 217 217 / var(--tw-bg-opacity));\n}\r\n.bg-emerald-disabled\\/20 {\n  background-color: rgb(217 217 217 / 0.2);\n}\r\n.bg-emerald-primary\\/60 {\n  background-color: rgb(2 225 206 / 0.6);\n}\r\n.bg-emerald-primary-accent {\n  --tw-bg-opacity: 1;\n  background-color: rgb(131 255 244 / var(--tw-bg-opacity));\n}\r\n.bg-emerald-disabled-dark {\n  --tw-bg-opacity: 1;\n  background-color: rgb(140 140 140 / var(--tw-bg-opacity));\n}\r\n.bg-emerald-transparent {\n  background-color: #00000000;\n}\r\n.bg-emerald-primary-accent\\/50 {\n  background-color: rgb(131 255 244 / 0.5);\n}\r\n.bg-emerald-primary-text\\/90 {\n  background-color: rgb(34 34 34 / 0.9);\n}\r\n.\\!bg-emerald-primary-surface {\n  --tw-bg-opacity: 1 !important;\n  background-color: rgb(221 255 252 / var(--tw-bg-opacity)) !important;\n}\r\n.\\!bg-emerald-primary {\n  --tw-bg-opacity: 1 !important;\n  background-color: rgb(2 225 206 / var(--tw-bg-opacity)) !important;\n}\r\n.stroke-emerald-primary-screen {\n  stroke: #FEFEFE;\n}\r\n.stroke-emerald-disabled {\n  stroke: #D9D9D9;\n}\r\n.stroke-emerald-primary {\n  stroke: #02E1CE;\n}\r\n.stroke-emerald-disabled-dark {\n  stroke: #8C8C8C;\n}\r\n.stroke-emerald-primary-surface {\n  stroke: #DDFFFC;\n}\r\n.stroke-emerald-primary-surface-black {\n  stroke: #222222;\n}\r\n.object-cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\r\n.p-4 {\n  padding: 1rem;\n}\r\n.p-1 {\n  padding: 0.25rem;\n}\r\n.p-2 {\n  padding: 0.5rem;\n}\r\n.p-\\[2px\\] {\n  padding: 2px;\n}\r\n.p-3 {\n  padding: 0.75rem;\n}\r\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\r\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\r\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\r\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\r\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\r\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\r\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\r\n.pl-3 {\n  padding-left: 0.75rem;\n}\r\n.pr-1 {\n  padding-right: 0.25rem;\n}\r\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\r\n.font-semibold {\n  font-weight: 600;\n}\r\n.text-emerald-primary-screen {\n  --tw-text-opacity: 1;\n  color: rgb(254 254 254 / var(--tw-text-opacity));\n}\r\n.text-emerald-primary {\n  --tw-text-opacity: 1;\n  color: rgb(2 225 206 / var(--tw-text-opacity));\n}\r\n.opacity-0 {\n  opacity: 0;\n}\r\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\r\n.outline {\n  outline-style: solid;\n}\r\n.outline-emerald-disabled-dark {\n  outline-color: #8C8C8C;\n}\r\n.outline-emerald-primary {\n  outline-color: #02E1CE;\n}\r\n.outline-emerald-disabled {\n  outline-color: #D9D9D9;\n}\r\n.drop-shadow-lg {\n  --tw-drop-shadow: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\r\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.line-clamp-1 {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n}\r\n.checked\\:bg-emerald-primary:checked {\n  --tw-bg-opacity: 1;\n  background-color: rgb(2 225 206 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-emerald-primary-dark:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 188 172 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-emerald-primary-surface:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(221 255 252 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-emerald-primary:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(2 225 206 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-emerald-primary-screen:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 254 254 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-emerald-primary\\/30:hover {\n  background-color: rgb(2 225 206 / 0.3);\n}\r\n.hover\\:text-emerald-primary-dark:hover {\n  --tw-text-opacity: 1;\n  color: rgb(0 188 172 / var(--tw-text-opacity));\n}\r\n.disabled\\:border-emerald-disabled-dark:disabled {\n  --tw-border-opacity: 1;\n  border-color: rgb(140 140 140 / var(--tw-border-opacity));\n}\r\n.disabled\\:bg-emerald-disabled:disabled {\n  --tw-bg-opacity: 1;\n  background-color: rgb(217 217 217 / var(--tw-bg-opacity));\n}\r\n.disabled\\:bg-emerald-disabled-dark:disabled {\n  --tw-bg-opacity: 1;\n  background-color: rgb(140 140 140 / var(--tw-bg-opacity));\n}\r\n.disabled\\:text-emerald-disabled-dark:disabled {\n  --tw-text-opacity: 1;\n  color: rgb(140 140 140 / var(--tw-text-opacity));\n}\r\n.disabled\\:text-emerald-disabled:disabled {\n  --tw-text-opacity: 1;\n  color: rgb(217 217 217 / var(--tw-text-opacity));\n}\r\n.disabled\\:placeholder\\:text-emerald-disabled-dark:disabled::-moz-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(140 140 140 / var(--tw-text-opacity));\n}\r\n.disabled\\:placeholder\\:text-emerald-disabled-dark:disabled:-ms-input-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(140 140 140 / var(--tw-text-opacity));\n}\r\n.disabled\\:placeholder\\:text-emerald-disabled-dark:disabled::placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(140 140 140 / var(--tw-text-opacity));\n}\r\n@media (min-width: 640px) {\n\n  .sm\\:flex-row {\n    flex-direction: row;\n  }\n}";
styleInject(css_248z);

const buttonStyle = `inline-flex flex-row items-center 
            bg-emerald-primary hover:bg-emerald-primary-dark disabled:bg-emerald-disabled 
            disabled:text-emerald-disabled-dark text-emerald-primary-screen 
            rounded-lg transition-all font-semibold`;
/**
 * 
 * @param {isDisabled, onClick, children, emeraldStyle} props 
 * @returns a normal button component that can contain a combination of text and icon
 */

const Button = props => {
  const isDisabled = props.isDisabled;

  const handleOnClick = () => {
    if (!isDisabled) {
      props.onClick();
    }
  };

  return /*#__PURE__*/jsx("button", {
    disabled: isDisabled,
    className: `${props.emeraldStyle} m-3 py-3 px-5 ${buttonStyle}`,
    onClick: () => handleOnClick(),
    children: props.children
  });
};
/**
 * 
 * @param {isDisabled, icon, onClick, emeraldStyle} props 
 * @returns an icon button as a perfect square
 */

const IconifiedButton = props => {
  function handleOnClick() {
    if (!props.isDisabled) {
      props.onClick();
    }
  }

  return /*#__PURE__*/jsx("button", {
    className: `${props.emeraldStyle} m-3 p-4 ${buttonStyle}`,
    disabled: props.isDisabled,
    onClick: handleOnClick,
    children: /*#__PURE__*/jsx(ButtonIcon, {
      icon: props.icon
    })
  });
};
/**
 * 
 * @param {isDisabled, text, emeraldStyle} props 
 * @returns 
 */

const TextButton = props => {
  function handleOnClick() {
    if (!props.isDisabled) {
      props.onClick();
    }
  }

  return /*#__PURE__*/jsx("button", {
    disabled: props.isDisabled,
    className: `${props.emeraldStyle} m-3 py-3 px-5 
            text-emerald-primary hover:bg-emerald-primary-surface
            rounded-lg hover:text-emerald-primary-dark disabled:text-emerald-disabled 
            transition-all font-semibold`,
    onClick: handleOnClick,
    children: props.text
  });
};
/**
 * 
 * @param {icon} props 
 * @returns an icon with specified height
 */

const ButtonIcon = props => {
  const icon = props.icon;
  return /*#__PURE__*/jsx("img", {
    src: icon,
    alt: "icon",
    className: "h-[20px]"
  });
};

/**
 * 
 * @param {emeraldStyle, checked, disabled, name, value, onCheckChange} props 
 * @returns 
 */
const RoundCheckBox = props => {
  const style = props.emeraldStyle;
  let tic;

  if (props.checked) {
    let stroke;

    if (!props.disabled) {
      stroke = "stroke-emerald-primary-screen";
    } else {
      stroke = "stroke-emerald-disabled";
    }

    tic = /*#__PURE__*/jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: `absolute h-5 w-5 pointer-events-none ${stroke}`,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      children: /*#__PURE__*/jsx("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M5 13l4 4L19 7"
      })
    });
  } else {
    tic = /*#__PURE__*/jsx("div", {});
  }

  return /*#__PURE__*/jsxs("div", {
    className: "w-fit h-fit grid grid-cols-1 grid-rows-1 place-items-center place-content-center relative",
    children: [/*#__PURE__*/jsx("input", {
      type: "checkbox",
      name: props.name,
      value: props.value,
      checked: props.checked,
      onChange: props.onCheckChange,
      disabled: props.disabled,
      className: `h-7 w-7 m-2 rounded-full appearance-none
            border-[2px] border-emerald-primary bg-emerald-primary-surface 
            checked:bg-emerald-primary disabled:bg-emerald-disabled-dark disabled:border-emerald-disabled-dark 
            transition-all ${style}`
    }), tic]
  });
};
/**
 * 
 * @param {emeraldStyle, ticColor, checked, disabled, name, value, onCheckChange} props 
 * @returns 
 */

const RoundLineCheckBox = props => {
  const style = props.emeraldStyle;
  let tic;

  if (props.checked) {
    let stroke;

    if (!props.disabled) {
      stroke = props.ticColor !== '' ? props.ticColor : "stroke-emerald-primary";
    } else {
      stroke = "stroke-emerald-disabled-dark";
    }

    tic = /*#__PURE__*/jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: `absolute h-5 w-5 pointer-events-none ${stroke}`,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: props.ticColor !== '' ? props.ticColor : "currentColor",
      children: /*#__PURE__*/jsx("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M5 13l4 4L19 7"
      })
    });
  } else {
    tic = /*#__PURE__*/jsx("div", {});
  }

  return /*#__PURE__*/jsxs("div", {
    className: "w-fit h-fit grid grid-cols-1 grid-rows-1 place-items-center place-content-center relative",
    children: [/*#__PURE__*/jsx("input", {
      type: "checkbox",
      name: props.name,
      value: props.value,
      checked: props.checked,
      onChange: props.onCheckChange,
      disabled: props.disabled,
      className: `h-7 w-7 m-2 rounded-full appearance-none
            border-[2px] border-emerald-primary disabled:bg-emerald-disabled
            disabled:border-emerald-disabled-dark 
            transition-all ${style}`
    }), tic]
  });
};
/**
 * 
 * @param {emeraldStyle, checked, disabled, name, value, onCheckChange} props 
 * @returns 
 */

const SquareCheckBox = props => {
  const style = props.emeraldStyle;
  let tic;

  if (props.checked) {
    let stroke;

    if (!props.disabled) {
      stroke = "stroke-emerald-primary-surface";
    } else {
      stroke = "stroke-emerald-disabled";
    }

    tic = /*#__PURE__*/jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: `absolute h-5 w-5 pointer-events-none ${stroke}`,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      children: /*#__PURE__*/jsx("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M5 13l4 4L19 7"
      })
    });
  } else {
    tic = /*#__PURE__*/jsx("div", {});
  }

  return /*#__PURE__*/jsxs("div", {
    className: "w-fit h-fit grid grid-cols-1 grid-rows-1 place-items-center place-content-center relative ",
    children: [/*#__PURE__*/jsx("input", {
      type: "checkbox",
      name: props.name,
      value: props.value,
      checked: props.checked,
      onChange: props.onCheckChange,
      disabled: props.disabled,
      className: `h-7 w-7 m-2 rounded-md appearance-none
            border-[2px] border-emerald-primary bg-emerald-primary-screen 
            checked:bg-emerald-primary disabled:bg-emerald-disabled-dark 
            disabled:border-emerald-disabled-dark transition-all ${style}`
    }), tic]
  });
};
/**
 * 
 * @param {emeraldStyle, ticColor, name, value, checked, disabled, onCheckChange} props 
 * @returns 
 */

const SquareLineCheckBox = props => {
  const style = props.emeraldStyle;
  let tic;

  if (props.checked) {
    let stroke;

    if (!props.disabled) {
      stroke = props.ticColor !== '' ? props.ticColor : "stroke-emerald-primary";
    } else {
      stroke = "stroke-emerald-disabled-dark";
    }

    tic = /*#__PURE__*/jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: `absolute h-5 w-5 pointer-events-none ${stroke}`,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: props.ticColor !== '' ? props.ticColor : "currentColor",
      children: /*#__PURE__*/jsx("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M5 13l4 4L19 7"
      })
    });
  } else {
    tic = /*#__PURE__*/jsx("div", {});
  }

  return /*#__PURE__*/jsxs("div", {
    className: "w-fit h-fit grid grid-cols-1 grid-rows-1 \r place-items-center place-content-center relative ",
    children: [/*#__PURE__*/jsx("input", {
      type: "checkbox",
      name: props.name,
      value: props.value,
      checked: props.checked,
      onChange: props.onCheckChange,
      disabled: props.disabled,
      className: `h-7 w-7 m-2 rounded-md appearance-none
            border-[2px] border-emerald-primary disabled:bg-emerald-disabled
            disabled:border-emerald-disabled-dark transition-all ${style}`
    }), tic]
  });
};

/**
 * 
 * @param {height, width, checked, onCheckChange, src, emeraldStyle, overlayStyle} props 
 * @returns 
 */
const ImageCheckBox = props => {
  const height = props.height;
  const width = props.width;
  let checkOverlay;

  if (!props.checked) {
    checkOverlay = "opacity-0";
  } else {
    checkOverlay = "opacity-1";
  }

  return /*#__PURE__*/jsxs("div", {
    style: {
      height: height,
      width: width
    },
    className: `grid place-content-center 
            place-items-center relative select-none overflow-clip ${props.emeraldStyle}`,
    onClick: props.onCheckChange,
    children: [/*#__PURE__*/jsx("img", {
      style: {
        height: height,
        width: width
      },
      src: props.src,
      alt: "checkImage",
      className: `rounded-xl object-cover`
    }), /*#__PURE__*/jsx("div", {
      className: `h-full w-full bg-emerald-primary/60 rounded-xl absolute ${checkOverlay} transition-all ${props.overlayStyle}`,
      children: /*#__PURE__*/jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: `h-1/6 w-1/6 m-2 pointer-events-none 
                        stroke-emerald-primary-screen absolute bottom-0 left-0`,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/jsx("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d: "M5 13l4 4L19 7"
        })
      })
    })]
  });
};

function EyeIcon() {
  return (new DOMParser().parseFromString("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg fill=\"none\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"m15.58 12c0 1.98-1.6 3.58-3.58 3.58s-3.58-1.6-3.58-3.58 1.6-3.58 3.58-3.58 3.58 1.6 3.58 3.58z\" stroke=\"#292D32\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"/>\n<path d=\"m12 20.27c3.53 0 6.82-2.08 9.11-5.68 0.9-1.41 0.9-3.78 0-5.19-2.29-3.6-5.58-5.68-9.11-5.68-3.53 0-6.82 2.08-9.11 5.68-0.9 1.41-0.9 3.78 0 5.19 2.29 3.6 5.58 5.68 9.11 5.68z\" stroke=\"#292D32\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"/>\n</svg>\n", 'image/svg+xml')).firstChild;
}

function EyeSlashIcon() {
  return (new DOMParser().parseFromString("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg fill=\"none\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"m14.53 9.47-5.06 5.06c-0.65-0.65-1.05-1.54-1.05-2.53 0-1.98 1.6-3.58 3.58-3.58 0.99 0 1.88 0.4 2.53 1.05z\" stroke=\"#292D32\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"/>\n<path d=\"m17.82 5.77c-1.75-1.32-3.75-2.04-5.82-2.04-3.53 0-6.82 2.08-9.11 5.68-0.9 1.41-0.9 3.78 0 5.19 0.79 1.24 1.71 2.31 2.71 3.17\" stroke=\"#292D32\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"/>\n<path d=\"m8.42 19.53c1.14 0.48 2.35 0.74 3.58 0.74 3.53 0 6.82-2.08 9.11-5.68 0.9-1.41 0.9-3.78 0-5.19-0.33-0.52-0.69-1.01-1.06-1.47\" stroke=\"#292D32\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"/>\n<path d=\"m15.51 12.7c-0.26 1.41-1.41 2.56-2.82 2.82\" stroke=\"#292D32\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"/>\n<path d=\"M9.47 14.53L2 22\" stroke=\"#292D32\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"/>\n<path d=\"m22 2-7.47 7.47\" stroke=\"#292D32\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"/>\n</svg>\n", 'image/svg+xml')).firstChild;
}

const Input = props => {
  let icon;
  let bg;

  if (props.icon) {
    icon = /*#__PURE__*/jsx("img", {
      src: props.icon,
      alt: "icon",
      className: "h-[25px] mr-3"
    });
  } else {
    icon = /*#__PURE__*/jsx("div", {});
  }

  if (props.disabled) {
    bg = `bg-emerald-disabled`;
  } else {
    bg = `bg-emerald-primary-screen`;
  }

  return /*#__PURE__*/jsxs("div", {
    className: `h-fit m-3 px-3 py-3 inline-flex flex-row items-center 
        rounded-lg ${bg} ${props.emeraldStyle}`,
    children: [icon, /*#__PURE__*/jsx("input", {
      disabled: props.disabled,
      type: props.type,
      name: props.name,
      value: props.value,
      placeholder: props.placeholder,
      onChange: event => props.onValueChange(event),
      className: "h-full w-full outline-none disabled:bg-emerald-disabled \r disabled:placeholder:text-emerald-disabled-dark rounded-lg"
    })]
  });
};
/**
 * 
 * @param {icon, disabled, emeraldStyle, name, value, onValueChange, placeholder} props 
 * @returns 
 */

const PasswordInput = props => {
  let icon;
  let bg;
  const [eyeIcon, setEyeIcon] = useState(EyeSlashIcon);
  const [isActive, setIsActive] = useState(false);
  const [type, setType] = useState("text");

  if (props.icon) {
    icon = /*#__PURE__*/jsx("img", {
      src: props.icon,
      alt: "icon",
      className: "h-[25px] mr-3"
    });
  } else {
    icon = /*#__PURE__*/jsx("div", {});
  }

  if (props.disabled) {
    bg = `bg-emerald-disabled`;
  } else {
    bg = `bg-emerald-primary-screen`;
  }

  function togglePassword() {
    setIsActive(!isActive);

    if (isActive) {
      setEyeIcon(EyeSlashIcon);
      setType("text");
    } else {
      setEyeIcon(EyeIcon);
      setType("password");
    }
  }

  return /*#__PURE__*/jsxs("div", {
    className: `h-fit px-3 py-3 m-3
        inline-flex flex-row items-center rounded-lg ${bg} ${props.emeraldStyle}`,
    children: [icon, /*#__PURE__*/jsx("input", {
      disabled: props.disabled,
      type: type,
      name: props.name,
      value: props.value,
      placeholder: props.placeholder,
      onChange: event => props.onValueChange(event),
      className: "h-full w-full outline-none disabled:bg-emerald-disabled \r disabled:placeholder:text-emerald-disabled-dark rounded-lg"
    }), /*#__PURE__*/jsx("img", {
      src: eyeIcon,
      alt: "eyeIcon",
      onClick: togglePassword,
      className: "h-[20px] mx-3"
    })]
  });
};
/**
 * 
 * @param {emeraldStyle, disabled, type, name, value, placeholder, onValueChange, 
 * actionIcon, actionStyle, onActionClick} props 
 * @returns 
 */

const ActionInput = props => {
  let bg;

  if (props.disabled) {
    bg = `bg-emerald-disabled`;
  } else {
    bg = `bg-emerald-primary-screen`;
  }

  return /*#__PURE__*/jsxs("div", {
    className: `h-fit pl-3 pr-1 m-3 py-1
        inline-flex flex-row items-center rounded-lg ${bg} ${props.emeraldStyle}`,
    children: [/*#__PURE__*/jsx("input", {
      disabled: props.disabled,
      type: props.type,
      name: props.name,
      value: props.value,
      placeholder: props.placeholder,
      onChange: event => props.onValueChange(event),
      className: "h-full w-full outline-none disabled:bg-emerald-disabled \r disabled:placeholder:text-emerald-disabled-dark rounded-lg"
    }), /*#__PURE__*/jsx("button", {
      disabled: props.disabled,
      className: `min-w-[40px] aspect-square py-2 bg-emerald-primary-accent 
                    hover:bg-emerald-primary disabled:bg-emerald-disabled rounded-lg 
                    transition-all ${props.actionStyle}`,
      children: /*#__PURE__*/jsx("img", {
        src: props.actionIcon,
        alt: "eyeIcon",
        onClick: props.onActionClick,
        className: "h-[25px] m-auto"
      })
    })]
  });
};

/**
 * 
 * @param {navItems, activeItemIndex, activeEmeraldStyle, navColor,} props 
 * @returns 
 */
const SideNav = props => {
  let navItems = props.navItems;
  let activeItemIndex = props.activeItemIndex;
  const localStyle = "bg-emerald-primary-screen text-emerald-primary stroke-emerald-primary";
  let activeItemEmeraldStyle = "";

  if (props.activeEmeraldStyle) {
    activeItemEmeraldStyle = props.activeEmeraldStyle !== '' ? props.activeEmeraldStyle : localStyle;
  } else {
    activeItemEmeraldStyle = localStyle;
  }

  return /*#__PURE__*/jsxs("div", {
    style: {
      backgroundColor: props.navColor
    },
    className: "w-[22%] h-screen max-h-screen overflow-y-auto p-2 bg-emerald-primary-accent/50\r fixed left-0 top-0 inline-flex flex-col items-start",
    children: [/*#__PURE__*/jsx("div", {
      className: "w-full min-h-[150px] h-fit bg-emerald-primary-screen rounded-lg mx-auto \r mb-5 p-3 grid content-center justify-items-center",
      children: props.header
    }), /*#__PURE__*/jsx("ul", {
      className: "w-full mx-auto inline-flex flex-col items-start",
      children: navItems.map((item, index) => {
        return /*#__PURE__*/jsx("li", {
          onClick: () => props.onItemClick(index),
          className: "w-full mx-auto",
          children: /*#__PURE__*/jsxs("div", {
            className: `w-full mx-auto inline-flex flex-row 
                                items-center m-2 py-1 hover:bg-emerald-primary-screen rounded-lg transition-all 
                                ${index === activeItemIndex ? activeItemEmeraldStyle : "stroke-emerald-primary-surface-black"}`,
            children: [/*#__PURE__*/jsx("div", {
              className: "h-7 w-7 m-2",
              children: item.icon
            }), /*#__PURE__*/jsx("p", {
              className: "mr-3 line-clamp-1 text-ellipsis",
              children: item.title
            })]
          })
        }, index);
      })
    })]
  });
};

/**
 * 
 * @param {mainLogo, navItems, onMainLogoClick, onItemClick, itemEmeraldStyle} props 
 * @returns 
 */
const TopNav = props => {
  let mainLogo = props.mainLogo;
  let navItems = props.navItems;
  return /*#__PURE__*/jsxs("div", {
    className: "w-full h-[64px] px-3 rounded-b-lg bg-emerald-primary-screen fixed \r top-0 left-0 right-0 z-10 inline-flex flex-row items-center",
    children: [/*#__PURE__*/jsx("img", {
      src: mainLogo,
      alt: "main logo",
      className: "h-11",
      onClick: props.onMainLogoClick
    }), /*#__PURE__*/jsx("ul", {
      className: "inline-flex flex-row items-center absolute right-1",
      children: navItems.map((item, index) => {
        return /*#__PURE__*/jsx("li", {
          onClick: () => props.onItemClick(index),
          children: /*#__PURE__*/jsxs("div", {
            className: `w-auto inline-flex flex-row items-center m-2
                                hover:bg-emerald-primary/30 rounded-lg transition-all ${props.itemEmeraldStyle}`,
            children: [/*#__PURE__*/jsx("img", {
              src: item.icon,
              alt: "nav icon",
              className: "h-7 m-2"
            }), /*#__PURE__*/jsx("p", {
              className: "mr-3",
              children: item.title
            })]
          })
        }, index);
      })
    })]
  });
};

/**
 * 
 * @param {space, orientation} props 
 * @returns 
 */
const Spacer = props => {
  let space = props.space;
  let orientation = props.orientation;

  if (orientation.toUpperCase() === "VERTICAL") {
    return /*#__PURE__*/jsx("div", {
      style: {
        height: space
      }
    });
  } else {
    return /*#__PURE__*/jsx("div", {
      style: {
        width: space
      }
    });
  }
};

/**
 * 
 * @param {alignment, emeraldStyle, children} props 
 * @returns 
 */
const Column = props => {
  const alignment = props.alignment;
  const style = props.emeraldStyle;
  let cssAlignment;

  if (alignment.toUpperCase() === "START") {
    cssAlignment = "items-start";
  } else if (alignment.toUpperCase() === "END") {
    cssAlignment = "items-end";
  } else {
    cssAlignment = "items-center";
  }

  return /*#__PURE__*/jsx("div", {
    className: `h-fit inline-flex flex-col ${cssAlignment} ${style}`,
    children: props.children
  });
};

/**
 * 
 * @param {alignment, emeraldStyle, children} props 
 * @returns 
 */
const Row = props => {
  const alignment = props.alignment;
  const style = props.emeraldStyle;
  let cssAlignment;

  if (alignment) {
    if (alignment.toUpperCase() === "TOP") {
      cssAlignment = "items-start";
    } else if (alignment.toUpperCase() === "BOTTOM") {
      cssAlignment = "items-end";
    } else {
      cssAlignment = "items-center";
    }
  } else {
    cssAlignment = "items-center";
  }

  return /*#__PURE__*/jsx("div", {
    className: `inline-flex flex-row ${style} ${cssAlignment}`,
    children: props.children
  });
};

/**
 * 
 * @param {disabled, toggled, emeraldColor, onToggle} props 
 * @returns 
 */
const RoundSwitch = props => {
  let toggleBody;
  let toggleTic;
  let color = {};

  if (props.disabled) {
    toggleBody = "bg-emerald-disabled justify-items-start";
    toggleTic = "bg-emerald-disabled-dark";
    color = {};
  } else {
    toggleTic = "bg-emerald-primary-screen";

    if (props.toggled) {
      toggleBody = "justify-items-end bg-emerald-primary";
      color = {
        backgroundColor: props.emeraldColor
      };
    } else {
      toggleBody = "justify-items-start bg-emerald-disabled";
      color = {};
    }
  }

  function handleToggle() {
    if (!props.disabled) {
      props.onToggle();
    }
  }

  return /*#__PURE__*/jsx("div", {
    style: color,
    className: `w-[54px] h-[32px] grid content-center  
                rounded-full cursor-pointer transition-all  ${toggleBody}`,
    onClick: handleToggle,
    children: /*#__PURE__*/jsx("div", {
      className: `w-[22px] h-[22px] m-1 rounded-full 
                 transition-all ${toggleTic}`
    })
  });
};
/**
 * 
 * @param {disabled, toggled, emeraldColor, onToggle} props 
 * @returns 
 */

const SquareSwitch = props => {
  let toggleBody;
  let toggleTic;
  let color = {};

  if (props.disabled) {
    toggleBody = "bg-emerald-disabled justify-items-start";
    toggleTic = "bg-emerald-disabled-dark";
    color = {};
  } else {
    toggleTic = "bg-emerald-primary-screen";

    if (props.toggled) {
      toggleBody = "justify-items-end bg-emerald-primary";
      color = {
        backgroundColor: props.emeraldColor
      };
    } else {
      toggleBody = "justify-items-start bg-emerald-disabled";
      color = {};
    }
  }

  return /*#__PURE__*/jsx("div", {
    style: color,
    className: `w-[54px] h-[32px] grid content-center  
                rounded-md cursor-pointer transition-all ${toggleBody}`,
    onClick: props.onToggle,
    children: /*#__PURE__*/jsx("div", {
      className: `w-[22px] h-[22px] m-1 rounded-sm
                 transition-all ${toggleTic}`
    })
  });
};

/**
 * 
 * @param {src, alt, emeraldStyle} props 
 * @returns 
 */
const LazyImage = props => {
  return /*#__PURE__*/jsx("img", {
    src: props.src,
    alt: props.alt,
    loading: "lazy",
    className: props.emeraldStyle
  });
};

/**
 * 
 * @param {options, disabled, orientation, index, emeraldColor} props 
 * @returns 
 */
const RadioGroup = props => {
  const items = props.options;
  const isDisabled = props.disabled;
  const orientation = props.orientation;
  let displayStyle = "";
  let selectedIndex = props.index ? props.index : 0;

  if (orientation.toUpperCase() === "HORIZONTAL") {
    displayStyle = "flex-row items-center";
  } else {
    displayStyle = "flex-col items-start";
  }

  function handleItemSelection(index) {
    if (!isDisabled) {
      props.onOptionSelected(index);
    }
  }

  return /*#__PURE__*/jsx("div", {
    className: `inline-flex ${displayStyle}`,
    children: items.map((item, index) => {
      return /*#__PURE__*/jsx(RadioButton, {
        disabled: isDisabled,
        onItemSelected: () => handleItemSelection(index),
        selected: selectedIndex === index,
        option: item,
        color: props.emeraldColor
      }, index);
    })
  });
};
/**
 * 
 * @param {options, disabled, orientation, index, emeraldColor} props 
 * @returns 
 */

const SquareRadioGroup = props => {
  const items = props.options;
  const isDisabled = props.disabled;
  const orientation = props.orientation;
  let displayStyle = "";
  let selectedIndex = props.index ? props.index : 0;

  if (orientation.toUpperCase() === "HORIZONTAL") {
    displayStyle = "flex-row items-center";
  } else {
    displayStyle = "flex-col items-start";
  }

  function handleItemSelection(index) {
    if (!isDisabled) {
      props.onOptionSelected(index);
    }
  }

  return /*#__PURE__*/jsx("div", {
    className: `inline-flex ${displayStyle}`,
    children: items.map((item, index) => {
      return /*#__PURE__*/jsx(SquareRadioButton, {
        disabled: isDisabled,
        onItemSelected: () => handleItemSelection(index),
        selected: selectedIndex === index,
        option: item,
        color: props.emeraldColor
      }, index);
    })
  });
};
/**
 * 
 * @param {disabled, selected, color, option, onItemSelected} props 
 * @returns 
 */

const RadioButton = props => {
  let outlineColor;
  let backgroundColor;
  let outlineStyle = {};
  let innerStyle = {};

  if (props.disabled) {
    outlineColor = "outline-emerald-disabled-dark";
    backgroundColor = "bg-emerald-disabled-dark";
  } else {
    if (props.selected) {
      outlineColor = "outline-emerald-primary";
      backgroundColor = "bg-emerald-primary";
      outlineStyle = {
        outlineColor: props.color
      };
      innerStyle = {
        backgroundColor: props.color
      };
    } else {
      outlineColor = "outline-emerald-disabled";
      backgroundColor = "bg-emerald-transparent";
    }
  }

  function handleItemSelection() {
    if (!props.disabled) {
      props.onItemSelected();
    }
  }

  return /*#__PURE__*/jsxs("div", {
    className: `inline-flex flex-row items-center m-2`,
    onClick: handleItemSelection,
    children: [/*#__PURE__*/jsx("div", {
      style: outlineStyle,
      className: `w-[25px] h-[25px] mx-3 p-[2px]
                rounded-full outline outline-3 ${outlineColor}`,
      children: /*#__PURE__*/jsx("div", {
        style: innerStyle,
        className: `w-full h-full rounded-full 
                        ${backgroundColor}`
      })
    }), /*#__PURE__*/jsx("p", {
      className: "mr-2",
      children: props.option
    })]
  });
};
/**
 * 
 * @param {disabled, selected, color, option, onItemSelected} props 
 * @returns 
 */


const SquareRadioButton = props => {
  let outlineColor;
  let backgroundColor;
  let outlineStyle = {};
  let innerStyle = {};

  if (props.disabled) {
    outlineColor = "outline-emerald-disabled-dark";
    backgroundColor = "bg-emerald-disabled-dark";
  } else {
    if (props.selected) {
      outlineColor = "outline-emerald-primary";
      backgroundColor = "bg-emerald-primary";
      outlineStyle = {
        outlineColor: props.color
      };
      innerStyle = {
        backgroundColor: props.color
      };
    } else {
      outlineColor = "outline-emerald-disabled";
      backgroundColor = "bg-emerald-transparent";
    }
  }

  function handleItemSelection() {
    if (!props.disabled) {
      props.onItemSelected();
    }
  }

  return /*#__PURE__*/jsxs("div", {
    className: `inline-flex flex-row items-center m-2`,
    onClick: handleItemSelection,
    children: [/*#__PURE__*/jsx("div", {
      style: outlineStyle,
      className: `w-[25px] h-[25px] mx-3 p-[2px]
                rounded-sm outline outline-3 ${outlineColor}`,
      children: /*#__PURE__*/jsx("div", {
        style: innerStyle,
        className: `w-full h-full rounded-tn ${backgroundColor}`
      })
    }), /*#__PURE__*/jsx("p", {
      className: "ml-1",
      children: props.option
    })]
  });
};

/**
 * 
 * @param {count, adaptiveCount height, width, emeraldStyle} props 
 * @returns 
 */
const Grid = props => {
  const cols = props.count;
  let style = {
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, auto)`,
    height: props.height ? props.height : 'fit-content',
    width: props.width ? props.width : 'fit-content'
  };
  return /*#__PURE__*/jsx("div", {
    style: style,
    className: props.emeraldStyle,
    children: props.children
  });
};

/**
 * 
 * @param {emeraldStyle, children} props 
 * @returns 
 */
const AdaptiveContainer = props => {
  const style = props.emeraldStyle;
  return /*#__PURE__*/jsx("div", {
    className: `inline-flex flex-col sm:flex-row items-center ${style}`,
    children: props.children
  });
};

const DropDown = props => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mainName, setMainName] = useState(props.name);
  const options = props.options;
  const style = props.emeraldStyle;
  const itemStyle = props.itemEmeraldStyle;
  const arrowColor = props.arrowColor !== '' ? props.arrowColor : "#292D32";
  let menuDispaly = "hidden";

  let arrow = /*#__PURE__*/jsx("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-[20px] absolute right-3",
    children: /*#__PURE__*/jsx("path", {
      d: "m12 16.8c-0.7 0-1.4-0.27-1.93-0.8l-6.52-6.52c-0.29-0.29-0.29-0.77 0-1.06s0.77-0.29 1.06 0l6.52 6.52c0.48 0.48 1.26 0.48 1.74 0l6.52-6.52c0.29-0.29 0.77-0.29 1.06 0s0.29 0.77 0 1.06l-6.52 6.52c-0.53 0.53-1.23 0.8-1.93 0.8z",
      fill: arrowColor
    })
  });

  function handleOptionSelection(index, option) {
    props.onOptionSelect(index, option.value);
    setMainName(mn => option.name);
    setIsExpanded(ie => !isExpanded);
  }

  if (isExpanded) {
    menuDispaly = "";
    arrow = /*#__PURE__*/jsx("svg", {
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      className: "w-[20px] absolute right-3",
      children: /*#__PURE__*/jsx("path", {
        d: "m19.92 15.8c-0.19 0-0.38-0.07-0.53-0.22l-6.52-6.52c-0.48-0.48-1.26-0.48-1.74 0l-6.52 6.52c-0.29 0.29-0.77 0.29-1.06 0s-0.29-0.77 0-1.06l6.52-6.52c1.06-1.06 2.79-1.06 3.86 0l6.52 6.52c0.29 0.29 0.29 0.77 0 1.06-0.15 0.14-0.34 0.22-0.53 0.22z",
        fill: arrowColor
      })
    });
  } else {
    menuDispaly = "hidden";
    arrow = /*#__PURE__*/jsx("svg", {
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      className: "w-[20px] absolute right-3",
      children: /*#__PURE__*/jsx("path", {
        d: "m12 16.8c-0.7 0-1.4-0.27-1.93-0.8l-6.52-6.52c-0.29-0.29-0.29-0.77 0-1.06s0.77-0.29 1.06 0l6.52 6.52c0.48 0.48 1.26 0.48 1.74 0l6.52-6.52c0.29-0.29 0.77-0.29 1.06 0s0.29 0.77 0 1.06l-6.52 6.52c-0.53 0.53-1.23 0.8-1.93 0.8z",
        fill: arrowColor
      })
    });
  }

  return /*#__PURE__*/jsxs("div", {
    className: `h-fit bg-emerald-primary-screen rounded-lg ${style} transition-all`,
    children: [/*#__PURE__*/jsxs("div", {
      onClick: () => {
        setIsExpanded(exp => !isExpanded);
      },
      className: "h-fit w-full px-3 py-3 cursor-pointer inline-flex flex-row items-center relative",
      children: [/*#__PURE__*/jsx("p", {
        className: "select-none",
        children: mainName
      }), arrow]
    }), /*#__PURE__*/jsx("div", {
      className: `h-fit p-1 ${menuDispaly} transition-all`,
      children: options?.map((option, index) => {
        return /*#__PURE__*/jsx(Option, {
          name: option.name,
          onClick: () => handleOptionSelection(index, option),
          emeraldStyle: itemStyle
        }, index);
      })
    })]
  });
};

const Option = props => {
  return /*#__PURE__*/jsx("div", {
    className: `select-none cursor-pointer h-fit p-2 py-2 bg-emerald-disabled/20 
                    hover:bg-emerald-primary-surface rounded-lg m-1 my-2 
                    transition-all ${props.emeraldStyle}`,
    onClick: props.onClick,
    children: props.name
  });
};

const Divider = props => {
  const orientation = props.orientation;
  let sizing = 'h-[1.5px]';
  const style = props.emeraldStyle;

  if (orientation) {
    if (orientation.toUpperCase() === 'VERTICAL') {
      sizing = 'w-[1.5px] h-screen';
    } else {
      sizing = 'h-[1.5px]';
    }
  }

  return /*#__PURE__*/jsx("div", {
    className: `${sizing} ${style} bg-emerald-disabled`
  });
};

const ToolTip = props => {
  const placement = props.placement;
  let positioning = 'top-[100%]';
  let alignment = 'flex-col';
  const [visibility, setVisibility] = useState('hidden opacity-0');
  let ToolTipStyle = `w-max h-[42px] px-6 py-2 rounded-md bg-emerald-primary-text/90
    grid content-center justify-items-center text-emerald-primary-screen drop-shadow-lg 
    cursor-pointer ${props.emeraldStyle} absolute z-10 transition-all`;

  let content = /*#__PURE__*/jsxs(Fragment, {
    children: [props.children, /*#__PURE__*/jsx("div", {
      className: `${ToolTipStyle} ${positioning} ${visibility}`,
      children: props.tip
    })]
  });

  if (placement) {
    switch (placement.toUpperCase()) {
      case 'TOP':
        {
          alignment = 'flex-col';
          positioning = 'bottom-[100%]';
          content = /*#__PURE__*/jsxs(Fragment, {
            children: [/*#__PURE__*/jsx("div", {
              className: `${ToolTipStyle} ${positioning} ${visibility}`,
              children: props.tip
            }), props.children]
          });
          break;
        }

      case 'LEFT':
        {
          alignment = 'flex-row';
          positioning = 'right-[100%]';
          content = /*#__PURE__*/jsxs(Fragment, {
            children: [/*#__PURE__*/jsx("div", {
              className: `${ToolTipStyle} ${positioning} ${visibility}`,
              children: props.tip
            }), props.children]
          });
          break;
        }

      case 'RIGHT':
        {
          alignment = 'flex-row';
          positioning = 'left-[100%]';
          content = /*#__PURE__*/jsxs(Fragment, {
            children: [props.children, /*#__PURE__*/jsx("div", {
              className: `${ToolTipStyle} ${positioning} ${visibility}`,
              children: props.tip
            })]
          });
          break;
        }

      default:
        {
          alignment = 'flex-col';
          positioning = 'top-[100%]';
          content = /*#__PURE__*/jsxs(Fragment, {
            children: [props.children, /*#__PURE__*/jsx("div", {
              className: `${ToolTipStyle} ${positioning} ${visibility}`,
              children: props.tip
            })]
          });
          break;
        }
    }
  }

  return /*#__PURE__*/jsx("div", {
    className: `inline-flex ${alignment} items-center relative cursor-pointer`,
    onMouseOver: () => {
      setVisibility('opacity-1');
    },
    onMouseLeave: () => {
      setVisibility('hidden opacity-0');
    },
    children: content
  });
};

const Scrollable = props => {
  let orientation = props.orientation;
  const style = props.emeraldStyle;
  let orientationStyle = "";

  if (orientation) {
    if (orientation.toUpperCase() == "HORIZONTAL") {
      orientationStyle = "overflow-x-scroll overflow-y-hidden";
    } else if (orientation.toUpperCase() === "XY") {
      orientationStyle = "overflow-y-scroll overflow-x-scroll";
    } else {
      orientationStyle = "overflow-y-scroll overflow-x-hidden";
    }
  }

  return /*#__PURE__*/jsx("div", {
    className: `${orientationStyle} ${style}`,
    children: props.children
  });
};

const Badge = props => {
  let color = props.color;
  let visibility = props.visible;
  let visibilityStyle = "opacity-0";
  let position = props.position;
  let positionStyle = "top-0 right-0";

  if (visibility) {
    visibilityStyle = "opacity-1";
  } else {
    visibilityStyle = "opacity-0";
  }

  switch (position.toUpperCase()) {
    case "TOPLEFT":
      {
        positionStyle = "top-0 left-0";
        break;
      }

    case "BOTTOMRIGHT":
      {
        positionStyle = "bottom-0 right-0";
        break;
      }

    case "BOTTOMLEFT":
      {
        positionStyle = "bottom-0 left-0";
        break;
      }

    default:
      {
        positionStyle = "top-0 right-0";
        break;
      }
  }

  return /*#__PURE__*/jsxs("div", {
    className: "w-fit h-fit relative",
    children: [/*#__PURE__*/jsx("div", {
      style: {
        backgroundColor: color
      },
      className: `w-[15px] h-[15px] rounded-full 
            bg-emerald-primary absolute ${positionStyle} ${visibilityStyle} 
            transition-all`
    }), /*#__PURE__*/jsx("div", {
      className: "w-fit h-fit m-1",
      children: props.children
    })]
  });
};
const LabeledBadge = props => {
  let color = props.color;
  let textColor = props.labelColor;
  let visibility = props.visible;
  let visibilityStyle = "opacity-0";
  let position = props.position;
  let positionStyle = "top-0 right-0";

  if (visibility) {
    visibilityStyle = "opacity-1";
  } else {
    visibilityStyle = "opacity-0";
  }

  switch (position.toUpperCase()) {
    case "TOPLEFT":
      {
        positionStyle = "top-0 left-0";
        break;
      }

    case "BOTTOMRIGHT":
      {
        positionStyle = "bottom-0 right-0";
        break;
      }

    case "BOTTOMLEFT":
      {
        positionStyle = "bottom-0 left-0";
        break;
      }

    default:
      {
        positionStyle = "top-0 right-0";
        break;
      }
  }

  return /*#__PURE__*/jsxs("div", {
    className: "w-fit h-fit relative",
    children: [/*#__PURE__*/jsx("div", {
      style: {
        backgroundColor: color,
        color: textColor
      },
      className: `w-[20px] h-[20px] rounded-full grid content-center 
                justify-items-center text-xs bg-emerald-primary text-emerald-primary-screen 
                absolute ${positionStyle} ${visibilityStyle} transition-all`,
      children: props.label
    }), /*#__PURE__*/jsx("div", {
      className: "w-fit h-fit m-1",
      children: props.children
    })]
  });
};
const AdaptiveBadge = props => {
  let color = props.color;
  let textColor = props.labelColor;
  let visibility = props.visible;
  let visibilityStyle = "opacity-0";
  let position = props.position;
  let positionStyle = "top-0 right-0";

  if (visibility) {
    visibilityStyle = "opacity-1";
  } else {
    visibilityStyle = "opacity-0";
  }

  switch (position.toUpperCase()) {
    case "TOPLEFT":
      {
        positionStyle = "top-0 left-0";
        break;
      }

    case "BOTTOMRIGHT":
      {
        positionStyle = "bottom-0 right-0";
        break;
      }

    case "BOTTOMLEFT":
      {
        positionStyle = "bottom-0 left-0";
        break;
      }

    default:
      {
        positionStyle = "top-0 right-0";
        break;
      }
  }

  return /*#__PURE__*/jsxs("div", {
    className: "w-fit h-fit relative",
    children: [/*#__PURE__*/jsx("div", {
      style: {
        backgroundColor: color,
        color: textColor
      },
      className: `min-w-[20px] max-w-[33px] w-fit h-[20px] px-1 rounded-full grid content-center 
                justify-items-center text-xs bg-emerald-primary text-emerald-primary-screen 
                absolute ${positionStyle} ${visibilityStyle} transition-all overflow-hidden`,
      children: props.label
    }), /*#__PURE__*/jsx("div", {
      className: "w-fit h-fit m-1",
      children: props.children
    })]
  });
};

const AdaptiveGrid = props => {
  let elementSize = props.elementSize;
  let style = props.emeraldStyle;
  let gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, minmax(${elementSize}, 1fr))`
  };
  return /*#__PURE__*/jsx("div", {
    style: gridStyle,
    className: `${style}`,
    children: props.children
  });
};

const Avatar = props => {
  return /*#__PURE__*/jsx("img", {
    src: props.src,
    alt: "image",
    style: {
      height: props.size,
      width: props.size
    },
    className: "rounded-full object-cover"
  });
};
const SquareAvatar = props => {
  return /*#__PURE__*/jsx("img", {
    src: props.src,
    alt: "image",
    style: {
      height: props.size,
      width: props.size
    },
    className: "rounded-lg object-cover"
  });
};

export { ActionInput, AdaptiveBadge, AdaptiveContainer, AdaptiveGrid, Avatar, Badge, Button, Column, Divider, DropDown, Grid, IconifiedButton, ImageCheckBox, Input, LabeledBadge, LazyImage, PasswordInput, RadioGroup, RoundCheckBox, RoundLineCheckBox, RoundSwitch, Row, Scrollable, SideNav, Spacer, SquareAvatar, SquareCheckBox, SquareLineCheckBox, SquareRadioGroup, SquareSwitch, TextButton, ToolTip, TopNav };
