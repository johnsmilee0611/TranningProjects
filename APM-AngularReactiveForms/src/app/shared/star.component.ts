import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component ({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    starWidth: number;
    @Input("rating") rating: number;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }

    onClick() {
        this.notify.emit(this.rating.toString());
    }
}