/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { ExerciseRequestDataUser } from './exerciseRequestDataUser';
import type { LearningTypeLearningTypeComponent } from './learningTypeLearningTypeComponent';

export type ExerciseRequestData = {
  name: string;
  description: string;
  user?: ExerciseRequestDataUser;
  songStatus?: LearningTypeLearningTypeComponent;
};
