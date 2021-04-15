chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	chrome.tabs.executeScript(changeInfo.ib, {
		file: 'inject.js'
	});
}); 

chrome.tabs.onActivated.addListener(function(activeInfo) {
 // how to fetch tab url using activeInfo.tabid
 chrome.tabs.get(activeInfo.tabId, function(tab){
	chrome.tabs.executeScript(tab.ib, {
		file: 'inject.js'
	});
 });
}); 