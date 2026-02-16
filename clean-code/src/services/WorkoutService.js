import { WorkoutFactory } from '../domain/WorkoutFactory.js';

export class WorkoutService {
    constructor(workoutRepository) {
        this.workoutRepository = workoutRepository;
    }

    addWorkout(type, data) {
        try {
            const workout = WorkoutFactory.create(type, data);
            this.workoutRepository.save(workout);
            console.log(`[Service] Workout added successfully. Score: ${workout.calculateScore()}`);
        } catch (error) {
            console.error(`[Service] Error adding workout: ${error.message}`);
        }
    }

    getHistory() {
        return this.workoutRepository.findAll();
    }
}
