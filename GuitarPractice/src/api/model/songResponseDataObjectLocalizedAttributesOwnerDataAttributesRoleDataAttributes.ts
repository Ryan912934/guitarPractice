/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { SongResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesPermissions } from './songResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesPermissions';
import type { SongResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesUsers } from './songResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesUsers';
import type { SongResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesCreatedBy } from './songResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesCreatedBy';
import type { SongResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesUpdatedBy } from './songResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesUpdatedBy';

export type SongResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributes = {
  name?: string;
  description?: string;
  type?: string;
  permissions?: SongResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesPermissions;
  users?: SongResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesUsers;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: SongResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesCreatedBy;
  updatedBy?: SongResponseDataObjectLocalizedAttributesOwnerDataAttributesRoleDataAttributesUpdatedBy;
};
