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
        path: '/Main',
        component: Layoutframe,
        breadcrumbName:'',
        routes: [
            {
                path: '/Main/Bedview',
                component: Bedview,
                breadcrumbName:'wardview',
                routes: [
                    {
                        path: '/Main/Bedview/Wardindex',
                        component: Wardinfoindex,
                        breadcrumbName:'病房總覽'
                    },
                    {
                        path: '/Main/Bedview/Warduser',
                        component: Wardinfouser,
                        breadcrumbName:'病房總覽'
                    }
                ]
            },
            {
                path: '/Main/Patientview',
                component: Patientviewlayout,
                breadcrumbName:'首頁/個案資訊管理/個案資訊'
            },
            {
                path: '/Main/Historypatientview',
                component: Patientviewlayout,
                breadcrumbName:'首頁/個案資訊管理/個案資訊'
            },
            {
                path: '/Main/classinformation',
                component: classinformation,
                breadcrumbName:'個案資訊'
            },
            {
                path: '/Main/Historyview',
                component: Historyview,
                breadcrumbName:'歷史病歷管理'
            },
            {
                path: '/Main/Systemcontrol',
                component: Systemcontrol,
                breadcrumbName:'系統管理'
            }
        ]
    }
];

export default routes;