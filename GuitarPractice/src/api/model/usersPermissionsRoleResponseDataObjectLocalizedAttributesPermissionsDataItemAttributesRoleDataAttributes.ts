/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { UsersPermissionsRoleResponseDataObjectLocalizedAttributesPermissionsDataItemAttributesRoleDataAttributesPermissions } from './usersPermissionsRoleResponseDataObjectLocalizedAttributesPermissionsDataItemAttributesRoleDataAttributesPermissions';
import type { UsersPermissionsRoleResponseDataObjectLocalizedAttributesPermissionsDataItemAttributesRoleDataAttributesUsers } from './usersPermissionsRoleResponseDataObjectLocalizedAttributesPermissionsDataItemAttributesRoleDataAttributesUsers';
import type { UsersPermissionsRoleResponseDataObjectLocalizedAttributesPermissionsDataItemAttributesRoleDataAttributesCreatedBy } from './usersPermissionsRoleResponseDataObjectLocalizedAttributesPermissionsDataItemAttributesRoleDataAttributesCreatedBy';
import type { UsersPermissionsRoleResponseDataObjectLocalizedAttributesPermissionsDataItemAttributesRoleDataAttributesUpdatedBy } from './usersPermissionsRoleResponseDataObjectLocalizedAttributesPermissionsDataItemAttributesRoleDataAttributesUpdatedBy';

export type UsersPermissionsRoleResponseDataObjectLocalizedAttributesPermissionsDataItemAttributesRoleDataAttributes = {
  name?: string;
  description?: string;
  type?: string;
  permissions?: UsersPermissionsRoleResponseDataObjectLocalizedAttributesPermissionsDataItemAttributesRoleDataAttributesPermissions;
  users?: UsersPermissionsRoleResponseDataObjectLocalizedAttributesPermissionsDataItemAttributesRoleDataAttributesUsers;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: UsersPermissionsRoleResponseDataObjectLocalizedAttributesPermissionsDataItemAttributesRoleDataAttributesCreatedBy;
  updatedBy?: UsersPermissionsRoleResponseDataObjectLocalizedAttributesPermissionsDataItemAttributesRoleDataAttributesUpdatedBy;
};
