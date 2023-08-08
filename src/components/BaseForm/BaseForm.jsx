import css from './BaseForm.module.css';

export default function BaseForm(props) {
  return (
    <form
      className={css.form}
      onSubmit={event => {
        props.fnSubmit(event);
      }}
    >
      <div className={css.fieldsbox}>
        <label className={css.label}>
          {/* {console.log(props)} */}
          <span>Name:</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={event => {
              props.fnInput(event);
            }}
            value={props.nameValue}
          />
        </label>
        <label className={css.label}>
        <span>Tel:</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
}
