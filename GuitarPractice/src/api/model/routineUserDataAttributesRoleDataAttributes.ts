/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { RoutineUserDataAttributesRoleDataAttributesPermissions } from './routineUserDataAttributesRoleDataAttributesPermissions';
import type { RoutineUserDataAttributesRoleDataAttributesUsers } from './routineUserDataAttributesRoleDataAttributesUsers';
import type { RoutineUserDataAttributesRoleDataAttributesCreatedBy } from './routineUserDataAttributesRoleDataAttributesCreatedBy';
import type { RoutineUserDataAttributesRoleDataAttributesUpdatedBy } from './routineUserDataAttributesRoleDataAttributesUpdatedBy';

export type RoutineUserDataAttributesRoleDataAttributes = {
  name?: string;
  description?: string;
  type?: string;
  permissions?: RoutineUserDataAttributesRoleDataAttributesPermissions;
  users?: RoutineUserDataAttributesRoleDataAttributesUsers;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: RoutineUserDataAttributesRoleDataAttributesCreatedBy;
  updatedBy?: RoutineUserDataAttributesRoleDataAttributesUpdatedBy;
};
