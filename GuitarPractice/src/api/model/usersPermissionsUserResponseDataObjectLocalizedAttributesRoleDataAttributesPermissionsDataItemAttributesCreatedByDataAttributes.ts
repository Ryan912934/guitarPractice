/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { UsersPermissionsUserResponseDataObjectLocalizedAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRoles } from './usersPermissionsUserResponseDataObjectLocalizedAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRoles';
import type { UsersPermissionsUserResponseDataObjectLocalizedAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesCreatedBy } from './usersPermissionsUserResponseDataObjectLocalizedAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesCreatedBy';
import type { UsersPermissionsUserResponseDataObjectLocalizedAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesUpdatedBy } from './usersPermissionsUserResponseDataObjectLocalizedAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesUpdatedBy';

export type UsersPermissionsUserResponseDataObjectLocalizedAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributes = {
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  resetPasswordToken?: string;
  registrationToken?: string;
  isActive?: boolean;
  roles?: UsersPermissionsUserResponseDataObjectLocalizedAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRoles;
  blocked?: boolean;
  preferedLanguage?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: UsersPermissionsUserResponseDataObjectLocalizedAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesCreatedBy;
  updatedBy?: UsersPermissionsUserResponseDataObjectLocalizedAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesUpdatedBy;
};