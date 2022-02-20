import { Controller, Get, HttpCode, Post } from "@core/common";
import { HttpStatus } from "@core/common/enums";

@Controller('search')
export class SearchEngineController {
  
  @Post('/post')
  @HttpCode(HttpStatus.CREATED)
  getHello(): string {
    return 'Testtt';
  }

  @Get()
  other(): string {
    return 'other path '
  } 
}