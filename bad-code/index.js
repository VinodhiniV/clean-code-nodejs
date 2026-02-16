
import { WorkoutManager } from './workout_manager.js';

// Middleman / Unwanted Wrapper
class App {
    constructor() {
        this.manager = new WorkoutManager();
    }

    run() {
        console.log("--- GoFit App (Bad Code) ---");

        // Valid Workouts
        console.log("\nLogging Walking...");
        this.manager.save('Walking', 30, 2, '2023-10-26', 'User1', 'Morning walk', 100);

        console.log("\nLogging Running...");
        this.manager.save('Running', 45, 5, '2023-10-27', 'User1', 'Hard run', 150);

        // Requirement 1: Time based workouts
        console.log("\nLogging Yoga...");
        this.manager.save('Yoga', 60, 0, '2023-10-28', 'User1', 'Relaxing', 80);

        console.log("\nLogging Strength...");
        this.manager.save('Strength', 40, 0, '2023-10-29', 'User1', 'Gym day', 120);

        // Invalid Workouts
        console.log("\nLogging Invalid Type...");
        this.manager.save('Swimming', 30, 0, '2023-10-30', 'User1', 'Pool', 110); // Not supported

        console.log("\nLogging Invalid Distance for Yoga...");
        this.manager.save('Yoga', 60, 5, '2023-10-28', 'User1', 'Wrong input', 80);

        const allWorkouts = this.manager.getWorkouts();
        console.log("\n--- All Workouts Log ---");
        console.log(allWorkouts);
    }
}

const app = new App();
app.run();
