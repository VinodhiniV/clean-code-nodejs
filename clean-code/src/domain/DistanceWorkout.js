import { Workout } from './Workout.js';

export class DistanceWorkout extends Workout {
    constructor(type, time, distance, date, user, comments, heartRate, factor) {
        super(type, time, date, user, comments, heartRate);
        this.distance = distance;
        this.factor = factor;
    }

    calculateScore() {
        if (this.time === 0) return 0; // Avoid division by zero
        // Formula: Type factor * (distance covered / time spent)
        return this.factor * (this.distance / this.time);
    }
}
