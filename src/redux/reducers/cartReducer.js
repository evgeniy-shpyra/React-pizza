const initialState = {
    orderedPizzas: []
}

const isEqualObj = (obj1, obj2) => {
    if (obj1.id === obj2.id && obj1.type === obj2.type && obj1.size === obj2.size)
        return true
    return false
}


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ORDER_PIZZA':
            let indexOfRepeatingItem

            if (state.orderedPizzas.some((item, index) => {
                indexOfRepeatingItem = index
                return isEqualObj(item, { ...action.payload })
            }))
                return {
                    ...state,
                    orderedPizzas: state.orderedPizzas.map((p, index) => {
                        if (index === indexOfRepeatingItem)
                            return { ...p, quantity: ++p.quantity }
                        return p
                    })
                }


            return {
                ...state,
                orderedPizzas: [...state.orderedPizzas, { ...action.payload, quantity: 1 },]
            }
        case 'DELETE_PIZZA':
            let isLast = false
            state.orderedPizzas.forEach((item) => {
                if (item.id === action.payload && item.quantity === 1) {
                    isLast = true
                    return
                }
            })
            if (isLast)
                return {
                    ...state,
                    orderedPizzas: state.orderedPizzas.filter((item) => item.id === action.payload ? false : true)
                }
            return {
                ...state,
                orderedPizzas: state.orderedPizzas.map((item) => {
                    if (item.id === action.payload)
                        return { ...item, quantity: item.quantity - 1 }
                    return item
                })
            }
        case 'ADD_PIZZA':
            return {
                ...state,
                orderedPizzas: state.orderedPizzas.map((item) => {
                    if (item.id === action.payload)
                        return { ...item, quantity: item.quantity + 1 }
                    return item
                })
            }
        case 'DELETE_ALL_PIZZAS':
            return {
                ...state,
                orderedPizzas: []
            }
        case 'DELETE_PIZZAS':
            return {
                ...state,
                orderedPizzas:
                    state.orderedPizzas.filter(item => item.id === action.payload ? false : true)
            }

        default: return state
            }
    }