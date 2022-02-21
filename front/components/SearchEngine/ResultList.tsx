import { Container } from "reactstrap"
import { ResultItem } from "./ResultItem"

export const ResultList = ({list}) => {
  return <Container className="mt-3">
    {list.map((item, index) => <ResultItem key={index} {...item}/> )}
  </Container>
}