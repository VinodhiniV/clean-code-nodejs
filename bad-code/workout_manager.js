
export class WorkoutManager {
    constructor() {
        this.db = [];
    }

    // Long Parameter List
    // Magic Strings
    // Long Method
    // Conditional Complexity
    // Duplicate Code
    save(type, time, distance, date, user, comments, heartRate) {
        console.log("Saving workout...");

        // Validation Logic mixed with business logic
        if (type === null || type === undefined || type === '') {
            console.log("Error: Type is required");
            return;
        }

        if (time === null || time === undefined || time < 0) {
            console.log("Error: Time is required and must be positive");
            return;
        }

        // Requirement 1: Support for logging Time based workouts (Yoga, Strength)
        // Magic Strings used here
        if (type === 'Yoga' || type === 'Strength') {
            if (distance !== null && distance !== undefined && distance !== 0) {
                console.log("Error: Distance should be 0 for time based workouts");
                return;
            }
        }
        // Distance based workouts
        else if (type === 'Walking' || type === 'Running' || type === 'Cycling') {
            if (distance === null || distance === undefined || distance <= 0) {
                console.log("Error: Distance is required and must be positive for distance based workouts");
                return;
            }
        } else {
            console.log("Error: Unknown workout type");
            return;
        }

        let score = 0;

        // Requirement 2: Scoring system
        // Conditional Mess & Magic Numbers & Duplicate Code
        if (type === 'Yoga') {
            // Type factor for Yoga - 2
            score = 2 * time;
        } else if (type === 'Strength') {
            // Type factor for Strength - 3
            score = 3 * time;
        } else if (type === 'Walking') {
            // Type factor for Walking - 2
            // Type factor * (distance covered/time spent)
            score = 2 * (distance / time);
        } else if (type === 'Running') {
            // Type factor for Running - 6
            score = 6 * (distance / time);
        } else if (type === 'Cycling') {
            // Type factor for Cycling - 4
            score = 4 * (distance / time);
        }

        // Anemic Model - usage of raw object literals instead of classes
        const workout = {
            type: type,
            time: time,
            distance: distance,
            date: date,
            user: user,
            comments: comments,
            heartRate: heartRate,
            score: score
        };

        this.db.push(workout);

        console.log("Workout saved successfully!");
        console.log("Score for this session: " + score);
    }

    getWorkouts() {
        return this.db;
    }
}
