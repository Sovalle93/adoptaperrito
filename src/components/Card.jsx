import Card from 'react-bootstrap/Card';
import Tags from './Tags'

function Cardperro({image, title, description, colorBadge, textBadge}) {
return (
    <Card className='Carddefault'>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            <Tags colorBadge={colorBadge} textBadge={textBadge}/>
        </Card.Body>
    </Card>
);
}

export default Cardperro;