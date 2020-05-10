import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'sample',
                title    : 'Sample',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/sample',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'login',
                title    : 'LogIn',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/login',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'producttype',
                title    : 'Propduct Type',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/producttype',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'product',
                title    : 'Propduct',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/product',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'sale',
                title    : 'Sale',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/sale',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            }
        ]
    }
];
