import data from "./data";

const INITIAL_STATE = {
    data: data
};

const doctorsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default doctorsReducer