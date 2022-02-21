import Image from "next/image"
import logo from '@assets/img/image.svg'
import imageIcon from '@assets/img/icon-32x32.png'
import PropTypes from 'prop-types'
import { FormSearch } from "./FormSearch"
import cx from 'classnames'
import { useState } from "react"
import { Container } from "reactstrap"

export const SearchEngine = ({ onFind, defaultValue }) => {
  const [inSearch, setInSearch] = useState(!!defaultValue)
  
  const handleFind = (text) => {
    onFind(text)
    setInSearch(true)
  }
  return <div className={cx({"vertical-auto": !inSearch, "vertical-auto-full": !inSearch, "in-search": inSearch})} >
      <Container className="mt-5 p-1" >
        <Image
          src={inSearch ? imageIcon : logo}
        />
      </Container>
      <FormSearch
        onFind={handleFind}
        defaultValue={defaultValue}
      />
    </div>
}

SearchEngine.prototype = {
  onFind: PropTypes.func.isRequired
}