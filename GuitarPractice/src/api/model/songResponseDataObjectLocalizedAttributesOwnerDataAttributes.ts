/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { SongResponseDataObjectLocalizedAttributesOwnerDataAttributesRole } from './songResponseDataObjectLocalizedAttributesOwnerDataAttributesRole';
import type { SongResponseDataObjectLocalizedAttributesOwnerDataAttributesCreatedBy } from './songResponseDataObjectLocalizedAttributesOwnerDataAttributesCreatedBy';
import type { SongResponseDataObjectLocalizedAttributesOwnerDataAttributesUpdatedBy } from './songResponseDataObjectLocalizedAttributesOwnerDataAttributesUpdatedBy';

export type SongResponseDataObjectLocalizedAttributesOwnerDataAttributes = {
  username?: string;
  email?: string;
  provider?: string;
  resetPasswordToken?: string;
  confirmationToken?: string;
  confirmed?: boolean;
  blocked?: boolean;
  role?: SongResponseDataObjectLocalizedAttributesOwnerDataAttributesRole;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: SongResponseDataObjectLocalizedAttributesOwnerDataAttributesCreatedBy;
  updatedBy?: SongResponseDataObjectLocalizedAttributesOwnerDataAttributesUpdatedBy;
};
