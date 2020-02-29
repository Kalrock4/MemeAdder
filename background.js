
var on = true;

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {redirectUrl: 'https://meme-api.herokuapp.com/gimme' };
    },
    {urls: blocked_domains},
    ["blocking"]
);