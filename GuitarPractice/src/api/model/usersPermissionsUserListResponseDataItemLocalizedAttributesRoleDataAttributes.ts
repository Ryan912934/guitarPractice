/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { UsersPermissionsUserListResponseDataItemLocalizedAttributesRoleDataAttributesPermissions } from './usersPermissionsUserListResponseDataItemLocalizedAttributesRoleDataAttributesPermissions';
import type { UsersPermissionsUserListResponseDataItemLocalizedAttributesRoleDataAttributesUsers } from './usersPermissionsUserListResponseDataItemLocalizedAttributesRoleDataAttributesUsers';
import type { UsersPermissionsUserListResponseDataItemLocalizedAttributesRoleDataAttributesCreatedBy } from './usersPermissionsUserListResponseDataItemLocalizedAttributesRoleDataAttributesCreatedBy';
import type { UsersPermissionsUserListResponseDataItemLocalizedAttributesRoleDataAttributesUpdatedBy } from './usersPermissionsUserListResponseDataItemLocalizedAttributesRoleDataAttributesUpdatedBy';

export type UsersPermissionsUserListResponseDataItemLocalizedAttributesRoleDataAttributes = {
  name?: string;
  description?: string;
  type?: string;
  permissions?: UsersPermissionsUserListResponseDataItemLocalizedAttributesRoleDataAttributesPermissions;
  users?: UsersPermissionsUserListResponseDataItemLocalizedAttributesRoleDataAttributesUsers;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: UsersPermissionsUserListResponseDataItemLocalizedAttributesRoleDataAttributesCreatedBy;
  updatedBy?: UsersPermissionsUserListResponseDataItemLocalizedAttributesRoleDataAttributesUpdatedBy;
};