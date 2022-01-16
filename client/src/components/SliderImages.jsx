import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";



function SliderImages() {
    const data = [
        " https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTMwKyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-ODArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png"
    ]

    return (
        <>
             <div className="hidden lg:block">
            <div style={{ background: "white", padding: "5%" }}>
                <Carousel>
                    <Carousel.Item >
                        <CardGroup style={{ display: "flex", gap: "40px", justifyContent: "space-around" }}>
                            <Card className="bg-dark text-white" style={{ height: "200px", width: "300px", borderRadius: "6%" }}>
                                <Card.Img src={data[0]} alt="Card image" style={{ height: "300px", width: "300px", borderRadius: "6%" }} />
                            </Card>
                            <Card className="bg-dark text-white" style={{ height: "200px", width: "300px", borderRadius: "6%" }}>
                                <Card.Img src={data[1]} alt="Card image" style={{ height: "300px", width: "300px", borderRadius: "6%" }} />
                            </Card>
                            <Card className="bg-dark text-white" style={{ height: "200px", width: "300px", borderRadius: "6%" }}>
                                <Card.Img src={data[2]} alt="Card image" style={{ height: "300px", width: "300px", borderRadius: "6%" }} />
                            </Card>
                            <Card className="bg-dark text-white" style={{ height: "200px", width: "300px", borderRadius: "6%" }}>
                                <Card.Img src={data[3]} alt="Card image" style={{ height: "300px", width: "300px", borderRadius: "6%" }} />
                            </Card>
                            <Card className="bg-dark text-white" style={{ height: "200px", width: "300px", borderRadius: "6%" }}>
                                <Card.Img src={data[4]} alt="Card image" style={{ height: "300px", width: "300px", borderRadius: "6%" }} />
                            </Card>
                        </CardGroup>
                    </Carousel.Item>
                    <Carousel.Item >
                        <CardGroup style={{ display: "flex", gap: "40px", justifyContent: "space-around" }}>
                            <Card className="bg-dark text-white" style={{ height: "200px", width: "300px", borderRadius: "6%" }}>
                                <Card.Img src={data[0]} alt="Card image" style={{ height: "300px", width: "300px", borderRadius: "6%" }} />
                            </Card>
                            <Card className="bg-dark text-white" style={{ height: "200px", width: "300px", borderRadius: "6%" }}>
                                <Card.Img src={data[1]} alt="Card image" style={{ height: "300px", width: "300px", borderRadius: "6%" }} />
                            </Card>
                            <Card className="bg-dark text-white" style={{ height: "200px", width: "300px", borderRadius: "6%" }}>
                                <Card.Img src={data[2]} alt="Card image" style={{ height: "300px", width: "300px", borderRadius: "6%" }} />
                            </Card>
                            <Card className="bg-dark text-white" style={{ height: "200px", width: "300px", borderRadius: "6%" }}>
                                <Card.Img src={data[3]} alt="Card image" style={{ height: "300px", width: "300px", borderRadius: "6%" }} />
                            </Card>
                            <Card className="bg-dark text-white" style={{ height: "200px", width: "300px", borderRadius: "6%" }}>
                                <Card.Img src={data[4]} alt="Card image" style={{ height: "300px", width: "300px", borderRadius: "6%" }} />
                            </Card>
                        </CardGroup>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>




        <div className="lg:hidden">
            <div style={{ background: "white", padding: "5%" }}>
                <Carousel>
                    <Carousel.Item >
                        <CardGroup style={{ display: "flex", gap: "20px", justifyContent: "space-between" }}>
                            <Card className="bg-dark text-white" style={{ height: "100px", width: "400px", borderRadius: "6%" }}>
                                <Card.Img src={data[0]} alt="Card image" style={{ height: "300px", width: "300px", borderRadius: "6%" }} />
                            </Card>
                            <Card className="bg-dark text-white" style={{ height: "100px", width: "400px", borderRadius: "6%" }}>
                                <Card.Img src={data[1]} alt="Card image" style={{ height: "300px", width: "300px", borderRadius: "6%" }} />
                            </Card>
                            <Card className="bg-dark text-white" style={{ height: "100px", width: "400px", borderRadius: "6%" }}>
                                <Card.Img src={data[2]} alt="Card image" style={{ height: "300px", width: "300px", borderRadius: "6%" }} />
                            </Card>
                            <Card className="bg-dark text-white" style={{ height: "100px", width: "400px", borderRadius: "6%" }}>
                                <Card.Img src={data[3]} alt="Card image" style={{ height: "300px", width: "300px", borderRadius: "6%" }} />
                            </Card>
                            <Card className="bg-dark text-white" style={{ height: "100px", width: "400px", borderRadius: "6%" }}>
                                <Card.Img src={data[4]} alt="Card image" style={{ height: "300px", width: "300px", borderRadius: "6%" }} />
                            </Card>
                        </CardGroup>
                    </Carousel.Item>
                    <Carousel.Item >
                        <CardGroup style={{ display: "flex", gap: "20px", justifyContent: "space-between" }}>
                            <Card className="bg-dark text-white" style={{ height: "100px", width: "400px", borderRadius: "6%" }}>
                                <Card.Img src={data[0]} alt="Card image" style={{ height: "300px", width: "300px", borderRadius: "6%" }} />
                            </Card>
                            <Card className="bg-dark text-white" style={{ height: "100px", width: "400px", borderRadius: "6%" }}>
                                <Card.Img src={data[1]} alt="Card image" style={{ height: "300px", width: "300px", borderRadius: "6%" }} />
                            </Card>
                            <Card className="bg-dark text-white" style={{ height: "100px", width: "400px", borderRadius: "6%" }}>
                                <Card.Img src={data[2]} alt="Card image" style={{ height: "300px", width: "300px", borderRadius: "6%" }} />
                            </Card>
                            <Card className="bg-dark text-white" style={{ height: "100px", width: "400px", borderRadius: "6%" }}>
                                <Card.Img src={data[3]} alt="Card image" style={{ height: "300px", width: "300px", borderRadius: "6%" }} />
                            </Card>
                            <Card className="bg-dark text-white" style={{ height: "100px", width: "400px", borderRadius: "6%" }}>
                                <Card.Img src={data[4]} alt="Card image" style={{ height: "300px", width: "300px", borderRadius: "6%" }} />
                            </Card>
                        </CardGroup>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
        </>
    );
}

export default SliderImages;
