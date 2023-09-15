import Badge from 'react-bootstrap/Badge';

function Tags({colorBadge, textBadge}) {
return (
    <div>
        <Badge bg={colorBadge}>{textBadge}</Badge>
    </div>
    );
}

export default Tags;