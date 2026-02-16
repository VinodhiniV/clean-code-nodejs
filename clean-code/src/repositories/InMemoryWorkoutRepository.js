export class InMemoryWorkoutRepository {
    constructor() {
        this.workouts = [];
    }

    save(workout) {
        this.workouts.push(workout);
        // Simulate returning a saved entity with ID
        console.log(`[Repo] Saving workout: ${workout.type} on ${workout.date}`);
        return workout;
    }

    findAll() {
        return this.workouts;
    }
}
