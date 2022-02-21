import { ResultList } from "@front/components/SearchEngine/ResultList"
import { SearchEngine } from "@front/components/SearchEngine/SearchEngine"
import { BasicLayout } from "@front/layouts/basic.layout"
import { searchService } from "@front/services/search.service"
import Router, { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Index = ({ }) => {
  const router = useRouter()
  const [text, setText] = useState(router.query?.q || '')
  const [listResults, setListResults] = useState([])

  useEffect(() => {
    if (text) {
      getResults(text)
    }
  }, [])

  const handleFind = (textToFind) => {
    Router.push(`/search?q=${textToFind}`)
    setText(textToFind)
    getResults(textToFind)
  }

  const getResults = async (textToFind) => {
    const response = await searchService(textToFind)
    setListResults(response)
  }

  return (
    <>
      <SearchEngine
        onFind={handleFind}
        defaultValue={text}
      />
      {text && listResults.length ? 
        <ResultList list={listResults} /> : 
        <div className="alert alert-warning">
            Your search - "{text}" - did not match any documents.
        </div>}
    </>
  )
}

Index.layout = BasicLayout

export default Index