/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const src = require("../assets/img/wairoa_logo_280x70.png");
// require('./footer/footer.css');

class Footer extends React.Component {
    render() {
        return (
            <div className="ms-footer col-md-12">
            <div><a target="_blank" href="https://www.wairoadc.govt.nz/"> <img src={src} width="140" title="Wairoa District Council" alt="Wairoa District Council" /></a></div>
                Wairoa District Council | Coronation Square, Queen Street, Wairoa - New Zealand | <a href="mailto:administrator@wairoadc.govt.nz">administrator@wairoadc.govt.nz</a> | Tel: +64 6 838 7309 | Fax: +64 6 838 8874
            </div>
        );
    }
}

module.exports = {
    FooterPlugin: Footer
};
