import { useForm } from '../../../hooks/useForm';

import styles from './SearchBar.module.css';

const SearchFormKeys = {
    Search: 'search',
};

export const SearchBar = ({
    onSearchSubmit,
}) => {

    const {values, changeHandler, onSubmit} = useForm({
        [SearchFormKeys.Search] : '',
    }, onSearchSubmit);


    return (
        <div className={styles.SearchBar}>
            <form method="POST" onSubmit={onSubmit} className={styles.formConteiner}>
                <input
                    type="text"
                    placeholder="Search..."
                    name={SearchFormKeys.Search}
                    value={values[SearchFormKeys.Search]}
                    onChange={changeHandler}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}