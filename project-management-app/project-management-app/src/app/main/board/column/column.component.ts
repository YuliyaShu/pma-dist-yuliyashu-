import {
  Component,
  Injectable,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { BoardComponent } from '../board.component';
import { BackendService, TaskResponse } from 'src/app/backend.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent implements OnInit {
  @Input() title = '';
  @Input() id = '';
  @Input() order = 0;
  @Input() tasks: TaskResponse[] = [];
  @Input() tasksIds: string[] = [];

  constructor(
    private board: BoardComponent,
    private modalService: NgbModal,
    private backend: BackendService
  ) {}

  boardTitle = this.board.boardName;
  taskTitle = '';
  taskDescription = '';
  columnTitle = this.id;
  idsForDragAndDrop = this.board.idsForDragAndDrop;
  res: string[] = [];

  newTaskForm = new FormGroup({
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
  controlTitle = this.newTaskForm.get('taskTitle') as FormControl;
  controlDescription = this.newTaskForm.get('taskDescription') as FormControl;

  newColumnTitleForm = new FormGroup({
    columnTitle: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(20),
    ]),
  });
  controlColumnTitle = this.newColumnTitleForm.get(
    'columnTitle'
  ) as FormControl;

  ngOnInit(): void {}

  open(content: TemplateRef<any>, columnTitle: string = '') {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
    });
    this.controlColumnTitle.setValue(columnTitle);
  }

  drop(event: CdkDragDrop<TaskResponse[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  deleteColumn(columnId: string) {
    const boardId = this.board.boardId;
    this.id = columnId;
    const orderOfDeleted = this.order;
    this.backend.deleteColumn(boardId, columnId).subscribe((resp) => {
      window.location.reload();
      return resp;
    });
  }

  inputTitle(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.taskTitle = value;
  }

  inputDescription(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.taskDescription = value;
  }

  submitNewTask(columnId: string) {
    const orderFromLength = this.tasks.length + 1;
    const userId = localStorage.getItem('id') as string;
    return this.backend
      .createTask(
        {
          title: this.taskTitle,
          description: this.taskDescription,
          userId: userId,
        },
        this.board.boardId,
        columnId
      )
      .subscribe((resp) => {
        if ('id' in resp) {
          window.location.reload();
        } else {
          this.addInfoAboutError('failed to create your task, try later');
        }
      });
  }

  addInfoAboutError(text: string) {
    console.log(text);
  }

  inputColumnTitle(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.columnTitle = value;
  }

  submitColumnTitle(columnId: string, order: number, currentTitle: string) {
    return this.backend
      .updateColumn(
        {
          title: this.columnTitle || currentTitle,
          order: order,
        },
        this.board.boardId,
        columnId
      )
      .subscribe((resp) => {
        if ('id' in resp) {
          this.title = this.columnTitle || currentTitle;
        } else {
          this.addInfoAboutError(
            'failed to update your column title, try later'
          );
        }
      });
  }
}
