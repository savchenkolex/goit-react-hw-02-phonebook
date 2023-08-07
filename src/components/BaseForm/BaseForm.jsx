import css from './BaseForm.module.css';

export default function BaseForm(props) {
  return (
    <form className={css.form} onSubmit={(event)=>{props.fnSubmit(event)}}>
      <label>
        {console.log(props)}
        <span>Add Name:</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <button type='submit'>Add Contact</button>
    </form>
  );
}
