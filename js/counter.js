var runningNumberElementId = 'running-number';
var counted = document.getElementById(runningNumberElementId).innerText;

// Tap COUNT button
function count() {
	counted = parseInt(counted) + 1;
	counterWithStyle(counted);
}

// Tap -1 button
function decount() {
	if(counted >= 1) {
		counted = parseInt(counted) - 1;
		counterWithStyle(counted);
	}
	else {
		counted = 0;
	}
}

// Tap RESET button
function reset() {
	// Vibrate for 100 ms
	navigator.notification.vibrate(100);
	navigator.notification.confirm('Reset counter?', onConfirmReset, 'Reset', 'No,OK');
}
function onConfirmReset(button) {
	// button index: No (1), OK (2)
	if(button === 2) {
		resetCounter();
	}
}

// Reset counter
function resetCounter() {
	counted = 0;
	document.getElementById(runningNumberElementId).innerHTML = counted;
}

// Change color
function counterWithStyle(counting) {
	if (counting % 10 == 0 && counting != 0) {
		document.getElementById(runningNumberElementId).innerHTML = "<font color='#23126E'>" + counting + "</font>";
	}
	else {
		document.getElementById(runningNumberElementId).innerHTML = counting;
	}
}