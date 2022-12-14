"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDistDirectory = exports.renderAltair = exports.renderInitialOptions = void 0;
const get_altair_html_1 = require("./utils/get-altair-html");
/**
 * Render Altair Initial options as a string using the provided renderOptions
 * @param renderOptions
 */
exports.renderInitialOptions = (options = {}) => {
    return `
        AltairGraphQL.init(${getRenderedAltairOpts(options, [
        'endpointURL',
        'subscriptionsEndpoint',
        'initialQuery',
        'initialVariables',
        'initialPreRequestScript',
        'initialPostRequestScript',
        'initialHeaders',
        'initialEnvironments',
        'instanceStorageNamespace',
        'initialSettings',
        'initialSubscriptionsProvider',
        'initialSubscriptionsPayload',
        'preserveState',
        'initialHttpMethod',
        'initialWindows',
    ])});
    `;
};
/**
 * Render Altair as a string using the provided renderOptions
 * @param renderOptions
 */
exports.renderAltair = (options = {}) => {
    const altairHtml = get_altair_html_1.default();
    const initialOptions = exports.renderInitialOptions(options);
    const baseURL = options.baseURL || './';
    if (options.serveInitialOptionsInSeperateRequest) {
        return altairHtml
            .replace(/<base.*>/, `<base href="${baseURL}">`)
            .replace('</body>', `<script src="initial_options.js"></script></body>`);
    }
    else {
        return altairHtml
            .replace(/<base.*>/, `<base href="${baseURL}">`)
            .replace('</body>', `<script>${initialOptions}</script></body>`);
    }
};
const getRenderedAltairOpts = (renderOptions, keys) => {
    const optProps = Object.keys(renderOptions)
        .filter((key) => keys.includes(key))
        .map(key => getObjectPropertyForOption(renderOptions[key], key));
    return ['{', ...optProps, '}'].join('\n');
};
function getObjectPropertyForOption(option, propertyName) {
    if (typeof option !== 'undefined') {
        switch (typeof option) {
            case 'object':
                return `${propertyName}: ${JSON.stringify(option)},`;
            case 'boolean':
                return `${propertyName}: ${option},`;
        }
        return `${propertyName}: \`${option}\`,`;
    }
    return '';
}
var get_dist_1 = require("./utils/get-dist");
Object.defineProperty(exports, "getDistDirectory", { enumerable: true, get: function () { return get_dist_1.getDistDirectory; } });
exports.default = exports.renderAltair;
//# sourceMappingURL=index.js.map