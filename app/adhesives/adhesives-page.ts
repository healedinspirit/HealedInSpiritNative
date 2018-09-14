import { EventData } from "data/observable";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Page } from "ui/page";
import * as app from "application";

import { AdhesivesViewModel } from "./adhesives-view-model";

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new AdhesivesViewModel();
}

export function onDrawerButtonTap(args: EventData) {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}
