/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { UploadFileListResponseDataItemAttributesFolderDataAttributesFilesDataItemAttributesRelated } from './uploadFileListResponseDataItemAttributesFolderDataAttributesFilesDataItemAttributesRelated';
import type { UploadFileListResponseDataItemAttributesFolderDataAttributesFilesDataItemAttributesFolder } from './uploadFileListResponseDataItemAttributesFolderDataAttributesFilesDataItemAttributesFolder';
import type { UploadFileListResponseDataItemAttributesFolderDataAttributesFilesDataItemAttributesCreatedBy } from './uploadFileListResponseDataItemAttributesFolderDataAttributesFilesDataItemAttributesCreatedBy';
import type { UploadFileListResponseDataItemAttributesFolderDataAttributesFilesDataItemAttributesUpdatedBy } from './uploadFileListResponseDataItemAttributesFolderDataAttributesFilesDataItemAttributesUpdatedBy';

export type UploadFileListResponseDataItemAttributesFolderDataAttributesFilesDataItemAttributes = {
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
  related?: UploadFileListResponseDataItemAttributesFolderDataAttributesFilesDataItemAttributesRelated;
  folder?: UploadFileListResponseDataItemAttributesFolderDataAttributesFilesDataItemAttributesFolder;
  folderPath?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: UploadFileListResponseDataItemAttributesFolderDataAttributesFilesDataItemAttributesCreatedBy;
  updatedBy?: UploadFileListResponseDataItemAttributesFolderDataAttributesFilesDataItemAttributesUpdatedBy;
};
