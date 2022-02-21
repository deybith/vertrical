import Router from "next/router"
import { useEffect } from "react"


const Index = () => {
  useEffect(() => {
    Router.push('/search')
  }, [])
  return <></>
}

export default Index