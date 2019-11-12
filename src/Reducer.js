
import { createStore } from 'redux';
const initialState = {
    patient_title: 0
};

function Reducer(state = initialState, action) {
    switch (action.type) {
        case 'PATIENT_TITLE_CHANGE':
            return {
                patient_title: state.count
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
}

const store = createStore(Reducer);

export { store }