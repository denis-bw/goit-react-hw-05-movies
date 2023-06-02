import css from './Error.module.css'

export const Error = () => {
    return <div className={css.Error_Container}>
        <p className={css.Error_Text}>An error has occurred</p>
    </div>
}