/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { RoutinePracticeResponseDataObjectAttributesRoutineDataAttributesOwnerDataAttributesRoleDataAttributesPermissions } from './routinePracticeResponseDataObjectAttributesRoutineDataAttributesOwnerDataAttributesRoleDataAttributesPermissions';
import type { RoutinePracticeResponseDataObjectAttributesRoutineDataAttributesOwnerDataAttributesRoleDataAttributesUsers } from './routinePracticeResponseDataObjectAttributesRoutineDataAttributesOwnerDataAttributesRoleDataAttributesUsers';
import type { RoutinePracticeResponseDataObjectAttributesRoutineDataAttributesOwnerDataAttributesRoleDataAttributesCreatedBy } from './routinePracticeResponseDataObjectAttributesRoutineDataAttributesOwnerDataAttributesRoleDataAttributesCreatedBy';
import type { RoutinePracticeResponseDataObjectAttributesRoutineDataAttributesOwnerDataAttributesRoleDataAttributesUpdatedBy } from './routinePracticeResponseDataObjectAttributesRoutineDataAttributesOwnerDataAttributesRoleDataAttributesUpdatedBy';

export type RoutinePracticeResponseDataObjectAttributesRoutineDataAttributesOwnerDataAttributesRoleDataAttributes = {
  name?: string;
  description?: string;
  type?: string;
  permissions?: RoutinePracticeResponseDataObjectAttributesRoutineDataAttributesOwnerDataAttributesRoleDataAttributesPermissions;
  users?: RoutinePracticeResponseDataObjectAttributesRoutineDataAttributesOwnerDataAttributesRoleDataAttributesUsers;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: RoutinePracticeResponseDataObjectAttributesRoutineDataAttributesOwnerDataAttributesRoleDataAttributesCreatedBy;
  updatedBy?: RoutinePracticeResponseDataObjectAttributesRoutineDataAttributesOwnerDataAttributesRoleDataAttributesUpdatedBy;
};