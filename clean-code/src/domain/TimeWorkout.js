import { Workout } from './Workout.js';

export class TimeWorkout extends Workout {
    constructor(type, time, date, user, comments, heartRate, factor) {
        super(type, time, date, user, comments, heartRate);
        this.factor = factor;
    }

    calculateScore() {
        // Formula: Type factor * time spent
        return this.time * this.factor;
    }
}
