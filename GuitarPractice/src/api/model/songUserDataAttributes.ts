/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { SongUserDataAttributesRole } from './songUserDataAttributesRole';
import type { SongUserDataAttributesCreatedBy } from './songUserDataAttributesCreatedBy';
import type { SongUserDataAttributesUpdatedBy } from './songUserDataAttributesUpdatedBy';

export type SongUserDataAttributes = {
  username?: string;
  email?: string;
  provider?: string;
  resetPasswordToken?: string;
  confirmationToken?: string;
  confirmed?: boolean;
  blocked?: boolean;
  role?: SongUserDataAttributesRole;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: SongUserDataAttributesCreatedBy;
  updatedBy?: SongUserDataAttributesUpdatedBy;
};