/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { UsersPermissionsPermissionResponseDataObjectAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRoles } from './usersPermissionsPermissionResponseDataObjectAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRoles';
import type { UsersPermissionsPermissionResponseDataObjectAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesCreatedBy } from './usersPermissionsPermissionResponseDataObjectAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesCreatedBy';
import type { UsersPermissionsPermissionResponseDataObjectAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesUpdatedBy } from './usersPermissionsPermissionResponseDataObjectAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesUpdatedBy';

export type UsersPermissionsPermissionResponseDataObjectAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributes = {
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  resetPasswordToken?: string;
  registrationToken?: string;
  isActive?: boolean;
  roles?: UsersPermissionsPermissionResponseDataObjectAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRoles;
  blocked?: boolean;
  preferedLanguage?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: UsersPermissionsPermissionResponseDataObjectAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesCreatedBy;
  updatedBy?: UsersPermissionsPermissionResponseDataObjectAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesUpdatedBy;
};
