import { useEffect, useRef, useState } from 'react';
import { memo } from 'react';
import { PropTypes } from 'prop-types';

const SortPopup = memo(({ items, activeSortType, onClickSortType }) => {

    const [visiblePopup, setVisiblePopup] = useState(false)
    const sortRef = useRef(null)
    let activeLabel = items.find(obj => obj.type === activeSortType).name
   
    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup)
    }
    const handelClickOnWindow = (e) => {
        const path = e.path || (e.composedPath && e.composedPath())
        if (!path.includes(sortRef.current))
            setVisiblePopup(false)
    }

    const onClickPopup = (type) => {
        toggleVisiblePopup()
        onClickSortType(type)
    } 

    useEffect(() => {
        document.addEventListener('click', handelClickOnWindow)
    }, [])

    return (
        <div ref={sortRef} className={`navbar__sort-popup sort-popup ${visiblePopup ? 'sort-popup-visible' : ''}`}>
            Сортировка по:
            <div className="sort-popup__sort-by">
                <span onClick={toggleVisiblePopup}>{activeLabel}</span>
                {visiblePopup && <ul className="sort-popup__list">
                    {items.map((item, index) =>
                        <li key={item.type + index}
                            onClick={() => onClickPopup(item.type)}
                            className={item.type === activeSortType ? 'active' : ''}
                        >
                            {item.name}
                        </li>
                    )}
                </ul>}
            </div>
        </div>
    )
})

SortPopup.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    activeSortType: PropTypes.string.isRequired,
    onClickSortType: PropTypes.func.isRequired
}

SortPopup.defaultProps = { items: [], activeSortType: '', onClickSortType: null }

export default SortPopup