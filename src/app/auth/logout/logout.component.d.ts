/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
 import { OnInit } from '@angular/core';
 import { Router } from '@angular/router';

 import * as ɵngcc0 from '@angular/core';
import { NbAuthService } from '@nebular/auth/services/auth.service';
 export declare class NbLogoutComponent implements OnInit {
     protected service: NbAuthService;
     protected options: {};
     protected router: Router;
     redirectDelay: number;
     strategy: string;
     constructor(service: NbAuthService, options: {}, router: Router);
     ngOnInit(): void;
     logout(strategy: string): void;
     getConfigValue(key: string): any;
     static ɵfac: ɵngcc0.ɵɵFactoryDef<NbLogoutComponent, never>;
     static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NbLogoutComponent, "nb-logout", never, {}, {}, never, never>;
 }
 
 //# sourceMappingURL=logout.component.d.ts.map