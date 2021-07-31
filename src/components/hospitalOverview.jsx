import { createStructuredSelector } from "reselect";
import { selectDoctorsDataForPreview } from "../redux/doctorData/data.selector";
import { connect } from "react-redux";
import DoctorsPreview from "./doctorsPreview";

const DoctorsOverview = ({items}) => {
    console.log(items)
    return (
    <div className="max-w-screen-md mx-auto my-8">
        <div className="flex justify-between max-w-sm">
            <div className=" w-28 h-28 border-gray-900 border-2 rounded-full ">

            </div>
            <div className="max-w-md text-5xl text-left">
                <h1>name</h1>
                <p className="text-4xl">location</p>
            </div>
        </div>
        <div className="flex flex-wrap gap-10">
            {
                items.map(({...item}) => (
                    <DoctorsPreview {...item} />
                ))
            }
        </div>
    </div>
     );
}

const mapStateToProps = createStructuredSelector({
    items: selectDoctorsDataForPreview
})
 
export default connect(mapStateToProps)(DoctorsOverview)