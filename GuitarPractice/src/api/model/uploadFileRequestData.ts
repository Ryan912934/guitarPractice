/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { UploadFileRequestDataRelatedItem } from './uploadFileRequestDataRelatedItem';
import type { UploadFileRequestDataFolder } from './uploadFileRequestDataFolder';

export type UploadFileRequestData = {
  name: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: unknown;
  hash: string;
  ext?: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: unknown;
  related?: UploadFileRequestDataRelatedItem[];
  folder?: UploadFileRequestDataFolder;
  folderPath: string;
};
