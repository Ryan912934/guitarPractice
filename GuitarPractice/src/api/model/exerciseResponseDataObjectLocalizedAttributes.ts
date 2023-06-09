/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { ExerciseResponseDataObjectLocalizedAttributesOwner } from './exerciseResponseDataObjectLocalizedAttributesOwner';
import type { ExerciseResponseDataObjectLocalizedAttributesTab } from './exerciseResponseDataObjectLocalizedAttributesTab';
import type { ExerciseResponseDataObjectLocalizedAttributesTags } from './exerciseResponseDataObjectLocalizedAttributesTags';
import type { ExerciseResponseDataObjectLocalizedAttributesCreatedBy } from './exerciseResponseDataObjectLocalizedAttributesCreatedBy';
import type { ExerciseResponseDataObjectLocalizedAttributesUpdatedBy } from './exerciseResponseDataObjectLocalizedAttributesUpdatedBy';

export type ExerciseResponseDataObjectLocalizedAttributes = {
  Name?: string;
  Description?: string;
  Owner?: ExerciseResponseDataObjectLocalizedAttributesOwner;
  video?: string;
  metronome?: boolean;
  tab?: ExerciseResponseDataObjectLocalizedAttributesTab;
  guide?: string;
  tags?: ExerciseResponseDataObjectLocalizedAttributesTags;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: ExerciseResponseDataObjectLocalizedAttributesCreatedBy;
  updatedBy?: ExerciseResponseDataObjectLocalizedAttributesUpdatedBy;
};
