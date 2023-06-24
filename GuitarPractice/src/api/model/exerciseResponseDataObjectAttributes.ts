/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { ExerciseResponseDataObjectAttributesOwner } from './exerciseResponseDataObjectAttributesOwner';
import type { ExerciseResponseDataObjectAttributesTab } from './exerciseResponseDataObjectAttributesTab';
import type { ExerciseResponseDataObjectAttributesTags } from './exerciseResponseDataObjectAttributesTags';
import type { ExerciseResponseDataObjectAttributesCreatedBy } from './exerciseResponseDataObjectAttributesCreatedBy';
import type { ExerciseResponseDataObjectAttributesUpdatedBy } from './exerciseResponseDataObjectAttributesUpdatedBy';

export type ExerciseResponseDataObjectAttributes = {
  Name?: string;
  Description?: string;
  Owner?: ExerciseResponseDataObjectAttributesOwner;
  video?: string;
  metronome?: boolean;
  tab?: ExerciseResponseDataObjectAttributesTab;
  guide?: string;
  tags?: ExerciseResponseDataObjectAttributesTags;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: ExerciseResponseDataObjectAttributesCreatedBy;
  updatedBy?: ExerciseResponseDataObjectAttributesUpdatedBy;
};