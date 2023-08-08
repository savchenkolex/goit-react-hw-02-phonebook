import css from "./QuickSearch.module.css";

export default function QuickSearch (props) {
    return (
        <form autoComplete="off" >
            <label>
                <span>Quick search: </span>
            <input type="text" name="filter" onChange={event => {
                props.fnInput(event);
            }} />
            </label>
        </form>
    )
}