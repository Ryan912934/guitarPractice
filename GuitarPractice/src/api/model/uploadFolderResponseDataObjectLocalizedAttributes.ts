/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { UploadFolderResponseDataObjectLocalizedAttributesParent } from './uploadFolderResponseDataObjectLocalizedAttributesParent';
import type { UploadFolderResponseDataObjectLocalizedAttributesChildren } from './uploadFolderResponseDataObjectLocalizedAttributesChildren';
import type { UploadFolderResponseDataObjectLocalizedAttributesFiles } from './uploadFolderResponseDataObjectLocalizedAttributesFiles';
import type { UploadFolderResponseDataObjectLocalizedAttributesCreatedBy } from './uploadFolderResponseDataObjectLocalizedAttributesCreatedBy';
import type { UploadFolderResponseDataObjectLocalizedAttributesUpdatedBy } from './uploadFolderResponseDataObjectLocalizedAttributesUpdatedBy';

export type UploadFolderResponseDataObjectLocalizedAttributes = {
  name?: string;
  pathId?: number;
  parent?: UploadFolderResponseDataObjectLocalizedAttributesParent;
  children?: UploadFolderResponseDataObjectLocalizedAttributesChildren;
  files?: UploadFolderResponseDataObjectLocalizedAttributesFiles;
  path?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: UploadFolderResponseDataObjectLocalizedAttributesCreatedBy;
  updatedBy?: UploadFolderResponseDataObjectLocalizedAttributesUpdatedBy;
};