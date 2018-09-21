import * as app from "application";
import { EventData } from "data/observable";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { NavigatedData, Page } from "ui/page";
import { topmost } from "ui/frame";
import { ActionItem } from 'ui/action-bar';
import { Button } from 'tns-core-modules/ui/button';
import * as SocialShare from "nativescript-social-share";

import { HomeViewModel } from "./home-view-model";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new HomeViewModel();
}

export function onDrawerButtonTap(args: EventData) {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}

export function Share(args: EventData) {
    var share = <ActionItem>args.object;
    SocialShare.shareUrl("https://www.facebook.com/healedinspirit", "Healed In Spirit", "Get Healed Fast!");
}

export function onNavigationItemTap(args: EventData){
    
    const component = <Button>args.object;
    const componentRoute = component.get("route");
    const componentTitle = component.get("title");
    const bindingContext = <HomeViewModel>component.bindingContext;

    bindingContext.selectedPage = componentTitle;

    topmost().navigate({
        moduleName: componentRoute,
        transition: {
            name: "fade"
        }
    });
}