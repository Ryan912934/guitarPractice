/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { TestResponseDataObjectLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesUsers } from './testResponseDataObjectLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesUsers';
import type { TestResponseDataObjectLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesPermissions } from './testResponseDataObjectLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesPermissions';
import type { TestResponseDataObjectLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedBy } from './testResponseDataObjectLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedBy';
import type { TestResponseDataObjectLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedBy } from './testResponseDataObjectLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedBy';

export type TestResponseDataObjectLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributes = {
  name?: string;
  code?: string;
  description?: string;
  users?: TestResponseDataObjectLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesUsers;
  permissions?: TestResponseDataObjectLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesPermissions;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: TestResponseDataObjectLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesCreatedBy;
  updatedBy?: TestResponseDataObjectLocalizedAttributesCreatedByDataAttributesRolesDataItemAttributesUpdatedBy;
};
