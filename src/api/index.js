import axios from 'axios';

export const pizzasAPI = {

    getPizzas(category, sortBy) {

        let path = `/pizzas?_sort=${sortBy}&_order=asc`

        if (category != null) 
            path = path + `&category=${category}`

        
        return axios.get(path).then((response) => {
            return response.data
        })
    },

    // getPizzasOnCategory(category) {
    //     return axios.get(`http://localhost:3002/pizzas?category=${category}`).then((response) => {
    //         return response.data
    //     })
    // }

}