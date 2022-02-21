import Router from "next/router"
import { useEffect, useState } from "react"
import { Card, CardText, CardTitle, Col, Row } from "reactstrap"

export const ResultItem = ({ img, title, description, id }) => {
  const [characterLimit, setCharacterLimit] = useState(window.innerWidth / 8)
  useEffect(() => {
    function handleResize() {
      setCharacterLimit(window.innerWidth / 8)
    }
    window.addEventListener('resize', handleResize)
  })

  const handleClick = () => {
    Router.push(`/view-page/${id}`)
  }
  return <Card className="search-item of-hidden rounded mt-4 text-start" onClick={handleClick}>
    <Row>
      <Col md={2} className="of-hidden relative">
        <div className="image-centered">
          <img
            src={img}
            height={100}
          />
        </div>
      </Col>
      <Col md={10} className="p-2">
        <CardTitle tag="h5">
          {title}
        </CardTitle>
        <CardText className="text-wrap text-break">
          {description.length <= characterLimit ? description : description.substring(0, characterLimit) + "..."}
        </CardText>
      </Col>
    </Row>

  </Card>
}