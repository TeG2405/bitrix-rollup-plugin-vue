function PluginVue(userOptions) {
    const plugin = require('rollup-plugin-vue')(userOptions);
    return {
        ...plugin,
        load: function (id) {
            const result = plugin.load(id);
            if (result.code) {
                // TODO: Болше alias;
                return Object.assign(result, {
                    code: result.code.replace('from "vue"', 'from "ui.vue3"'),
                })
            }
            return result
        }
    }
}
exports.default = PluginVue;
module.exports = PluginVue;

