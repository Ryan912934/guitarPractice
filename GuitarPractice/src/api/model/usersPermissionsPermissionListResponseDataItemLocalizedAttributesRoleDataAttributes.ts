/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { UsersPermissionsPermissionListResponseDataItemLocalizedAttributesRoleDataAttributesPermissions } from './usersPermissionsPermissionListResponseDataItemLocalizedAttributesRoleDataAttributesPermissions';
import type { UsersPermissionsPermissionListResponseDataItemLocalizedAttributesRoleDataAttributesUsers } from './usersPermissionsPermissionListResponseDataItemLocalizedAttributesRoleDataAttributesUsers';
import type { UsersPermissionsPermissionListResponseDataItemLocalizedAttributesRoleDataAttributesCreatedBy } from './usersPermissionsPermissionListResponseDataItemLocalizedAttributesRoleDataAttributesCreatedBy';
import type { UsersPermissionsPermissionListResponseDataItemLocalizedAttributesRoleDataAttributesUpdatedBy } from './usersPermissionsPermissionListResponseDataItemLocalizedAttributesRoleDataAttributesUpdatedBy';

export type UsersPermissionsPermissionListResponseDataItemLocalizedAttributesRoleDataAttributes = {
  name?: string;
  description?: string;
  type?: string;
  permissions?: UsersPermissionsPermissionListResponseDataItemLocalizedAttributesRoleDataAttributesPermissions;
  users?: UsersPermissionsPermissionListResponseDataItemLocalizedAttributesRoleDataAttributesUsers;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: UsersPermissionsPermissionListResponseDataItemLocalizedAttributesRoleDataAttributesCreatedBy;
  updatedBy?: UsersPermissionsPermissionListResponseDataItemLocalizedAttributesRoleDataAttributesUpdatedBy;
};