/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { RoutineResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesPermissions } from './routineResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesPermissions';
import type { RoutineResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesUsers } from './routineResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesUsers';
import type { RoutineResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesCreatedBy } from './routineResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesCreatedBy';
import type { RoutineResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesUpdatedBy } from './routineResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesUpdatedBy';

export type RoutineResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributes = {
  name?: string;
  description?: string;
  type?: string;
  permissions?: RoutineResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesPermissions;
  users?: RoutineResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesUsers;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: RoutineResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesCreatedBy;
  updatedBy?: RoutineResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesUpdatedBy;
};
