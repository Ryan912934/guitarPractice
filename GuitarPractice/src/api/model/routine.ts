/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { RoutineUser } from './routineUser';
import type { RoutineCreatedBy } from './routineCreatedBy';
import type { RoutineUpdatedBy } from './routineUpdatedBy';

export interface Routine {
  name?: string;
  user?: RoutineUser;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: RoutineCreatedBy;
  updatedBy?: RoutineUpdatedBy;
}