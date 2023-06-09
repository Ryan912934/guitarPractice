/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { UploadFileListResponseDataItemLocalizedAttributesRelated } from './uploadFileListResponseDataItemLocalizedAttributesRelated';
import type { UploadFileListResponseDataItemLocalizedAttributesFolder } from './uploadFileListResponseDataItemLocalizedAttributesFolder';
import type { UploadFileListResponseDataItemLocalizedAttributesCreatedBy } from './uploadFileListResponseDataItemLocalizedAttributesCreatedBy';
import type { UploadFileListResponseDataItemLocalizedAttributesUpdatedBy } from './uploadFileListResponseDataItemLocalizedAttributesUpdatedBy';

export type UploadFileListResponseDataItemLocalizedAttributes = {
  name?: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: unknown;
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
  url?: string;
  previewUrl?: string;
  provider?: string;
  provider_metadata?: unknown;
  related?: UploadFileListResponseDataItemLocalizedAttributesRelated;
  folder?: UploadFileListResponseDataItemLocalizedAttributesFolder;
  folderPath?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: UploadFileListResponseDataItemLocalizedAttributesCreatedBy;
  updatedBy?: UploadFileListResponseDataItemLocalizedAttributesUpdatedBy;
};
