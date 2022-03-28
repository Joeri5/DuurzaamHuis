import React from 'react';
import {Link} from "react-router-dom";

function divWithClasses(...classes) {
    return function (props) {
        return <div className={classes.join(" ")} {...props}>{props.children}</div>
    }
}

function imgWithClasses(...classes) {
    return function (props) {
        return <img className={classes.join(" ")} alt="Kan niet inladen" {...props} />
    }
}

function linkWithClasses(...classes) {
    return function (props) {
        return <Link className={classes.join(" ")} {...props}>{props.children}</Link>
    }
}

function imageWithClasses(...classes) {
    return function (props) {
        return <img className={classes.join(" ")} {...props} alt="Unable to load" />
    }
}

function spanWithClasses(...classes) {
    return function (props) {
        return <span className={classes.join(" ")} {...props}>{props.children}</span>
    }
}

export { divWithClasses, imgWithClasses, linkWithClasses, imageWithClasses, spanWithClasses };
