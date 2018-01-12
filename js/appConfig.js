/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
    pages: [{
        name: "home",
        path: "/",
        component: require('../MapStore2/web/client/product/pages/Maps')
    }, {
        name: "maps",
        path: "/maps",
        component: require('../MapStore2/web/client/product/pages/Maps')
    }, {
        name: "mapviewer",
        path: "/viewer/:mapType/:mapId",
        component: require('../MapStore2/web/client/product/pages/MapViewer')
    }, {
        name: "manager",
        path: "/manager",
        component: require('../MapStore2/web/client/product/pages/Manager')
    }, {
        name: "manager",
        path: "/manager/:tool",
        component: require('../MapStore2/web/client/product/pages/Manager')
    }],
    initialState: {
        defaultState: {
            theme: {
                selectedTheme: {
                    id: "wdc"
                }
            },
            mousePosition: {enabled: false},
            controls: {
                help: {
                    enabled: false
                },
                print: {
                    enabled: false
                },
                toolbar: {
                    active: null,
                    expanded: false
                },
                drawer: {
                    enabled: false,
                    menu: "1"
                },
                RefreshLayers: {
                    enabled: false,
                    options: {
                        bbox: true,
                        search: true,
                        title: false,
                        dimensions: false
                    }
                },
                cookie: {
                    enabled: false,
                    seeMore: false
                }
            }
        },
        mobile: {
            mapInfo: {enabled: true, infoFormat: 'application/json' },
            mousePosition: {enabled: true, crs: "EPSG:4326", showCenter: true}
        }
    },
    storeOpts: {
        persist: {
            whitelist: ['security']
        }
    }
};
