import { Routes } from '@angular/router';

import { ListViewComponent } from './views/list-view/list-view.component';
import { ItemViewComponent } from './views/item-view/item-view.component';

export const AppRoutes: Routes = [
    {
        path: "",
        redirectTo: "list",
        pathMatch: "full"
    },
    {
        path: "list",
        component: ListViewComponent,
        // resolve: {
        //     pokemons: PokemonListResolverService
        // }
    },
    {
        path: "list/:id",
        component: ItemViewComponent,
        // resolve: {
        //     pokemon: PokemonResolverService
        // }
    },

];