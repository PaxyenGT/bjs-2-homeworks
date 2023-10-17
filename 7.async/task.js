class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}
	addClock(addTime, callback) {
		if (!addTime || !callback) {
			throw new Error('Отсутствуют обязательные аргументы')
		}
		if (this.alarmCollection.some((element) => element.time === addTime)) {
			console.warn('Уже присутствует звонок на это же время');
		}
		this.alarmCollection.push({
			callback,
			time: addTime,
			canCall: true
		})
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter((item) => item.time !== time)
	}
	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString("ru-Ru", {
			hour: "2-digit",
			minute: "2-digit",
		})
	}
	start() {
		if (!this.intervalId) {
			this.intervalId = setInterval(() => {
				this.alarmCollection.forEach((el) => {
					if (el.time === this.getCurrentFormattedTime() && el.canCall === true) {
						el.canCall = false;
						el.callback()
					}
				})
			}, 1000)
		}
	}
	stop() {
		clearInterval(this.intervalId)
		this.intervalId = null
	}
	resetAllCalls() {
		this.alarmCollection.forEach(el => {
			el.canCall = true;
		})
	}
	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}