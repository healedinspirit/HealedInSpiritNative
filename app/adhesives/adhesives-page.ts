import * as app from "application";
import { EventData } from "data/observable";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { NavigatedData, Page } from "ui/page";
import { Button } from 'tns-core-modules/ui/button';

import { AdhesivesViewModel } from "./adhesives-view-model";

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new AdhesivesViewModel();
}

export function onDrawerButtonTap(args: EventData) {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}
