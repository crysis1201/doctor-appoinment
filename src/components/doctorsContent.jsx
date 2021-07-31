import {ReactComponent as Ellipse} from "./Ellipse.svg"
import {ReactComponent as Ellipse2} from "./Ellipse2.svg"
import {ReactComponent as Ellipse3} from "./Ellipse3.svg"
import {ReactComponent as Ellipse4} from "./Ellipse4.svg"
import {ReactComponent as Call} from "./call.svg"

const DoctorsContent = ({doctorName, specialist, image}) => {
    console.log(doctorName)
    return ( 
        <div>
            <Ellipse className="absolute -top-24 left-0 z-0" />
            <Ellipse2 className="absolute bottom-0 right-0 z-0" />
            <div className="flex justify-between absolute left-2/4 z-0">
                <Ellipse3 className="mt-9" />
                <div>
                    <Ellipse3 className="w-10 ml-12" />
                    <Ellipse4 className="absolute w-16 ml-10 left-2/4 top-32 " />
                </div>
            </div>
            
            <div className="z-10 relative" >
                <div className="mt-32  flex justify-between" >
                    <div className="text-white text-left" >
                        <h1 className="text-5xl">{doctorName}</h1>
                        <p>{specialist}</p>
                    </div>
                    <div className="bg-light p-8 rounded-xl mr-32">
                        <img src={image} className="rounded-xl mb-8 w-52 " />
                        <div className="flex justify-between" >
                            <div className="bg-main rounded-xl">
                                <Call className="w-10 my-2 mx-7" />
                            </div>
                            <div className="bg-main rounded-xl">
                                <Call className="w-10 my-2 mx-7" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p className="bg-light text-black py-7 w-80 rounded-xl">select Timing</p>
                    </div>
                    <div className="flex justify-between mt-24" >
                        <div>
                            <p className="bg-light text-black py-7 w-80 rounded-xl">select Timing</p>
                        </div>
                        <div>
                            <p className="bg-light text-black py-7 w-80 rounded-xl">select Timing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}
 
export default DoctorsContent;