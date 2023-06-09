/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { ExerciseHistoryResponseDataObjectAttributesExercise } from './exerciseHistoryResponseDataObjectAttributesExercise';
import type { ExerciseHistoryResponseDataObjectAttributesOwner } from './exerciseHistoryResponseDataObjectAttributesOwner';
import type { ExerciseHistoryResponseDataObjectAttributesCreatedBy } from './exerciseHistoryResponseDataObjectAttributesCreatedBy';
import type { ExerciseHistoryResponseDataObjectAttributesUpdatedBy } from './exerciseHistoryResponseDataObjectAttributesUpdatedBy';

export type ExerciseHistoryResponseDataObjectAttributes = {
  BPM?: number;
  speed?: string;
  comments?: string;
  exercise?: ExerciseHistoryResponseDataObjectAttributesExercise;
  owner?: ExerciseHistoryResponseDataObjectAttributesOwner;
  lengthMinutes?: number;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: ExerciseHistoryResponseDataObjectAttributesCreatedBy;
  updatedBy?: ExerciseHistoryResponseDataObjectAttributesUpdatedBy;
};
