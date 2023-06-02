import { TailSpin } from 'react-loader-spinner';
import css from './Loader.module.css'

export const Loader = () => {
    return <TailSpin
                height="100%"
                width="20%"
                color="rgb(145, 44, 19)"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass={css.SpinerContainer}
                visible={true}
            />   
}