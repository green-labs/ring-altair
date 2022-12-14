import { AltairConfigOptions } from 'altair-graphql-core/build/config';
export interface RenderOptions extends AltairConfigOptions {
    /**
     * URL to be used as a base for relative URLs
     */
    baseURL?: string;
    /**
     * Whether to render the initial options in a seperate javascript file or not.
     * Use this to be able to enforce strict CSP rules.
     * @default false
     */
    serveInitialOptionsInSeperateRequest?: boolean;
}
/**
 * Render Altair Initial options as a string using the provided renderOptions
 * @param renderOptions
 */
export declare const renderInitialOptions: (options?: RenderOptions) => string;
/**
 * Render Altair as a string using the provided renderOptions
 * @param renderOptions
 */
export declare const renderAltair: (options?: RenderOptions) => string;
export { getDistDirectory } from './utils/get-dist';
export default renderAltair;
//# sourceMappingURL=index.d.ts.map