/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { RoutineExerciseRequestDataRoutine } from './routineExerciseRequestDataRoutine';
import type { RoutineExerciseRequestDataExercise } from './routineExerciseRequestDataExercise';

export type RoutineExerciseRequestData = {
  routine?: RoutineExerciseRequestDataRoutine;
  exercise?: RoutineExerciseRequestDataExercise;
  order?: number;
  duration?: number;
};