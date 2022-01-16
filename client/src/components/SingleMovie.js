import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import data from "./movies.json";
import {useParams} from "react-router";

function SingleMovie()
{
    const {movid} = useParams();
    console.log(movid)
    return (
        <div>
            <Container fluid style = {{padding:"8%", background:"pink"}}>
                <Row style = {{textAlign:"center"}}>
                    {data.map((mov) =>
                    {
                    if(mov.id==movid)
                    {
                        return(<Col id ={mov.id} key = {mov.id} xs = {12} md = {6} lg = {4} style = {{marginTop:"2%"}}>
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
                    }
                })}   
                </Row>
            </Container>
        </div>
    );
}

export default SingleMovie