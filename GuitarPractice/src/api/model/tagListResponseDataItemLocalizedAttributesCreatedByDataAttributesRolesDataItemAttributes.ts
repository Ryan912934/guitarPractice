/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { TagListResponseDataItemLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesUsers } from './tagListResponseDataItemLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesUsers';
import type { TagListResponseDataItemLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesPermissions } from './tagListResponseDataItemLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesPermissions';
import type { TagListResponseDataItemLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedBy } from './tagListResponseDataItemLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedBy';
import type { TagListResponseDataItemLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedBy } from './tagListResponseDataItemLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedBy';

export type TagListResponseDataItemLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributes = {
  name?: string;
  code?: string;
  description?: string;
  users?: TagListResponseDataItemLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesUsers;
  permissions?: TagListResponseDataItemLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesPermissions;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: TagListResponseDataItemLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedBy;
  updatedBy?: TagListResponseDataItemLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedBy;
};
