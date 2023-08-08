import React, {Component} from "react";
import css from "./ListContacts.module.css";

class ListContacts extends Component {
    render() {
        
        return (
            <ol className={css.listBox}>
                {this.props.contacts.map(item => {
                   return <li className={css["list-item"]} key={item.id}><span>{item.name}:</span> <span>{item.number}</span><button data-id={item.id} type="button" onClick={(event)=>{this.props.deleteContact(event)}}>Del</button></li>;
                })}
            </ol>
        )
    }
}

export default ListContacts;