import Router from "next/router"
import { ArrowLeft } from "react-bootstrap-icons"
import { Card, CardBody, CardLink, CardText, CardTitle, UncontrolledTooltip } from "reactstrap"

export const ShowPage = ({ img, title, description }) => {

  const handleClick = () => {
    Router.back()
  }

  return (
    <div className="mt-4">
      <Card>
        <CardBody>
          <CardTitle tag="h5">
            {title}
          </CardTitle>
        </CardBody>
        <img
          alt="Card image cap"
          src={img}
          width="100%"
        />
        <CardBody>
          <CardText>
            {description}
          </CardText>
          <CardLink href="#" id="go-back-link" onClick={handleClick}>
            <ArrowLeft />
          </CardLink>
        </CardBody>
      </Card>
      <UncontrolledTooltip
        placement="top"
        target="go-back-link"
      >
        Go Back
      </UncontrolledTooltip>
    </div>
  )

}