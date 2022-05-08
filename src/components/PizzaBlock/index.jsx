import { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types'
import React from 'react'
import Button from '../Button';
import { useDispatch } from 'react-redux';
import { setOrderPizza } from './../../redux/actions/cart';




const PizzaBlock = ({ id, name, price, imageUrl, types, sizes, quantity, onClickToButtonAdd }) => {

    const dispatch = useDispatch()
    const pizzaTypes = ['тонкое', 'традиционное']
    const pizzaSizes = [26, 30, 40]

    const [activePizzaSize, setActivePizzaSize] = useState()
    const [activePizzaType, setActivePizzaType] = useState()

    

    useEffect(() => {
        setActivePizzaSize(sizes[0])
        setActivePizzaType(types[0])
    }, [types, sizes])

    const onChangeActivePizzaType = (indexType) => {
        setActivePizzaType(indexType)
    }
    const onChangeActivePizzaSize = (size) => {
        setActivePizzaSize(size)
    }

    const onClickToByBtn = () => {
        onClickToButtonAdd(id, activePizzaType, activePizzaSize, name, price, imageUrl)
    }


    return (
        <div className="pizzas-block__pizza pizza-item">
            <div className="pizza-item__body">
                <img src={imageUrl} alt="" className="pizza-item__img" />
                <h2 className="pizza-item__title">{name}</h2>
                <div className="pizza-item__selector-block selector-block">
                    <div className="selector-block__selector">
                        <ul className="big">
                            {pizzaTypes.map((type, index) =>
                                <li key={index}
                                    onClick={() => onChangeActivePizzaType(index)}
                                    className={classNames({
                                        disable: !types.includes(index),
                                        active: index === activePizzaType
                                    })}>
                                    {type}
                                </li>
                            )}
                        </ul>
                        <ul className="small">
                            {pizzaSizes.map((size, index) =>
                                <li key={index} onClick={() => onChangeActivePizzaSize(size)}
                                    className={classNames({
                                        disable: !sizes.includes(pizzaSizes[index]),
                                        active: activePizzaSize === size
                                    })}>
                                    <div>
                                        {size} см.
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="selector-block__footer">
                        <div className="selector-block__cost">от {price} ₴</div>
                        <div onClick={onClickToByBtn} className='btn-add'>
                            <Button orangeOutlineBtn={quantity != 0} orangeBtn={quantity === 0}  >
                                <svg width="15" height="15" viewBox="0 0 10 10" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" />
                                    <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" />
                                </svg>
                                <span>Добавить</span>
                                {quantity != 0 && <div className="quantity">{quantity}</div>}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



PizzaBlock.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    category: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    onClickToButtonAdd: PropTypes.func.isRequired
}

PizzaBlock.defaultProps = {
    types: []
}

export default PizzaBlock