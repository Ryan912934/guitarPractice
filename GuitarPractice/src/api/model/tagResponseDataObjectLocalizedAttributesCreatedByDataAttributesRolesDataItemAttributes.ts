/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { TagResponseDataObjectLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesUsers } from './tagResponseDataObjectLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesUsers';
import type { TagResponseDataObjectLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesPermissions } from './tagResponseDataObjectLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesPermissions';
import type { TagResponseDataObjectLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedBy } from './tagResponseDataObjectLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedBy';
import type { TagResponseDataObjectLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedBy } from './tagResponseDataObjectLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedBy';

export type TagResponseDataObjectLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributes = {
  name?: string;
  code?: string;
  description?: string;
  users?: TagResponseDataObjectLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesUsers;
  permissions?: TagResponseDataObjectLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesPermissions;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: TagResponseDataObjectLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedBy;
  updatedBy?: TagResponseDataObjectLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedBy;
};