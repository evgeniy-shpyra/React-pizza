import React from 'react';
import emptyCart from '../../img/empty-cart.png'
import Button from './../Button';
import { NavLink } from 'react-router-dom';

const EmptyCart = () => {
    return (
        <div className="empty-basket">
            <h2 className="empty-basket__title title">
                Корзина пустая
                <icon>😕</icon>
            </h2>
            <div className="empty-basket__text">
                Вероятней всего, вы не заказывали ещё пиццу.<br />Для того, чтобы заказать пиццу, перейди на главную страницу.
            </div>
            <img src={emptyCart} alt="" className="empty-basket__img" />
            <NavLink to='/'>
                <Button blackBtn>
                    Вернуться назад
                </Button>
            </NavLink>

        </div>
    );
};

export default EmptyCart;