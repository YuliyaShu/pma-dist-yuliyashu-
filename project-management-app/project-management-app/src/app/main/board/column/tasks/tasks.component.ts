import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BackendService } from 'src/app/backend.service';
import { BoardComponent } from '../../board.component';
import { ColumnComponent } from '../column.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  @Input() taskId = '';
  @Input() title = '';
  @Input() done = false;
  @Input() order = 0;
  @Input() description = '';
  @Input() userId = '';
  @Input() boardId = '';
  @Input() columnId = '';
  @Input() filename = '';
  @Input() fileSize = 0;

  constructor(
    private backend: BackendService,
    private column: ColumnComponent,
    private modalService: NgbModal,
    private board: BoardComponent
  ) {}

  tasks = this.column.tasks;
  boardTitle = this.board.boardName;
  taskTitle = '';
  taskDescription = '';

  updateTaskForm = new FormGroup({
    taskTitle: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(20),
    ]),
    taskDescription: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
  });
  controlTitle = this.updateTaskForm.get('taskTitle') as FormControl;
  controlDescription = this.updateTaskForm.get(
    'taskDescription'
  ) as FormControl;

  ngOnInit(): void {}

  open(content: TemplateRef<any>, taskTitle: string, taskDescription: string) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
    });
    this.controlTitle.setValue(taskTitle);
    this.controlDescription.setValue(taskDescription);
  }

  deleteTask(taskId: string) {
    return this.backend
      .deleteTask(this.board.boardId, this.column.id, taskId)
      .subscribe((resp) => {
        window.location.reload();
        return resp;
      });
  }

  inputTitle(event: Event, taskTitle: string) {
    const { value } = event.target as HTMLInputElement;
    this.taskTitle = value || taskTitle;
  }

  inputDescription(event: Event, taskDescription: string) {
    const { value } = event.target as HTMLInputElement;
    this.taskDescription = value || taskDescription;
  }

  changeTask(
    taskId: string,
    taskOrder: number,
    taskTitle: string,
    taskDescription: string
  ) {
    const userId = localStorage.getItem('id') as string;
    return this.backend
      .updateTask(
        {
          title: this.taskTitle || taskTitle,
          order: taskOrder,
          description: this.taskDescription || taskDescription,
          userId: userId,
          boardId: this.board.boardId,
          columnId: this.column.id,
        },
        this.board.boardId,
        this.column.id,
        taskId
      )
      .subscribe((resp) => {
        if ('id' in resp) {
          if (this.taskTitle) {
            this.title = this.taskTitle;
          }
          if (this.taskDescription) {
            this.description = this.taskDescription;
          }
        } else {
          this.addInfoAboutError('failed to update your task, try later');
        }
      });
  }

  addInfoAboutError(text: string) {
    console.log(text);
  }
}
