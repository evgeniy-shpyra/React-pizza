import { memo } from "react";
import { PropTypes } from 'prop-types';


const Categories = memo(({ items, activeCategory, onClickCategory }) => {

    return (
        <ul className="sort-block__category-list category-list">
            <li onClick={() => onClickCategory(null)} className={`${null === activeCategory ? `active` : ""}`} >Все</li>
            {items && items.map((item, index) => (
                <li key={item + index} onClick={() => onClickCategory(index)} className={`${index === activeCategory ? `active` : ""}`} >
                    {item}
                </li>
            ))}
        </ul>
    );
})

Categories.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    activeCategory: PropTypes.PropTypes.number,
    onClickCategory: PropTypes.func.isRequired
}

Categories.defaultProps = { items: [], activeCategory: null, onClickCategory: null }

export default Categories;
