/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { SongUser } from './songUser';
import type { SongArtist } from './songArtist';
import type { LearningTypeLearningTypeComponent } from './learningTypeLearningTypeComponent';
import type { SongCreatedBy } from './songCreatedBy';
import type { SongUpdatedBy } from './songUpdatedBy';

export interface Song {
  title: string;
  user?: SongUser;
  artist?: SongArtist;
  status?: LearningTypeLearningTypeComponent;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: SongCreatedBy;
  updatedBy?: SongUpdatedBy;
}
