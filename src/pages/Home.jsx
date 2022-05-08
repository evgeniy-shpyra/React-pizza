import { SortPopup, Categories, PizzaBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import LoadingBlock from '../components/PizzaBlock/LoadingBlock';
import { fetchPizzas } from './../redux/actions/pizzas';
import { getItems, getIsLoaded, getActiveCategory, getSortBy, getQuantityOrderedPizzas } from '../redux/selectors';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { setOrderPizza } from './../redux/actions/cart';




const categories = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
const sortItems = [
	{ name: 'популярности', type: 'popular' },
	{ name: 'по цене', type: 'price' },
	{ name: 'по алфавиту', type: 'name' }
]

const Home = () => {

	const dispatch = useDispatch()

	const { pizzas, isLoaded, category, sortBy, quantityOrderedPizzas } = useSelector((state) => {
		return {
			pizzas: getItems(state),
			isLoaded: getIsLoaded(state),
			category: getActiveCategory(state),
			sortBy: getSortBy(state),
			quantityOrderedPizzas: getQuantityOrderedPizzas(state)
		}
	})

	const onSelectCategory = useCallback((index) => {
		dispatch(setCategory(index))
	}, [])

	const onSelectSortBy = useCallback((item) => {
		dispatch(setSortBy(item))
	}, [])

	const addPizzaToCart = (id, type, size, name, price, imageUrl) => {
		dispatch(setOrderPizza(id, type, size, name, price, imageUrl))
	}

	useEffect(() => {
		dispatch(fetchPizzas(category, sortBy))
	}, [category, sortBy])

	return (
		<div className='home'>
			<div className="home__sort-block sort-block">
				<div className="sort-block__body">
					<Categories items={categories} activeCategory={category} onClickCategory={onSelectCategory} />
					<SortPopup items={sortItems} activeSortType={sortBy} onClickSortType={onSelectSortBy} />
				</div>

			</div>
			<div className="pizzas-block">
				<h2 className="pizzas-block__title">{category != null ? categories[category] : 'Все'} пиццы</h2>
				<div className="pizzas-block__body">
					{isLoaded ? pizzas.map((pizza, index) => {
						let quantity = quantityOrderedPizzas.reduce((sum, obj) => {
							if (obj.id === pizza.id)
								return sum + obj.quantity
							return sum
						}, 0)
						return <PizzaBlock key={index} {...pizza} quantity={quantity} onClickToButtonAdd={addPizzaToCart} />
					})
						:
						Array(10).fill(0).map((_, index) => <LoadingBlock key={index} />)
					}
				</div>

			</div>
		</div>
	)
}

export default Home