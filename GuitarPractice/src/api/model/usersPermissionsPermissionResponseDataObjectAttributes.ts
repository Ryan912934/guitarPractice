/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { UsersPermissionsPermissionResponseDataObjectAttributesRole } from './usersPermissionsPermissionResponseDataObjectAttributesRole';
import type { UsersPermissionsPermissionResponseDataObjectAttributesCreatedBy } from './usersPermissionsPermissionResponseDataObjectAttributesCreatedBy';
import type { UsersPermissionsPermissionResponseDataObjectAttributesUpdatedBy } from './usersPermissionsPermissionResponseDataObjectAttributesUpdatedBy';

export type UsersPermissionsPermissionResponseDataObjectAttributes = {
  action?: string;
  role?: UsersPermissionsPermissionResponseDataObjectAttributesRole;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: UsersPermissionsPermissionResponseDataObjectAttributesCreatedBy;
  updatedBy?: UsersPermissionsPermissionResponseDataObjectAttributesUpdatedBy;
};
