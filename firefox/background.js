browser.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	browser.tabs.executeScript(changeInfo.ib, {
		file: 'inject.js'
	});
}); 

browser.tabs.onActivated.addListener(function(activeInfo) {
 // how to fetch tab url using activeInfo.tabid
 browser.tabs.get(activeInfo.tabId, function(tab){
	browser.tabs.executeScript(tab.ib, {
		file: 'inject.js'
	});
 });
}); 