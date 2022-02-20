import React, {useState} from 'react';
import styles from './NewArticleForm.module.css';

function NewArticleForm({onAddArticle}) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    return (
        <>
            <h2>Add Article</h2>
            <div className={styles.form}>
                <div className={styles.formRow}>
                    <label>Title:</label>
                    <input type="text" value={title} onInput={e => setTitle(e.target.value)}/>
                </div>
                <div className={styles.formRow}>
                    <label>Content:</label>
                    <textarea rows={5} value={content} onInput={e => setContent(e.target.value)}/>
                </div>
                <div className={styles.formRow} style={{flexDirection: 'row-reverse'}}>
                    <button
                        style={{flexBasis: '100px', flexGrow: 0}}
                        onClick={() => onAddArticle(title, content)}>
                        Add
                    </button>
                </div>
            </div>
        </>
    );
}

export default NewArticleForm;