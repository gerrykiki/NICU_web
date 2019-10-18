import Layoutframe from './Layout'
import Bedview from '../Wardview/Bedview'
import Historyview from '../Content/Historyview'
import classinformation from '../Content/CaseInfo'
import Wardinfoindex from '../Wardview/Wardinfoindex'
import Wardinfouser from '../Wardview/Wardinfouser'
import Patientviewlayout from '../Patientview/Patientviewlayout'
import Systemcontrol from '../Content/Systemcontrol'

const routes = [
    {
        path: '/',
        component: Layoutframe,
        breadcrumbName:'',
        routes: [
            {
                path: '/Bedview',
                component: Bedview,
                breadcrumbName:'wardview',
                routes: [
                    {
                        path: '/Bedview/Wardindex',
                        component: Wardinfoindex,
                        breadcrumbName:'病房總覽'
                    },
                    {
                        path: '/Bedview/Warduser',
                        component: Wardinfouser,
                        breadcrumbName:'病房總覽'
                    }
                ]
            },
            {
                path: '/Patientview',
                component: Patientviewlayout,
                breadcrumbName:'首頁/個案資訊管理/個案資訊'
            },
            {
                path: '/Historypatientview',
                component: Patientviewlayout,
                breadcrumbName:'首頁/個案資訊管理/個案資訊'
            },
            {
                path: '/classinformation',
                component: classinformation,
                breadcrumbName:'個案資訊'
            },
            {
                path: '/Historyview',
                component: Historyview,
                breadcrumbName:'歷史病歷管理'
            },
            {
                path: '/Systemcontrol',
                component: Systemcontrol,
                breadcrumbName:'系統管理'
            }
        ]
    }
];

export default routes;