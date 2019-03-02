import { Routes } from '@angular/router';

import { ListViewComponent } from './views/list-view/list-view.component';
import { ItemViewComponent } from './views/item-view/item-view.component';
import { ListViewResolverService } from './views/list-view/list-view-resolver.service';
import { ItemViewResolverService } from './views/item-view/item-view-resolver.service';

export const AppRoutes: Routes = [
    {
        path: "",
        redirectTo: "list",
        pathMatch: "full"
    },
    {
        path: "list",
        component: ListViewComponent,
        resolve: {
            pokemons: ListViewResolverService
        }
    },
    {
        path: "list/:id",
        component: ItemViewComponent,
        resolve: {
            pokemon: ItemViewResolverService
        }
    },

];