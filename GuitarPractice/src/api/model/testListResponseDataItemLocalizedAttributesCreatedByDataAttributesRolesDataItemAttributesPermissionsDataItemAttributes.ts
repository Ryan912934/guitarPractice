/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { TestListResponseDataItemLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRole } from './testListResponseDataItemLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRole';
import type { TestListResponseDataItemLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedBy } from './testListResponseDataItemLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedBy';
import type { TestListResponseDataItemLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedBy } from './testListResponseDataItemLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedBy';

export type TestListResponseDataItemLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributes = {
  action?: string;
  subject?: string;
  properties?: unknown;
  conditions?: unknown;
  role?: TestListResponseDataItemLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRole;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: TestListResponseDataItemLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedBy;
  updatedBy?: TestListResponseDataItemLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedBy;
};