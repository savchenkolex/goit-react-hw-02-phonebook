import css from './QuickSearch.module.css';

export default function QuickSearch(props) {
  return (
    <form autoComplete="off">
        <input
            className={css["filter-input"]}
          type="text"
          name="filter"
          onChange={event => {
            props.fnInput(event);
          }}
          placeholder='Type for quick search'
        />
    </form>
  );
}
