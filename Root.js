const webview = document.querySelector('webview')
webview.addEventListener("dom-ready", function () {
webview.setUserAgent("Mozilla/5.0 (compatible; U; NETFLIX) AppleWebKit/533.3 (KHTML, like Gecko) Qt/4.7.0 Safari/533.3 Netflix/3.2 (DEVTYPE=RKU-42XXX-; CERTVER=0) QtWebKit/2.2, Roku 3/7.0 (Roku, 4200X, Wireless)");
webview.insertCSS(`
* {
    transition: all 100ms !important;
}
`);
});