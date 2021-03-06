const PropTypes = require('prop-types');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const src = require("../assets/img/wairoa_logo_280x70.png");
const assign = require('object-assign');

class Attribution extends React.Component {
    static propTypes = {
        src: PropTypes.string,
        style: PropTypes.object
    };

    static defaultProps = {
        src: src,
        style: {
            position: "absolute",
            width: "124px",
            left: 0,
            bottom: 0
        }
    };

    render() {

        return (<img
                src={this.props.src}
                style={this.props.style} />);
    }
}

module.exports = {
    AttributionPlugin: assign(Attribution, {
        OmniBar: {
            position: 1,
            tool: () => <div className="navbar-header"><img className="customer-logo" src={src} height="36" /></div>,
            priority: 1
        }
    })
};
