import React, {Component} from "react";
import css from "./ListContacts.module.css";

class ListContacts extends Component {
    render() {
        return (
            <ol className={css.listBox}>
                {this.props.contacts.map(item => {
                   return <li key={item.id}>{item.name}: {item.number}</li>;
                })}
            </ol>
        )
    }
}

export default ListContacts;