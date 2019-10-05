import{Component,
    Input,
    Output,
    EventEmitter

        } from "@angular/core"

@Component({
    selector: "grid-ui",
    templateUrl: "./App.GridView.html"
})

export class GridComponent{

    gridColumns: Array<Object> = new Array<Object>();

    gridData: Array<Object> = new Array<Object>();

    @Input("grid-Columns")
    set setGridColumns(_gridColumns:Array<Object>){
        this.gridColumns= _gridColumns;
    }

    @Input("grid-Data")
    set setGridData(_gridData:Array<Object>){
        this.gridData = _gridData;
    }

    @Output("grid-Selected")
    eventEmitter: EventEmitter<Object> = new EventEmitter<Object>();

    SelectGrid(_selected:Object){
        this.eventEmitter.emit(_selected);
         
    }
}