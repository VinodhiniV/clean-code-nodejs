# Clean Code Workshop - GoFit Scenario

This repository contains materials for a Clean Code workshop, focusing on identifying code smells and refactoring them using SOLID principles and design patterns.

## Scenario
**GoFit** is a fitness tracker application.
- **Original State**: Supported logging Walking, Running, and Cycling.
- **New Requirements**:
    1.  Support logging **Time-based workouts** like Yoga and Strength Training.
    2.  Implement a **Scoring System** based on workout type:
        -   **Time-based** (Yoga, Strength): `Type Factor * Time`
        -   **Distance-based** (Walking, Running, Cycling): `Type Factor * (Distance / Time)`

## Project Structure
The project is divided into two folders:
1.  `bad-code/`: A working implementation but full of code smells and bad practices.
2.  `clean-code/`: A refactored, clean implementation following SOLID principles.

## Getting Started

### Prerequisites
- Node.js installed.

### Running the Bad Code
```bash
cd bad-code
npm start
```

### Running the Clean Code
```bash
cd clean-code
npm start
```

---

## Code Smells in `bad-code`
The `bad-code` implementation (`workout_manager.js`) demonstrates several violations:

1.  **God Class / Single Responsibility Principle Violation**: `WorkoutManager` handles validation, calculation, saving, and logging.
2.  **Open/Closed Principle Violation**: Adding a new workout type requires modifying the `save` method and adding more `if/else` checks.
3.  **Magic Strings**: 'Yoga', 'Running', etc., are hardcoded strings scattered throughout.
4.  **Long Method**: The `save` method does too many things.
5.  **Long Parameter List**: The `save` method takes 7 arguments, many of which are null depending on the type.
6.  **Complex Conditionals**: Nested `if/else` statements make logic hard to follow.
7.  **Duplicate Code**: Scoring logic conditional checks are repetitive.
8.  **Anemic Model**: `workout` data is just a plain object; logic is external.

## Refactoring in `clean-code`
The `clean-code` implementation fixes these issues:

1.  **SOLID Principles**:
    -   **SRP**: `Workout` classes handle data/scoring, `Services` handle business logic, `Repositories` handle data persistence.
    -   **OCP**: New workout types can be added by creating a new class (e.g., `SwimmingWorkout`) without changing existing code.
    -   **LSP**: `TimeWorkout` and `DistanceWorkout` can be used interchangeably where `Workout` is expected.
    -   **DIP**: `WorkoutService` depends on the `Repository` abstraction (injected in constructor).

2.  **Polymorphism**:
    -   `Workout` is a base class.
    -   `TimeWorkout` and `DistanceWorkout` implement specific `calculateScore()` logic.
    -   Replaces the big `switch` or `if/else` block for scoring.

3.  **Factory Pattern**:
    -   `WorkoutFactory` encapsulates the creation logic and configuration (Type Factors), keeping the rest of the app clean.

4.  **Enums/Constants**:
    -   Configuration object maps strings to factors/classes, removing magic strings logic.

5.  **Meaningful Names**:
    -   Classes and methods clearly state their purpose.
