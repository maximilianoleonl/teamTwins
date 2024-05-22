import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    @Input({required: true}) imageUrl = "";
    @Input({required: true}) title = "";
    @Input({required: true}) description = "";
}
