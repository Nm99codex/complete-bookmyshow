import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Slider from "react-slick"

const LargeTabs = (props) => {
  return (
    <>
      <div className="hidden lg:block w-64 px-9">
        <div>
          <img src={props.image} />
        </div>
        <div className=" space-x-2 text-lg font-bold text-center items-center align-middle">
            {props.title}          
        </div>
      </div>
    </>
  );
};

function SmallTabs(props)
{
  return (
    <>
      <div className="lg:hidden flex flex-wrap space-x-1">
        <div>
          <img src={props.image} />
        </div>
        <div className="flex justify-between space-x-2 text-md font-bold">
          <div>
            {props.title}
          </div>
          
        </div>
      </div>
    </>
  )
}

function Premieres(props) {
  return (
    <>
      <div className="text-white">
        <LargeTabs {...props} />
        <SmallTabs {...props} />
      </div>
    </>
  );
}

export default Premieres;
