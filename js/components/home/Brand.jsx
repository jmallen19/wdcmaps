/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');

const brand = require('../../assets/img/wairoa_logo_m.png');

class Brand extends React.Component {
    render() {
        return (<div>
            <a href="http://www.wairoadc.govt.nz">
                <img src={brand} className="mapstore-logo"/>
            </a>
        </div>);
    }
}

module.exports = Brand;
