export default (state, action) => {
    switch(action.type) {
      case 'FETCH_ALL':
        return {
          ...state,
          loading: false,
          transactions: action.payload
        }
      case 'DELETE':
        return {
          ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        }
      case 'CREATE':
        return {
          ...state,
          transactions: [...state.transactions, action.payload]
        }
           
      case 'TRANSACTION_ERROR':
        return {
          ...state,
          error: action.payload
        }
      default:
        return state;
    }
  }