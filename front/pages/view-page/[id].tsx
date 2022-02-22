import { ShowPage } from "@front/components/ShowPage/ShowPage"
import { BasicLayout } from "@front/layouts/basic.layout"
import { searchByIdService } from "@front/services/search.service"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const ViewPage = () => {
  const [item, setItem] = useState(null)
  const router = useRouter()
  const id = router.query.id as string

  useEffect(() => {
    getItem(id)
  }, [id])
  
  const getItem = async (searchId) => {
    const item = await searchByIdService(searchId)
    setItem(item)
  }

  return (
    item && <ShowPage {...item} />
  )
}

ViewPage.layout = BasicLayout

export default ViewPage