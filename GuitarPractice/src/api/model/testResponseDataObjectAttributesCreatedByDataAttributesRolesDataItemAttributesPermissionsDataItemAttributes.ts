/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { TestResponseDataObjectAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRole } from './testResponseDataObjectAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRole';
import type { TestResponseDataObjectAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedBy } from './testResponseDataObjectAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedBy';
import type { TestResponseDataObjectAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedBy } from './testResponseDataObjectAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedBy';

export type TestResponseDataObjectAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributes = {
  action?: string;
  subject?: string;
  properties?: unknown;
  conditions?: unknown;
  role?: TestResponseDataObjectAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesRole;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: TestResponseDataObjectAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesCreatedBy;
  updatedBy?: TestResponseDataObjectAttributesCreatedByDataAttributesRolesDataItemAttributesPermissionsDataItemAttributesUpdatedBy;
};
