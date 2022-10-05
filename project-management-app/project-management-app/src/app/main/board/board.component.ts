import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Injectable, OnInit, TemplateRef } from '@angular/core';
import {
  BackendService,
  ColumnTasksResponse,
  TaskResponse,
} from 'src/app/backend.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  constructor(
    private backend: BackendService,
    private modalService: NgbModal
  ) {}

  boardName = localStorage.getItem('boardTitle');
  boardId = localStorage.getItem('boardId') as string;
  title: string = '';
  columns = this.columnsConfig(this.boardId);
  resInitial: string[] = [];
  idsForDragAndDrop: string[] = [];

  newColumnForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(1)]),
  });
  controlTitle = this.newColumnForm.get('title') as FormControl;

  ngOnInit(): void {}

  open(content: TemplateRef<any>) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
    });
  }

  inputTitle(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.title = value;
  }

  drop(event: CdkDragDrop<string[]>) {
    const currentColumn = this.columns[event.currentIndex];
    const previousColumn = this.columns[event.previousIndex];
    this.backend
      .updateColumn(
        {
          title: currentColumn.title,
          order: previousColumn.order,
        },
        this.boardId,
        currentColumn.id
      )
      .subscribe((resp) => {
        if ('id' in resp) {
          this.backend
            .updateColumn(
              {
                title: previousColumn.title,
                order: currentColumn.order,
              },
              this.boardId,
              previousColumn.id
            )
            .subscribe((resp) => {
              if ('id' in resp) {
                return resp;
              } else {
                return this.addInfoAboutError(
                  'failed to create your column, try later'
                );
              }
            });
          return resp;
        } else {
          return this.addInfoAboutError(
            'failed to create your column, try later'
          );
        }
      });

    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  submitNewColumn() {
    if (this.newColumnForm.invalid) {
      return;
    }
    const order = this.getColumnOrder();
    return this.backend
      .createColumn(this.title, this.boardId)
      .subscribe((resp) => {
        if ('id' in resp) {
          this.idsForDragAndDrop.push(resp.id);
          window.location.reload();
        } else {
          this.addInfoAboutError('failed to create your column, try later');
        }
      });
  }

  columnsConfig(boardId: string) {
    let result: ColumnTasksResponse[] = [];
    this.backend.getAllColumns(boardId).subscribe((resp) => {
      if (Array.isArray(resp) && !resp.length) {
        return;
      }
      if (Array.isArray(resp) && 'id' in resp[0]) {
        const respSorted = resp.sort((a, b) => a.order - b.order);
        Array.from(respSorted).forEach((element) => {
          result.push({
            id: element?.id,
            title: element?.title,
            order: element?.order,
            tasks: this.configTasks(element.id).result,
            tasksIds: this.configTasks(element.id).taskIds,
          });
          this.idsForDragAndDrop.push(element.id);
        });
      } else if ('noConnection' in resp) {
        this.addInfoAboutError(
          'no Internet Connection, failed to load your columns'
        );
      } else if ('boardNotFound' in resp) {
        this.addInfoAboutError('board does not exist or has been removed');
      } else {
        this.addInfoAboutError('failed to load your columns, try later');
      }
    });
    return result;
  }

  configTasks(columnId: string) {
    let result: TaskResponse[] = [];
    let taskIds: string[] = [];
    this.backend.getAllTasks(this.boardId, columnId).subscribe((resp) => {
      if (Array.isArray(resp) && !resp.length) {
        return;
      }
      if (Array.isArray(resp) && 'id' in resp[0]) {
        Array.from(resp).forEach((element) => {
          result.push({
            id: element.id,
            title: element.title,
            done: element.done,
            order: element.order,
            description: element.description,
            userId: element.userId,
            boardId: element.boardId,
            columnId: element.columnId,
            filename: element.filename,
            fileSize: element.fileSize,
          });
          taskIds.push(element.id);
        });
      } else if ('noConnection' in resp) {
        this.addInfoAboutError(
          'no Internet Connection, failed to load your tasks'
        );
      } else if ('boardNotFound' in resp) {
        this.addInfoAboutError('tasks do not exist or has been removed');
      } else {
        this.addInfoAboutError('failed to load your tasks, try later');
      }
    });
    return {
      result: result,
      taskIds: taskIds,
    };
  }

  addInfoAboutError(text: string) {
    console.log(text);
  }

  getColumnOrder(order = 0): number {
    order += 1;
    return this.columns.find((unit) => unit.order === order)
      ? this.getColumnOrder(order + 1)
      : order;
  }
}
