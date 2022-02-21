import Image from "next/image"
import logo from '@assets/img/image.svg'
import PropTypes from 'prop-types'
import { FormSearch } from "./FormSearch"
import cx from 'classnames'
import { useState } from "react"

export const SearchEngine = ({ onFind }) => {
  const [inSearch, setInSearch] = useState(false)
  
  const handleFind = (text) => {
    onFind(text)
    setInSearch(true)
  }
  return <div className={cx("vertical-auto", "vertical-auto-full", { "hidden": inSearch})} >
      <Image
        src={logo}
      />
      <FormSearch
        onFind={handleFind}
      />
    </div>
}

SearchEngine.prototype = {
  onFind: PropTypes.func.isRequired
}