/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { RoutineExerciseExerciseDataAttributesUserDataAttributesRole } from './routineExerciseExerciseDataAttributesUserDataAttributesRole';
import type { RoutineExerciseExerciseDataAttributesUserDataAttributesCreatedBy } from './routineExerciseExerciseDataAttributesUserDataAttributesCreatedBy';
import type { RoutineExerciseExerciseDataAttributesUserDataAttributesUpdatedBy } from './routineExerciseExerciseDataAttributesUserDataAttributesUpdatedBy';

export type RoutineExerciseExerciseDataAttributesUserDataAttributes = {
  username?: string;
  email?: string;
  provider?: string;
  resetPasswordToken?: string;
  confirmationToken?: string;
  confirmed?: boolean;
  blocked?: boolean;
  role?: RoutineExerciseExerciseDataAttributesUserDataAttributesRole;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: RoutineExerciseExerciseDataAttributesUserDataAttributesCreatedBy;
  updatedBy?: RoutineExerciseExerciseDataAttributesUserDataAttributesUpdatedBy;
};
