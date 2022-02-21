import { Controller, Get, HttpCode, Post } from "@core/common";
import { HttpStatus } from "@core/common/enums";
import express from 'express'
import { SearchService } from "./search.service";
@Controller('search')
export class SearchEngineController {
  searchService: SearchService
  constructor() {
    this.searchService = new SearchService()
  }

  @Get(':text')
  async find(req: express.Request) {
    const text = req.params.text
    return this.searchService.findPages(text)
  }

  @Get('byId/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  async findOne(req: express.Request) {
    const id = parseInt(req.params.id)
    return this.searchService.findById(id)
  }
}