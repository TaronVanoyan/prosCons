import React, {useState} from 'react';
// Components
import List from '../list/List';
// Styling
import style from './Content.module.scss';

const Content = () => {
    const [listData, setListData] = useState({
        pros: [{id: 0, value: ''}],
        cons: [{id: 0, value: ''}]
    });

    const handleItemChange = (index, type) => event => {
        let newStateData = {...listData},
            updatedData = newStateData[type],
            lastItem = updatedData[updatedData.length - 1];

        if(event.target.value) {
            updatedData[index].value = event.target.value;
        } else {
            updatedData.splice(index, 1);
        }

        if (lastItem.value) {
            updatedData.push({
                id: lastItem.id + 1,
                value: ''
            });
        }

        setListData(newStateData);
    };

    return (
        <div className={style.content}>
            <div className={style.pros}>
                <h3>Pros</h3>

                <List data={listData.pros} type='pros' handleItemChange={handleItemChange}/>
            </div>
            <div className={style.cons}>
                <h3>Cons</h3>

                <List data={listData.cons} type='cons' handleItemChange={handleItemChange}/>
            </div>
        </div>
    )
};

export default Content;
