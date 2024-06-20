/**
 * Inferred data types from OPTA SDAPI endpoints.
 *
 * Data types provided by OPTA's [Swagger schema](https://documentation.statsperform.com/docs/sdapi-swagger/sdapi-swagger-soccer/index.html) are [known to be incorrect](https://github.com/reuters-graphics/sportlich/issues/3).
 * These types are created using [quicktype](https://quicktype.io/) and data samples pulled
 * directly from SDAPI endpoints (for those endpoints Reuters subscribed to).
 *
 * You can re-create the types by running:
 *
 * ```console
 * pnpm gen:types
 * ```
 *
 * **🚨 NOTE:** Enums included in these types may **not be exhaustive**, especially those inferred from UUIDs.
 *
 * ## Types by sport
 *
 * ### ⚽ Soccer
 *
 * Soccer types are generated from data samples from the following past international tournaments:
 *
 * - European Championship: 2020, 2024
 * - World Cup: 2022
 *
 *
 * @packageDocumentation
 */
export * as soccer from './soccer/index.js';
