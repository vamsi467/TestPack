import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "fieldFormater"
})
export class FieldFormaterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value.replace(/_/g, " ");
  }
}
