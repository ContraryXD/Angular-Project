import { Component } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: any[] = [];
  selectedUser: any = {};
  modalTitle: string = '';

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.usersService.getUserDetails().subscribe(users => {
      this.users = users;
    });
  }

  prepareModal(action: string, user?: any): void {
    if (action === 'add') {
      this.modalTitle = 'Add User';
      this.selectedUser = {};
    } else if (action === 'edit') {
      this.modalTitle = 'Edit User';
      this.selectedUser = { ...user };
    }
  }

  onSave(): void {
    if (this.modalTitle === 'Add User') {
      this.usersService.addUser(this.selectedUser).subscribe(() => {
        this.fetchUsers();
      });
    } else if (this.modalTitle === 'Edit User') {
      this.usersService.updateUser(this.selectedUser).subscribe(() => {
        this.fetchUsers();
      });
    }
    const modal = bootstrap.Modal.getInstance(document.getElementById('userModal')!);
    modal.hide();
  }

  deleteUser(userId: string): void {
    this.usersService.deleteUser(userId).subscribe(() => {
      this.fetchUsers();
    });
  }
}
