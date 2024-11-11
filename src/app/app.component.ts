import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { User } from './user/user.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-app';
  users = DUMMY_USERS
  selectedUserId?: string
  isAnyUser: boolean = false

  selectedUser!: User

  onSelectUser(id: string)
  {
    this.isAnyUser = true
    this.selectedUserId = id
    console.log(this.selectedUserId);
    this.selectedUser = this.users.find(user => user.id === this.selectedUserId) || {name:"User", id:"u0", avatar:""}
  }


}
