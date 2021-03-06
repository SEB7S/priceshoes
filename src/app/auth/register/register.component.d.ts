/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';


import * as ɵngcc0 from '@angular/core';
import { NbAuthService, NbAuthSocialLink } from '@nebular/auth';
export declare class NbRegisterComponent {
    protected service: NbAuthService;
    protected options: {};
    protected cd: ChangeDetectorRef;
    protected router: Router;
    redirectDelay: number;
    showMessages: any;
    strategy: string;
    submitted: boolean;
    errors: string[];
    messages: string[];
    user: any;
    socialLinks: NbAuthSocialLink[];
    constructor(service: NbAuthService, options: {}, cd: ChangeDetectorRef, router: Router);
    register(): void;
    getConfigValue(key: string): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NbRegisterComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NbRegisterComponent, "nb-register", never, {}, {}, never, never>;
}

//# sourceMappingURL=register.component.d.ts.map