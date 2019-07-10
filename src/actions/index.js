export function addProductsToStore(data) {
	return dispatch => {
		dispatch({
			type: 'GET_ALL_PRODUCTS',
			data,
		})
	}
}