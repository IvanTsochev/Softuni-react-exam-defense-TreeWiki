import styles from './Create.module.css';

export const Create = () => {
    return (
        <div>
            <h1>Create</h1>

            <form className={styles.createForm}>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" required />

                    <label htmlFor="info">Information:</label>
                    <textarea id="info" name="info" required></textarea>

                    <label htmlFor="type">Type:</label>
                    <select id="type" name="type" required>
                        <option value="">--Select a type--</option>
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                        <option value="type3">Type 3</option>
                    </select>

                    <button type="submit">Create</button>
            </form>
        </div>
    )
};