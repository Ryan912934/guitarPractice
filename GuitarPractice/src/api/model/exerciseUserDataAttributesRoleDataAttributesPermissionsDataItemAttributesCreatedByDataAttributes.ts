/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { ExerciseUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRoles } from './exerciseUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRoles';
import type { ExerciseUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesCreatedBy } from './exerciseUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesCreatedBy';
import type { ExerciseUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesUpdatedBy } from './exerciseUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesUpdatedBy';

export type ExerciseUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributes = {
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  resetPasswordToken?: string;
  registrationToken?: string;
  isActive?: boolean;
  roles?: ExerciseUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRoles;
  blocked?: boolean;
  preferedLanguage?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: ExerciseUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesCreatedBy;
  updatedBy?: ExerciseUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesUpdatedBy;
};