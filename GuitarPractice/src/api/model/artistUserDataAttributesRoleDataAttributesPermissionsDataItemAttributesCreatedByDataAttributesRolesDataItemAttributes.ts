/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { ArtistUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsers } from './artistUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsers';
import type { ArtistUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissions } from './artistUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissions';
import type { ArtistUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedBy } from './artistUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedBy';
import type { ArtistUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedBy } from './artistUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedBy';

export type ArtistUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRolesDataItemAttributes = {
  name?: string;
  code?: string;
  description?: string;
  users?: ArtistUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUsers;
  permissions?: ArtistUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissions;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: ArtistUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedBy;
  updatedBy?: ArtistUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedBy;
};
