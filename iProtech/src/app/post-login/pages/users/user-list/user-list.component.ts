import { Component, Input, OnInit, Output,EventEmitter, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { UserServService } from '../../../user-serv.service'
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>
  @Input() userList;
  @Output() deleteId = new EventEmitter()
  isSpinner: boolean;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    "id",
    "name",
    "username",
    "email",
    "actions"   
  ];
  constructor(private serv:UserServService, private route:Router) { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadTableDataSource(changes.userList.currentValue);
  }

  loadTableDataSource(userList) {
    console.log(userList)
    this.dataSource = new MatTableDataSource(userList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  navigateToWorkflow(id) {
    // this.router.navigate(["cam/workflow", id]);
  }

  viewUser(id){
    this.route.navigateByUrl("userdetails/"+id)
  }

 
}
