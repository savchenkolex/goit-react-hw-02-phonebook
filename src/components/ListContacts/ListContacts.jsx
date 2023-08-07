import React, {Component} from "react";
import css from "./ListContacts.module.css";

class ListContacts extends Component {
    render() {
        return (
            <ol className={css.listBox}>
                <li className={css["list-item"]}>lis</li>
                <li className={css["list-item"]}>bro</li>
            </ol>
        )
    }
}

export default ListContacts;