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
    getItem()
  }, [id])
  
  const getItem = async () => {
    const item = await searchByIdService(id)
    setItem(item)
  }

  return (
    item && <ShowPage {...item} />
  )
}

ViewPage.layout = BasicLayout

export default ViewPage