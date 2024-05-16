import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movies:any[],term: string): any[] {
    return movies.filter((m)=>m.title.toLowerCase().includes(term.toLowerCase()));
  }

}
