import { Container, Form, FormGroup, Input, InputGroup, InputGroupText } from "reactstrap"
import { Search } from "react-bootstrap-icons"
import { useState } from "react"
import PropTypes from 'prop-types'

export const FormSearch = ({ onFind, defaultValue }) => {
  const [textToFind, setTextToFind] = useState(defaultValue || '')
  const [validInput, setValidInput] = useState(false)
  const [touched, setTouched] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    handleFind()
  }

  const handleFind = () => {
    setTouched(true)
    if (textToFind) {
      onFind(textToFind)
      setValidInput(true)
    } else {
      setValidInput(false)
    }
  }

  return <Container className="mt-5" >
        <Form onSubmit={handleSubmit}>
          <FormGroup className="mb-3">
            <InputGroup className="input-group-alternative">
              <Input
                placeholder="Search"
                type="text"
                valid={touched && validInput}
                invalid={touched && !validInput}
                value={textToFind}
                onChange={(event) => setTextToFind(event.target.value)}
              />
              <InputGroupText role="button">
                <Search onClick={handleFind} />
              </InputGroupText>
            </InputGroup>
          </FormGroup>
        </Form>
      </Container>
}

FormSearch.prototype = {
  onFind: PropTypes.func.isRequired
}