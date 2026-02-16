import { TimeWorkout } from './TimeWorkout.js';
import { DistanceWorkout } from './DistanceWorkout.js';

// Configuration for workout types logic mapping
const WORKOUT_CONFIG = {
    'Yoga': { class: TimeWorkout, factor: 2 },
    'Strength': { class: TimeWorkout, factor: 3 },
    'Walking': { class: DistanceWorkout, factor: 2 },
    'Running': { class: DistanceWorkout, factor: 6 },
    'Cycling': { class: DistanceWorkout, factor: 4 }
};

export class WorkoutFactory {
    static create(type, data) {
        const config = WORKOUT_CONFIG[type];

        if (!config) {
            throw new Error(`Workout type '${type}' is not supported.`);
        }

        // Common validation could go here or in a Validator class
        if (!data.time || data.time < 0) {
            throw new Error(`Invalid time for workout.`);
        }

        if (config.class === DistanceWorkout) {
            if (!data.distance || data.distance <= 0) {
                throw new Error(`Distance is required for ${type}.`);
            }
            return new DistanceWorkout(type, data.time, data.distance, data.date, data.user, data.comments, data.heartRate, config.factor);
        } else {
            // For TimeWorkout, distance should be ignored or 0.
            return new TimeWorkout(type, data.time, data.date, data.user, data.comments, data.heartRate, config.factor);
        }
    }
}
