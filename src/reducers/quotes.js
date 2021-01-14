export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter( quote => quote.id !== action.quoteId )
    case 'UPVOTE_QUOTE':
      return upvoteQuote(state, action.quoteId)
    case 'DOWNVOTE_QUOTE':
      return downvoteQuote(state, action.quoteId)
    default:
      return state
  }
}

const upvoteQuote = ( quotes, quoteId ) => {
  return quotes.map(quote => {
    if ( quote.id === quoteId ) {
      return {...quote,votes: quote.votes + 1}
    } else {
        return quote
      }
    })
}

const downvoteQuote = ( quotes, quoteId ) => {
  
  return quotes.map(quote => {
    if ( quote.id === quoteId && quote.votes > 0 ) {
      return {...quote,votes: quote.votes - 1}
    } else {
        return quote
      }
    })
}