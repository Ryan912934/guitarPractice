/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { UsersPermissionsUserResponseDataObjectAttributesRoleDataAttributesPermissions } from './usersPermissionsUserResponseDataObjectAttributesRoleDataAttributesPermissions';
import type { UsersPermissionsUserResponseDataObjectAttributesRoleDataAttributesUsers } from './usersPermissionsUserResponseDataObjectAttributesRoleDataAttributesUsers';
import type { UsersPermissionsUserResponseDataObjectAttributesRoleDataAttributesCreatedBy } from './usersPermissionsUserResponseDataObjectAttributesRoleDataAttributesCreatedBy';
import type { UsersPermissionsUserResponseDataObjectAttributesRoleDataAttributesUpdatedBy } from './usersPermissionsUserResponseDataObjectAttributesRoleDataAttributesUpdatedBy';

export type UsersPermissionsUserResponseDataObjectAttributesRoleDataAttributes = {
  name?: string;
  description?: string;
  type?: string;
  permissions?: UsersPermissionsUserResponseDataObjectAttributesRoleDataAttributesPermissions;
  users?: UsersPermissionsUserResponseDataObjectAttributesRoleDataAttributesUsers;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: UsersPermissionsUserResponseDataObjectAttributesRoleDataAttributesCreatedBy;
  updatedBy?: UsersPermissionsUserResponseDataObjectAttributesRoleDataAttributesUpdatedBy;
};
