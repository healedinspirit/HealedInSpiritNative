import { Observable } from "data/observable";

import { ObservableProperty } from "../shared/observable-property-decorator";
import { SelectedPageService } from "../shared/selected-page-service";

export class HomeViewModel extends Observable {
    @ObservableProperty() selectedPage: string;

    constructor() {
        super();

        SelectedPageService.getInstance().updateSelectedPage("Home");
        
        SelectedPageService.getInstance().selectedPage$
        .subscribe((selectedPage: string) => this.selectedPage = selectedPage);
    }
}
