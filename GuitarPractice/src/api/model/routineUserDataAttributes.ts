/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { RoutineUserDataAttributesRole } from './routineUserDataAttributesRole';
import type { RoutineUserDataAttributesCreatedBy } from './routineUserDataAttributesCreatedBy';
import type { RoutineUserDataAttributesUpdatedBy } from './routineUserDataAttributesUpdatedBy';

export type RoutineUserDataAttributes = {
  username?: string;
  email?: string;
  provider?: string;
  resetPasswordToken?: string;
  confirmationToken?: string;
  confirmed?: boolean;
  blocked?: boolean;
  role?: RoutineUserDataAttributesRole;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: RoutineUserDataAttributesCreatedBy;
  updatedBy?: RoutineUserDataAttributesUpdatedBy;
};