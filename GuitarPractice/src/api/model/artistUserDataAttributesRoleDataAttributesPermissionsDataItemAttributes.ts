/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { ArtistUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesRole } from './artistUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesRole';
import type { ArtistUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedBy } from './artistUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedBy';
import type { ArtistUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesUpdatedBy } from './artistUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesUpdatedBy';

export type ArtistUserDataAttributesRoleDataAttributesPermissionsDataItemAttributes = {
  action?: string;
  role?: ArtistUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesRole;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: ArtistUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesCreatedBy;
  updatedBy?: ArtistUserDataAttributesRoleDataAttributesPermissionsDataItemAttributesUpdatedBy;
};
