/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { RoutineResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRoles } from './routineResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRoles';
import type { RoutineResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesCreatedBy } from './routineResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesCreatedBy';
import type { RoutineResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesUpdatedBy } from './routineResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesUpdatedBy';

export type RoutineResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributes = {
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  resetPasswordToken?: string;
  registrationToken?: string;
  isActive?: boolean;
  roles?: RoutineResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRoles;
  blocked?: boolean;
  preferedLanguage?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: RoutineResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesCreatedBy;
  updatedBy?: RoutineResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesUpdatedBy;
};
