export function getProducts(state = {}, action) {
	switch(action.type) {
		case 'GET_ALL_PRODUCTS':
			return action.data;
		default : 
			return state;
	}
}