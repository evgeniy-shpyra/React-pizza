import { createSelector } from "reselect"

export const getOrderedPizzas = ({ cart }) => cart.orderedPizzas

export const getItems = ({ pizzas }) => pizzas.items
export const getIsLoaded = ({ pizzas }) => pizzas.isLoaded
export const getActiveCategory = ({ filters }) => filters.category
export const getSortBy = ({ filters }) => filters.sortBy

export const getTotalOrderedPizzas = createSelector(getOrderedPizzas, items => {
    return items.reduce((sum, obj) => {
        return sum + obj.quantity
    }, 0)
})

export const getTotalPriceOrdered = createSelector(getOrderedPizzas, items => {
    return items.reduce((sum, obj) => {
        return sum + (obj.price * obj.quantity)
    }, 0)
})

export const getQuantityOrderedPizzas = createSelector(getOrderedPizzas, items => {
    return items.map(item => {
        return {
            id: item.id,
            quantity: item.quantity
        }
    })
})