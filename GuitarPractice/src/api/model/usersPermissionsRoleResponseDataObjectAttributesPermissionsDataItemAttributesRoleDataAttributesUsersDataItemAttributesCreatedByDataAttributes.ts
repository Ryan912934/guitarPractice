/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { UsersPermissionsRoleResponseDataObjectAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesCreatedByDataAttributesRoles } from './usersPermissionsRoleResponseDataObjectAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesCreatedByDataAttributesRoles';
import type { UsersPermissionsRoleResponseDataObjectAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesCreatedByDataAttributesCreatedBy } from './usersPermissionsRoleResponseDataObjectAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesCreatedByDataAttributesCreatedBy';
import type { UsersPermissionsRoleResponseDataObjectAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesCreatedByDataAttributesUpdatedBy } from './usersPermissionsRoleResponseDataObjectAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesCreatedByDataAttributesUpdatedBy';

export type UsersPermissionsRoleResponseDataObjectAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesCreatedByDataAttributes = {
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  resetPasswordToken?: string;
  registrationToken?: string;
  isActive?: boolean;
  roles?: UsersPermissionsRoleResponseDataObjectAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesCreatedByDataAttributesRoles;
  blocked?: boolean;
  preferedLanguage?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: UsersPermissionsRoleResponseDataObjectAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesCreatedByDataAttributesCreatedBy;
  updatedBy?: UsersPermissionsRoleResponseDataObjectAttributesPermissionsDataItemAttributesRoleDataAttributesUsersDataItemAttributesCreatedByDataAttributesUpdatedBy;
};