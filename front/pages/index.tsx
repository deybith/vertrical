import { SearchEngine } from "@front/components/SearchEngine/SearchEngine"
import { BasicLayout } from "@front/layouts/basic.layout"
import { useState } from "react"

const Index = () => {
  const [text, setText] = useState('')

  const handleFind = (textToFind) => {
    console.log(textToFind)
    setText(textToFind)
  }

  return (
    <>
        <SearchEngine
          onFind={handleFind}
        />
    </>
  )
}

Index.layout = BasicLayout

export default Index