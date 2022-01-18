import { GiSelfLove } from "react-icons/gi"
import { Link } from "react-router-dom";

function MovieCard(props) {
    console.log("props", props)
    return (
        <>
        <Link to={`movie/${props._id}`} className="no-underline">

            <div className="hidden lg:block w-48 h-60 " >
                <img src={props.image} className="w-full h-full rounded-t-lg" />
                <div className="flex justify-between bg-black">
                    <div className="flex justify-center">
                        <div className="pt-1 pl-2 pr-2 text-yellow-100">
                            <GiSelfLove />
                        </div>
                        <div className=" text-white rounded-b-lg "> {props.likes}%</div>
                    </div>
                        <div className="text-white pr-2 no-underline">{props.Votes} Votes</div>
                </div>
                <div className="text-black text-lg font-bold text-center">{props.title}</div>
            </div>
        </Link>

        <Link to={`movie/${props._id}`}>
            <div className="lg:hidden w-28 h-32 rounded-md">
                <img src={props.image} className="w-full h-full" />
                <div className="flex justify-between bg-black">
                    <div className="flex justify-center">
                        <div className="pt-1 pl-2 pr-2 text-yellow-100">
                            <GiSelfLove />
                        </div>
                        <div className=" text-white text-sm rounded-b-lg "> {props.likes}%</div>
                    </div>
                        
                </div>
                <div className="text-black text-xs text-center">{props.title}</div>
            </div>
        </Link>
        </>
    );
}

export default MovieCard;
