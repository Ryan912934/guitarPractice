/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { UsersPermissionsPermissionListResponseDataItemAttributesRoleDataAttributesUsersDataItemAttributesRole } from './usersPermissionsPermissionListResponseDataItemAttributesRoleDataAttributesUsersDataItemAttributesRole';
import type { UsersPermissionsPermissionListResponseDataItemAttributesRoleDataAttributesUsersDataItemAttributesCreatedBy } from './usersPermissionsPermissionListResponseDataItemAttributesRoleDataAttributesUsersDataItemAttributesCreatedBy';
import type { UsersPermissionsPermissionListResponseDataItemAttributesRoleDataAttributesUsersDataItemAttributesUpdatedBy } from './usersPermissionsPermissionListResponseDataItemAttributesRoleDataAttributesUsersDataItemAttributesUpdatedBy';

export type UsersPermissionsPermissionListResponseDataItemAttributesRoleDataAttributesUsersDataItemAttributes = {
  username?: string;
  email?: string;
  provider?: string;
  resetPasswordToken?: string;
  confirmationToken?: string;
  confirmed?: boolean;
  blocked?: boolean;
  role?: UsersPermissionsPermissionListResponseDataItemAttributesRoleDataAttributesUsersDataItemAttributesRole;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: UsersPermissionsPermissionListResponseDataItemAttributesRoleDataAttributesUsersDataItemAttributesCreatedBy;
  updatedBy?: UsersPermissionsPermissionListResponseDataItemAttributesRoleDataAttributesUsersDataItemAttributesUpdatedBy;
};
