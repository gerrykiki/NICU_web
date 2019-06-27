import Layoutframe from './Layout'
import Bedview from '../Content/Bedview'
import Caseview from '../Content/Caseview'
import Historyview from '../Content/Historyview'
import classinformation from '../Content/CaseInfo'

const routes = [
    {
        path: '/Main',
        component: Layoutframe,
        breadcrumbName:'',
        routes: [
            {
                path: '/Main/Bedview',
                component: Bedview,
                breadcrumbName:'病房總覽'
            },
            {
                path: '/Main/Caseview',
                component: Caseview,
                breadcrumbName:'個案資訊管理'
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
            }
        ]
    }
];

export default routes;