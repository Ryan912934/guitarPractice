/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { TagListResponseDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRole } from './tagListResponseDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRole';
import type { TagListResponseDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedBy } from './tagListResponseDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedBy';
import type { TagListResponseDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedBy } from './tagListResponseDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedBy';

export type TagListResponseDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributes = {
  action?: string;
  subject?: string;
  properties?: unknown;
  conditions?: unknown;
  role?: TagListResponseDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRole;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: TagListResponseDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedBy;
  updatedBy?: TagListResponseDataItemAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedBy;
};
