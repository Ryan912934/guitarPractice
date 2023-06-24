/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */

export type GetTagsParams = {
/**
 * Sort by attributes ascending (asc) or descending (desc)
 */
sort?: string;
/**
 * Return page/pageSize (default: true)
 */
'pagination[withCount]'?: boolean;
/**
 * Page number (default: 0)
 */
'pagination[page]'?: number;
/**
 * Page size (default: 25)
 */
'pagination[pageSize]'?: number;
/**
 * Offset value (default: 0)
 */
'pagination[start]'?: number;
/**
 * Number of entities to return (default: 25)
 */
'pagination[limit]'?: number;
/**
 * Fields to return (ex: title,author)
 */
fields?: string;
/**
 * Relations to return
 */
populate?: string;
/**
 * Filters to apply
 */
filters?: { [key: string]: any };
/**
 * Locale to apply
 */
locale?: string;
};
