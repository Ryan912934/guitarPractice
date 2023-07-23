/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { RoutineExerciseExercise } from './routineExerciseExercise';
import type { RoutineExerciseUser } from './routineExerciseUser';
import type { RoutineExerciseRoutine } from './routineExerciseRoutine';
import type { RoutineExerciseCreatedBy } from './routineExerciseCreatedBy';
import type { RoutineExerciseUpdatedBy } from './routineExerciseUpdatedBy';

export interface RoutineExercise {
  order?: number;
  exercise?: RoutineExerciseExercise;
  user?: RoutineExerciseUser;
  practiceTime?: number;
  routine?: RoutineExerciseRoutine;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: RoutineExerciseCreatedBy;
  updatedBy?: RoutineExerciseUpdatedBy;
}