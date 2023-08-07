import css from './Section.module.css';

export default function Section(props) {
  return (
    <section className={css.section}>
      <div className={css.container}>
        {props.title && (<h2 className={css.title}>{props.title}</h2>)}
        {props.children}
      </div>
    </section>
  );
}
