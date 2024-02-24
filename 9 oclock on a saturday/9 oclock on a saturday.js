function checkTime(){
	let date = new Date();

	if (date.getDay() == 6 && date.getHours() == 21 && date.getMinutes() == 0){
		console.log("It's 9 o\'clock on a Saturday..."); // To see this alert, open the browser console: CTRL + SHIFT + J
		var newTab = browser.tabs.create({ url:'https://youtu.be/gxEPV4kolz0' }); // This should open a window instead of a tab, in the future.
	}else{
		console.log("It is NOT 9 o\'clock on a Saturday...");
	}
}


// Code starts here. Check what time it is:
checkTime();

// Set up alarm to check this every minute
browser.alarms.onAlarm.addListener(checkTime);
browser.alarms.create('checkTime', {periodInMinutes: 1});