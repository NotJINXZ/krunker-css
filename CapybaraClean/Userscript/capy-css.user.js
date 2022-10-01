// ==UserScript==
// @name         Capybara Krunker CSS Loader
// @version      4.0
// @description  CSS for Capy Clan
// @author       JINXZ
// @match        *://krunker.io/*
// @exclude      *://krunker.io/editor*
// @exclude      *://krunker.io/social*
// @run-at       document-start
// @grant        none
// ==/UserScript==


/*
    CapybaraClean CSS
    Version:    1.0.0
    Creator(s): JINXZ

    Links:
        Krunker Hub: https://krunker.io/social.html?p=clan&q=capy
        Discord:     https://discord.gg/xKWc9g6JVR


    Contact: JINXZ#9281 on Discord

    If you reuse anypart of this code make sure to mention me.
*/

let cssUrl = "https://raw.githubusercontent.com/NotJINXZ/krunker-css/main/CapybaraClean/main_custom.css"
new Array(...document.styleSheets).map(css => {
    if (css.href && css.href.includes("main_custom.css")) {
        if (cssUrl.startsWith("http") && cssUrl.endsWith(".css")) {
            css.ownerNode.href = cssUrl;
        }
    }
})