const initialState = {
  products: []
};

export default function productsReducer (state = initialState, action) {
  switch (action.type) {
    case 'ADD_PRODUCTS':
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case 'REMOVE_PRODUCTS':
      return {
        ...state,
        products: []
      };
    default:
      return state;
  }
}