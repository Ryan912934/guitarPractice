/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { ArtistUser } from './artistUser';
import type { ArtistCreatedBy } from './artistCreatedBy';
import type { ArtistUpdatedBy } from './artistUpdatedBy';

export interface Artist {
  name: string;
  user?: ArtistUser;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: ArtistCreatedBy;
  updatedBy?: ArtistUpdatedBy;
}
