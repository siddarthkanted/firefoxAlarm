window.onload = function () {
	var createAlarmAnchor = document.getElementById("createAlarmAnchor");
	createAlarmAnchor.onclick = createAlarm;

	var getAllAlarmAnchor = document.getElementById("getAllAlarmAnchor");
	getAllAlarmAnchor.onclick = getAllAlarm;
};

function createAlarm() {
	var alarm = {
		date: new Date("February 10, 2017 20:00:00"),
		respectTimezone: 'ignoreTimezone',
		data: {
			message: "Do something dude!"
		}
	};

	var request = navigator.mozAlarms.add(alarm.date, alarm.respectTimezone, alarm.data);

	request.onsuccess = function () {
		console.log('A new alarm has been set:' + this.result);
		alarm.id = this.result; // get the id of the new alarm.
	}

	request.onerror = function () {
		console.log('operation failed: ' + this.error);
	}
};

function getAllAlarm() {
	console.log("Get all alarm function called: ");
	var request = navigator.mozAlarms.getAll();

	request.onsuccess = function () {
		this.result.forEach(function (alarm) {
			console.log('Id: ' + alarm.id);
			console.log('date: ' + alarm.date);
			console.log('respectTimezone: ' + alarm.respectTimezone);
			console.log('data: ' + JSON.stringify(alarm.data));
		});
	};

	request.onerror = function () {
		console.log("An error occurred: " + this.error.name);
	};
};
