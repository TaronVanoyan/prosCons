import React from 'react';

// Styling
import style from './List.module.scss';

const List = ({data, type, handleItemChange}) => {
    return (<ul className={style.list}>
        {data &&
        data.map((item, index) => (<li className={style.listItem} key={item.id}>
            <span>{index + 1}.</span>
            <input type="text"
                   defaultValue={item.value}
                   className={style.writeBox}
                   placeholder='Write a something'
                   onChange={handleItemChange(index, type)}/>
        </li>))}
    </ul>);
};

export default List;
