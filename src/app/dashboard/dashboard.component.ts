import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  totalProducts = 37859
  totalSales = 1758
  totalOrders = 1385
  users: any = [];
  constructor(private usersService: UserService) {
  }
  async ngOnInit(): Promise<void> {
    this.usersService.getUsers().subscribe(
      (data: any) => {
        this.users.push(...data)
        console.log(this.users)
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    )
  }
}
