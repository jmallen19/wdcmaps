/*
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

const {connect} = require('react-redux');
const {selectTheme} = require('../../MapStore2/web/client/actions/theme');
const assign = require('object-assign');
const themes = require('../assets/themes');

const ThemeSwitcherPlugin = connect((s) => ({
    selectedTheme: s && s.theme && s.theme.selectedTheme || themes[0],
    themes
}), {
    onThemeSelected: selectTheme
})(require('../../MapStore2/web/client/components/theme/ThemeSwitcher'));

module.exports = {
    ThemeSwitcherPlugin: assign(ThemeSwitcherPlugin, {
        GridContainer: {
            id: 'themeSwitcher',
            name: 'themeSwitcher',
            tool: true,
            position: 1,
            priority: 1
        }
    }),
    reducers: {
        theme: require('../../MapStore2/web/client/reducers/theme')
    }
};
