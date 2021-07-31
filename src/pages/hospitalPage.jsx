import { Route } from "react-router-dom"
import HospitalOverview from "../components/hospitalOverview"
import DoctorsPage from "./doctorsPage"

const HospitalPage = ({match}) => {
    console.log(match)
    return (  
        <div>
            <Route exact path={`${match.path}`} component={HospitalOverview} />
            <Route path={`${match.path}:itemId`} component={DoctorsPage} />
        </div>
    );
}
 
export default HospitalPage;