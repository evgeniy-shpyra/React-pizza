export const setOrderPizza = (id, type, size, name, price, imageUrl) => {
    return {
        type: 'SET_ORDER_PIZZA',
        payload: {id, type, size, name, price, imageUrl}
    }
}

export const deletePizza = (id) => {
    return {
        type: 'DELETE_PIZZA',
        payload: id
    }
}

export const addPizza = (id) => {
    return {
        type: 'ADD_PIZZA',
        payload: id
    }
}

export const deletePizzas = (id) => {
    return {
        type: 'DELETE_PIZZAS',
        payload: id
    }
}

export const deleteAllPizzas = () => {
    return {
        type: 'DELETE_ALL_PIZZAS'
    }
}


