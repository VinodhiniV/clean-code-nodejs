import { InMemoryWorkoutRepository } from './src/repositories/InMemoryWorkoutRepository.js';
import { WorkoutService } from './src/services/WorkoutService.js';

class App {
    static main() {
        console.log("--- GoFit App (Clean Code) ---");

        // Dependency Injection
        const repository = new InMemoryWorkoutRepository();
        const service = new WorkoutService(repository);

        // Valid Workouts
        console.log("\nLogging Walking...");
        service.addWorkout('Walking', {
            time: 30,
            distance: 2,
            date: '2023-10-26',
            user: 'User1',
            comments: 'Morning walk',
            heartRate: 100
        });

        console.log("\nLogging Running...");
        service.addWorkout('Running', {
            time: 45,
            distance: 5,
            date: '2023-10-27',
            user: 'User1',
            comments: 'Hard run',
            heartRate: 150
        });

        // Requirement 1: Time based workouts
        console.log("\nLogging Yoga...");
        service.addWorkout('Yoga', {
            time: 60,
            date: '2023-10-28',
            user: 'User1',
            comments: 'Relaxing',
            heartRate: 80
        });

        console.log("\nLogging Strength...");
        service.addWorkout('Strength', {
            time: 40,
            date: '2023-10-29',
            user: 'User1',
            comments: 'Gym day',
            heartRate: 120
        });

        // Invalid Workouts behavior
        console.log("\nLogging Invalid Type...");
        service.addWorkout('Swimming', {
            time: 30,
            date: '2023-10-30',
            user: 'User1'
        });

        console.log("\nLogging Invalid Distance for Walking (missing)...");
        service.addWorkout('Walking', {
            time: 60,
            date: '2023-10-28',
            user: 'User1'
            // missing distance
        });

        const allWorkouts = service.getHistory();
        console.log("\n--- All Workouts Log ---");
        // Print nicely
        allWorkouts.forEach(w => {
            console.log(`${w.type} | Date: ${w.date} | Score: ${w.calculateScore()}`);
        });
    }
}

App.main();
