/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { UsersPermissionsUserResponseDataObjectLocalizedAttributesRole } from './usersPermissionsUserResponseDataObjectLocalizedAttributesRole';
import type { UsersPermissionsUserResponseDataObjectLocalizedAttributesCreatedBy } from './usersPermissionsUserResponseDataObjectLocalizedAttributesCreatedBy';
import type { UsersPermissionsUserResponseDataObjectLocalizedAttributesUpdatedBy } from './usersPermissionsUserResponseDataObjectLocalizedAttributesUpdatedBy';

export type UsersPermissionsUserResponseDataObjectLocalizedAttributes = {
  username?: string;
  email?: string;
  provider?: string;
  resetPasswordToken?: string;
  confirmationToken?: string;
  confirmed?: boolean;
  blocked?: boolean;
  role?: UsersPermissionsUserResponseDataObjectLocalizedAttributesRole;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: UsersPermissionsUserResponseDataObjectLocalizedAttributesCreatedBy;
  updatedBy?: UsersPermissionsUserResponseDataObjectLocalizedAttributesUpdatedBy;
};
