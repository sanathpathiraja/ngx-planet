import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { PlanetPortalApplication, GlobalEventDispatcher } from '../../../../../packages/planet/src/public_api';
import { CounterService } from '../counter.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
    constructor(
        private planetPortal: PlanetPortalApplication,
        private router: Router,
        public counter: CounterService,
        private globalEventDispatcher: GlobalEventDispatcher
    ) {}

    openADetail() {
        this.globalEventDispatcher.dispatch('openADetail');
    }

    toHostAbout() {
        this.planetPortal.navigateByUrl('/about');
        // this.hostApplication.router.navigateByUrl('/about');
    }

    toAbout() {
        this.router.navigateByUrl('/about');
    }
}
