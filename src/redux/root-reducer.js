import { combineReducers } from "redux";
import doctorsReducer from "./doctorData/doctors.reducer"

const rootReducer = combineReducers({
    doctors: doctorsReducer
})

export default rootReducer