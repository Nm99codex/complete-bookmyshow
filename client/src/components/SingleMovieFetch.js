import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import axios from "axios";
import {useParams} from "react-router";
import {useState, useEffect} from "react";

function SingleMovie()
{
    const {movid} = useParams();
    console.log(movid)
    const [data, setData] = useState([]);

    useEffect(async () => {
        try {
            const response = await axios.get(`http://localhost:5000/movie/${movid}`)
            console.log(response);
            setData([response.data])
        }
        catch(error)
        {
            console.error(error);
        }
    }, []);
    return (
        <div>
            <Container fluid style = {{padding:"8%", background:"pink"}}>
                <Row style = {{textAlign:"center"}}>
                    {data.map((mov) =>
                    {
                        return(
                        <Col id ={mov._id} key = {mov._id} xs = {12} md = {6} lg = {4} style = {{marginTop:"2%"}}>
                        <Card>
                            <Card.Img style = {{width:"100%", height : "400px"}}variant="top" src={mov.image} />
                            <Card.Body>
                            <Card.Title>{mov.title}</Card.Title>
                            <Card.Text>
                            {mov.actor}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>)
            
                })}   
                </Row>
            </Container>
        </div>
    );
}

export default SingleMovie