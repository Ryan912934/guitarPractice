/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { RoutineExerciseResponseDataObjectLocalizedAttributesRoutineDataAttributesOwnerDataAttributesRole } from './routineExerciseResponseDataObjectLocalizedAttributesRoutineDataAttributesOwnerDataAttributesRole';
import type { RoutineExerciseResponseDataObjectLocalizedAttributesRoutineDataAttributesOwnerDataAttributesCreatedBy } from './routineExerciseResponseDataObjectLocalizedAttributesRoutineDataAttributesOwnerDataAttributesCreatedBy';
import type { RoutineExerciseResponseDataObjectLocalizedAttributesRoutineDataAttributesOwnerDataAttributesUpdatedBy } from './routineExerciseResponseDataObjectLocalizedAttributesRoutineDataAttributesOwnerDataAttributesUpdatedBy';

export type RoutineExerciseResponseDataObjectLocalizedAttributesRoutineDataAttributesOwnerDataAttributes = {
  username?: string;
  email?: string;
  provider?: string;
  resetPasswordToken?: string;
  confirmationToken?: string;
  confirmed?: boolean;
  blocked?: boolean;
  role?: RoutineExerciseResponseDataObjectLocalizedAttributesRoutineDataAttributesOwnerDataAttributesRole;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: RoutineExerciseResponseDataObjectLocalizedAttributesRoutineDataAttributesOwnerDataAttributesCreatedBy;
  updatedBy?: RoutineExerciseResponseDataObjectLocalizedAttributesRoutineDataAttributesOwnerDataAttributesUpdatedBy;
};
