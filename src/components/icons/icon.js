import React from "react";
import PropTypes from 'prop-types';
import {
    IconGitHub
} from "../../components/icons";

const Icon = ({ name }) => {
    switch (name) {
        case 'GitHub':
            return <IconGitHub />;
        default:
            return '';
    }
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Icon;