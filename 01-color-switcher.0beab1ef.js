const t={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};let e=null;t.start.addEventListener("click",(function(){e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.start.disabled=!0})),t.stop.addEventListener("click",(function(){clearInterval(e),t.start.disabled=!1}));
//# sourceMappingURL=01-color-switcher.0beab1ef.js.map
