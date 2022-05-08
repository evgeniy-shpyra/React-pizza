import { pizzasAPI } from './../../api/index';

export const fetchPizzas = (category = null, sortBy) => (dispatch) => {
    dispatch(toggleIsLoaded(false))
    pizzasAPI.getPizzas(category, sortBy).then((items) => {
        dispatch(setPizzas(items))
    })
    
}


export const setPizzas = (items) => {
    return {
        type: 'SET_PIZZAS',
        payload: items
    }
}

export const toggleIsLoaded = (isLoaded) => {
    return {
        type: 'TOGGLE_IS_LOADED',
        payload: isLoaded
    }
}