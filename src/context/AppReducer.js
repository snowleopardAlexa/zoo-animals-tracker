export default (state, action) => {
    switch(action.type) {
        case: 'DELETE_ANIMALTRANSFER':
          return {
              ...state,
              animalTransfer: state.animalTransfers.filter(animalTransfer => animalTransfer.id !== 
              action.payload)
          }
        default: 
          return state;
        }
    }
