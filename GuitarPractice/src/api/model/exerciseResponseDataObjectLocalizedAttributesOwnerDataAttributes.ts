/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { ExerciseResponseDataObjectLocalizedAttributesOwnerDataAttributesRole } from './exerciseResponseDataObjectLocalizedAttributesOwnerDataAttributesRole';
import type { ExerciseResponseDataObjectLocalizedAttributesOwnerDataAttributesCreatedBy } from './exerciseResponseDataObjectLocalizedAttributesOwnerDataAttributesCreatedBy';
import type { ExerciseResponseDataObjectLocalizedAttributesOwnerDataAttributesUpdatedBy } from './exerciseResponseDataObjectLocalizedAttributesOwnerDataAttributesUpdatedBy';

export type ExerciseResponseDataObjectLocalizedAttributesOwnerDataAttributes = {
  username?: string;
  email?: string;
  provider?: string;
  resetPasswordToken?: string;
  confirmationToken?: string;
  confirmed?: boolean;
  blocked?: boolean;
  role?: ExerciseResponseDataObjectLocalizedAttributesOwnerDataAttributesRole;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: ExerciseResponseDataObjectLocalizedAttributesOwnerDataAttributesCreatedBy;
  updatedBy?: ExerciseResponseDataObjectLocalizedAttributesOwnerDataAttributesUpdatedBy;
};