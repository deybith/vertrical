import { Db } from "src/adapters";

export class SearchService {
  page: any
  constructor() {
    this.page = Db.page
  }

  findStrategy(text: string) {
    // incomplete
    return {
      contains: text,
      mode: 'insensitive',
    }
  }

  async findPages(text: string) {
    const pages = await this.page.findMany(
      {
        where: {
          title: this.findStrategy(text)
        }
      }
    )

    return pages
  }

  async findById(id: number) {
    const result = await this.page.findUnique({
      where: {
        id,
      },
    })
    return result
  }
}