import React from 'react';
import Button from '../Button';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const TotalInformation = ({ totalItems, totalPrice }) => {
    return (
        <div className="shopping__footer total-info">
            <div className="total-info__info">
                <div className="total-info__text">
                    Всего пицц:
                    <span> {totalItems} шт.</span>
                </div>
                <div className="total-info__text">
                    Сумма заказа:
                    <span> {totalPrice} ₴</span>
                </div>
            </div>
            <div className="total-info__buttons">
                <NavLink to='/' className='total-info__container-btn'>
                    <Button grayOutlineBtn >
                        <div className='total-info__btn'>
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Вернуться назад</span>
                        </div>
                    </Button>
                </NavLink>
                <div className='total-info__container-btn'>
                    <Button orangeBtn><span className='total-info__btn'>Оплатить сейчас</span></Button>
                </div>

            </div>
        </div>
    );
};


TotalInformation.propTypes = {
    totalItems: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired
};

export default TotalInformation;