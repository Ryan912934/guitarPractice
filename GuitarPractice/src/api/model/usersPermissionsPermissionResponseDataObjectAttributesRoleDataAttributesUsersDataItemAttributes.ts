/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { UsersPermissionsPermissionResponseDataObjectAttributesRoleDataAttributesUsersDataItemAttributesRole } from './usersPermissionsPermissionResponseDataObjectAttributesRoleDataAttributesUsersDataItemAttributesRole';
import type { UsersPermissionsPermissionResponseDataObjectAttributesRoleDataAttributesUsersDataItemAttributesCreatedBy } from './usersPermissionsPermissionResponseDataObjectAttributesRoleDataAttributesUsersDataItemAttributesCreatedBy';
import type { UsersPermissionsPermissionResponseDataObjectAttributesRoleDataAttributesUsersDataItemAttributesUpdatedBy } from './usersPermissionsPermissionResponseDataObjectAttributesRoleDataAttributesUsersDataItemAttributesUpdatedBy';

export type UsersPermissionsPermissionResponseDataObjectAttributesRoleDataAttributesUsersDataItemAttributes = {
  username?: string;
  email?: string;
  provider?: string;
  resetPasswordToken?: string;
  confirmationToken?: string;
  confirmed?: boolean;
  blocked?: boolean;
  role?: UsersPermissionsPermissionResponseDataObjectAttributesRoleDataAttributesUsersDataItemAttributesRole;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: UsersPermissionsPermissionResponseDataObjectAttributesRoleDataAttributesUsersDataItemAttributesCreatedBy;
  updatedBy?: UsersPermissionsPermissionResponseDataObjectAttributesRoleDataAttributesUsersDataItemAttributesUpdatedBy;
};
