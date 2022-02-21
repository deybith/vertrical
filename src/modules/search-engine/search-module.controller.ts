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
  other(): {} {
    return this.nothing()
  } 

  @Get('otherl')
  @HttpCode(HttpStatus.ACCEPTED)
  otherl(): string {
    //throw new Error('No sirve')
    return 'other l lll path '
  } 

  nothing() {
    return {
      hey: 'hey'
    }
  }
}