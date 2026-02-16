export class Workout {
    constructor(type, time, date, user, comments, heartRate) {
        if (this.constructor === Workout) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.type = type;
        this.time = time;
        this.date = date;
        this.user = user;
        this.comments = comments;
        this.heartRate = heartRate;
    }

    calculateScore() {
        throw new Error("Method 'calculateScore()' must be implemented.");
    }
}
