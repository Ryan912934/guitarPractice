/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { SongUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsers } from './songUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsers';
import type { SongUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissions } from './songUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissions';
import type { SongUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedBy } from './songUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedBy';
import type { SongUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedBy } from './songUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedBy';

export type SongUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRolesDataItemAttributes = {
  name?: string;
  code?: string;
  description?: string;
  users?: SongUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsers;
  permissions?: SongUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissions;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: SongUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedBy;
  updatedBy?: SongUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedBy;
};