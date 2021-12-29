import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortName'
})
export class ShortNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let name=new Array();
    name=value.split(' ');
    if(name.length>1){
      return name[0].substr(0,1) + ' '+ name[1].substr(0,1);
    }
    else {
      return name[0].substr(0,1);
    }
    
  }

}
