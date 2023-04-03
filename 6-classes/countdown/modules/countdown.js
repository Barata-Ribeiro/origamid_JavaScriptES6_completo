export default class Countdown {
    // Creates the future date you/someone wishes to
    // start the countdown
    constructor(futureDate) {
        this.futureDate = futureDate;
    }
    // This is an internal method
    // Gets the current date
    get _actualDate() {
        return new Date();
    }
    // This is an internal method
    // Gets the desired future date
    get _futureDate() {
        // The value passed to the constructor
        // will be returned as a new Date object
        return new Date(this.futureDate);
    }
    // This is an internal method
    // Gets the difference between the current date and the desired future
    get _timeStampDiff() {
        return this._futureDate.getTime() - this._actualDate.getTime();
    }
    // Converts the result of timeStampDiff to days
    get days() {
        return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
    }
    // Converts the result of timeStampDiff to hours
    get hours() {
        return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
    }
    // Converts the result of timeStampDiff to
    get minutes() {
        return Math.floor(this._timeStampDiff / (60 * 1000));
    }
    // Converts the result of timeStampDiff to
    get seconds() {
        return Math.floor(this._timeStampDiff / 1000);
    }
    // Gets the total time left for the specified date
    get total() {
        const days = this.days;
        const hours = this.hours % 24;
        const minutes = this.minutes % 60;
        const seconds = this.seconds % 60;
        return {
            days,
            hours,
            minutes,
            seconds,
        };
    }
}
