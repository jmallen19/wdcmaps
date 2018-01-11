/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
var React = require('react');

class Footer extends React.Component {
    render() {
        return (
            <div id="footer" style={{
                textAlign: "center"
            }}>
                <p align="center"><b><a href="http://www.wairoadc.govt.nz">Wairoa District Council</a></b> • Coronation Square, Queen Street, Wairoa - P O Box 54, Wairoa 4160, Hawke's Bay - New Zealand</p>
                <p align="center"><a href="mailto:administrator@wairoadc.govt.nz">administrator@wairoadc.govt.nz</a> • <a href="http://www.wairoadc.govt.nz">www.wairoadc.govt.nz</a> • Tel: +64 6 838 7309 • Fax: +64 6 838 8874</p>
            </div>
        );
    }
}

module.exports = Footer;
