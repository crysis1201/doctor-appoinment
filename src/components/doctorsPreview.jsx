import { ReactComponent as Arrow } from "./arrow.svg"
import { withRouter } from "react-router";

const doctorsPreview = ({doctorName, specialist, image, match, routeName, history}) => {
    return ( 
        <div className="pt-14">
            <div className="bg-main w-56 h-60 rounded-3xl z-10 p-4">
                <div style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundPosition: "left bottom", backgroundSize: "130px"}} className="">
                    <div className="text-white text-right">
                        <h1 className="text-xl" >{doctorName}</h1>
                        <p>{specialist}</p>
                    </div>
                    <div onClick={() => history.push(`${match.path}${routeName}`)} className="mt-28 cursor-pointer rounded-3xl w-14 h-12 bg-secondary ml-auto" >
                        <Arrow className="w-7 m-auto" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default withRouter(doctorsPreview);