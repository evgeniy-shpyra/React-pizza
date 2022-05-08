import logo from "../img/header/logo.svg";
import cart from './../img/icons/cart.svg'
import Button from "./Button";
import { NavLink, useMatch } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getTotalOrderedPizzas } from "../redux/selectors";
import { getTotalPriceOrdered } from './../redux/selectors';

const Header = () => {

    const { totalItems, totalPrice } = useSelector((state) => {
        return {
            totalItems: getTotalOrderedPizzas(state),
            totalPrice: getTotalPriceOrdered(state)
        }
    })

    const match = useMatch('/')



    return (
        <header className="header">
            <NavLink to='/' className="header__link">
                <img className="header__icon" src={logo} alt="" />
                <div className="header__content">
                    <h1 className="header__title">REACT PIZZA</h1>
                    <div className="header__subtitle">
                        самая вкусная пицца во вселенной
                    </div>
                </div>
            </NavLink>

            <div className="header__btn">
                {match &&
                    <NavLink to='/cart'>
                        <Button orangeBtn>
                            <span className="header__cost">{totalPrice} ₴</span>
                            <span className="header__line"></span>
                            <img src={cart} className="header__shopping-car" />
                            <div className="header__quantity">{totalItems}</div>
                        </Button>
                    </NavLink>
                }

            </div>
        </header>
    );
};

export default Header;
