/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { RoutineExerciseRoutineDataAttributesUser } from './routineExerciseRoutineDataAttributesUser';
import type { RoutineExerciseRoutineDataAttributesCreatedBy } from './routineExerciseRoutineDataAttributesCreatedBy';
import type { RoutineExerciseRoutineDataAttributesUpdatedBy } from './routineExerciseRoutineDataAttributesUpdatedBy';

export type RoutineExerciseRoutineDataAttributes = {
  name?: string;
  user?: RoutineExerciseRoutineDataAttributesUser;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: RoutineExerciseRoutineDataAttributesCreatedBy;
  updatedBy?: RoutineExerciseRoutineDataAttributesUpdatedBy;
};
