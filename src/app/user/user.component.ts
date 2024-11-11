import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from "../shared/card/card.component";
import { User } from "./user.model"


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user! : User
  @Output() select = new EventEmitter()

  onClickUser() {
    this.select.emit(this.user.id)
  }

  get imagePath() {
    return `assets/users/${this.user.avatar}`
  }
}
