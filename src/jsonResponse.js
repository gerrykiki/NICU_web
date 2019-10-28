// Get api

//資料更新時間
const updatetime = {
    'time': 1567051200000
}

const eventdata = [
    {
        "item": "schedule",
        "time": 1565748000000,
        "result": "手術前檢查",
        "name": "林博偉",
        "bednumber": "01",
        "writter": "林天財"
    },
    {
        "item": "event",
        "time": 1565748000000,
        "result": "傷口變大了",
        "name": "王添財",
        "bednumber": "02",
        "writter": "林天財"
    }
]
//病床總覽 (Get all bed from ward)
const ward_bed_information = [
    {
        "BedNumber": "01",
        "HISID": "123456789",
        "Name": "劉嘉慶",
        "IDNumber": "A123456798",
        "Gender": "female",
        "Birthday": 1566287810473,
        "Height": 90,
        "Weight": 700,
        "Diff_Weight": 5,
        "Reports": 3,
        "Non_Reports": 1,
        "Remarks": "TEXT",
        "GAWeek": 20,
        "GADay": 2,
        "Pregnant_Week": 30,
        "Pregnant_Day": 6,
        "ImportantMatters": [
            {
                "Content": "TEXT"
            }
        ]
    }
]

//Ward_bed_vitalData_last POST
const ward_bed_lastData = [
    {
        "MedicalNumber": "123456789",
        "Data": {
            "HR": 120,
            "ABP1": 45,
            "ABP2": 30,
            "ABP3": 35,
            "SpO2": 96,
            "BT": 37.5,
            "RR": 22
        },
        "Status": {
            "Ventilator": false,
            "TPN": true,
            "NPO": false,
            "ECMO": false,
            "Antibiotics": false,
            "Hemodialysis": false,
            "Foley": false,
            "Drain": false
        }
    },
    {
        "MedicalNumber": "987654321",
        "Data": {
            "HR": 120,
            "ABP1": 45,
            "ABP2": 30,
            "ABP3": 35,
            "SpO2": 96,
            "BT": 37.5,
            "RR": 22
        }
    },
    {
        "MedicalNumber": "123454321",
        "Data": {
            "HR": 120,
            "ABP1": 45,
            "ABP2": 30,
            "ABP3": 35,
            "SpO2": 96,
            "BT": 37.5,
            "RR": 22
        }
    }
]

const WardInfo = {
    UpdateTime: 1567051200000,
    Director: "林又新",
    HeadNurse: "鄭麗貞",
    BedTotal: 12,
    SignBed: 7,
    EmptyBed: 9,
    TransferBed: 8,
    NewPatient: 2,
    Ventilator: 1,
    NPO: 7,
    TPN: 4,
    ECMO: 8,
    Antibiotics: 6,
    Hemodialysis: 1,
    Announcement: [
        {
            time: 1567051200000,
            text: "7/10 王大明醫師請假，下午請李小華醫師cover ，6/30XXX醫師留",
            writter: "張大帥"
        },
        {
            time: 1567051250000,
            text: "「超音波用完請記得歸還原位」",
            writter: "邱獻章"
        },
        {
            time: 1567051290000,
            text: "「6月起擴大公費施打B型肝炎免疫球蛋白」",
            writter: "邱獻章"
        },
        {
            time: 1567051290000,
            text: "「6月起擴大公費施打B型肝炎免疫球蛋白」",
            writter: "邱獻章"
        },
        {
            time: 1567051290000,
            text: "「6月起擴大公費施打B型肝炎免疫球蛋白」",
            writter: "邱獻章"
        },
        {
            time: 1567051290000,
            text: "「6月起擴大公費施打B型肝炎免疫球蛋白」",
            writter: "邱獻章"
        },
        {
            time: 1567051290000,
            text: "「6月起擴大公費施打B型肝炎免疫球蛋白」",
            writter: "邱獻章"
        },
        {
            time: 1567051290000,
            text: "「6月起擴大公費施打B型肝炎免疫球蛋白」",
            writter: "邱獻章"
        },
        {
            time: 1567051290000,
            text: "「6月起擴大公費施打B型肝炎免疫球蛋白」",
            writter: "邱獻章"
        },
        {
            time: 1567051290000,
            text: "「6月起擴大公費施打B型肝炎免疫球蛋白」",
            writter: "邱獻章"
        }
    ]
}
const labdata = [
    [{ title: "Glucose", score: 77, date: "2019/01/01" }],
    [{ title: "WBC", score: 19647, date: "Seg 59%2019/01/01" }],
    [{ title: "WBC", score: 14.8, date: "2019/01/01" }],
    [{ title: "Platelet", score: 125, date: "2019/01/01" }],
    [
        { title: "Na+", score: 125, date: "2019/01/01" },
        { title: "K+", score: 125, date: "2019/01/01" },
        { title: "Ca2+", score: 125, date: "2019/01/01" },
        { title: "P", score: 125, date: "2019/01/01" },
        { title: "Mg2+", score: 125, date: "2019/01/01" },
    ],
    [
        { title: "CRP", score: 125, date: "2019/01/01" }
    ],
    [
        { title: "Procalcitionin", score: 125, date: "2019/01/01" }
    ],
    [
        { title: "Current Antibiotics", score: 125, date: "2019/01/01" }
    ],
    [
        { title: "Bun", score: 125, date: "2019/01/01" },
        { title: "Cr", score: 125, date: "2019/01/01" }
    ],
    [
        { title: "ALT", score: 125, date: "2019/01/01" },
        { title: "AST", score: 125, date: "2019/01/01" }
    ],
    [
        { title: "TBIL", score: 125, date: "2019/01/01" },
        { title: "D.Bil", score: 125, date: "2019/01/01" }
    ],
    [
        { title: "ALKP", score: 125, date: "2019/01/01" },
        { title: "Total Ca", score: 125, date: "2019/01/01" },
        { title: "LDH", score: 125, date: "2019/01/01" }
    ],
    [
        { title: "Iron", score: 125, date: "2019/01/01" },
        { title: "TIBC", score: 125, date: "2019/01/01" },
        { title: "FeSat", score: 125, date: "2019/01/01" },
        { title: "Ferritin", score: 125, date: "2019/01/01" }
    ]
]
const jsonResponse = {
    "Userdata": {
        "user": [
            {
                "Name": "程子倩", //string
                "Bednumber": "01",
                "Gender": "FeMale", //性別
                "Week": 2, //週數
                "id": "20190817001", //string
                "published": true, //是否公開中
                "publishednumber": 1,
                "Note": "隨時注意病人血壓狀況隨時注意病人血壓狀況", //20字
                "phoneNumber": "0933123456",
                "Birthday": 1566287810473,
                "MainDoctor": "維大力",
                "detaildata":
                    [
                        {
                            "item": "Depends",
                            "time": 1565395200,
                            "data": true
                            //乎
                            //time:最後紀錄時間
                        },
                        {
                            "item": "TPN",
                            "time": 1565395200,
                            "data": true

                        },
                        {
                            "item": "NPO",
                            "time": 1565395200,
                            "data": false

                        },
                        {
                            "item": "Anti",
                            "time": 1565395200,
                            "data": false
                            //抗

                        },
                        {
                            "item": "Floey",
                            "time": 1565395200,
                            "data": true
                            //葉
                        },
                        {
                            "item": "Drain",
                            "time": 1565395200,
                            "data": false
                            //葉
                        }
                    ],
                "data": {
                    "Weight": 500,
                    "WeightDif": 700,
                    "RowData": [
                        {
                            "time": 1565395200,
                            "item": "ABP_hight",
                            "data": 140
                        },
                        {
                            "time": 1565395200,
                            "item": "ABP_low",
                            "data": 30
                        },
                        {
                            "time": 1565395200,
                            "item": "ABP_avg",
                            "data": 40
                        },
                        {
                            "time": 1565395200,
                            "item": "HR",
                            "data": 90
                        },
                        {
                            "time": 1565395200,
                            "item": "RR",
                            "data": 90
                        },
                        {
                            "time": 1565395200,
                            "item": "BT",
                            "data": 90
                        },
                        {
                            "time": 1565395200,
                            "item": "Urine",
                            "data": 90
                        },
                        {
                            "time": 1565395200,
                            "item": "Suger",
                            "data": 90
                        },
                        {
                            "time": 1565395200,
                            "item": "SpO2",
                            "data": 90
                        }
                    ]
                }
            }
        ]
    }
};

//Wardview TCP data
const centerrowdata = {
    "id": 20190817001,
    "data": {
        "Weight": 5000,
        "WeightDif": 700,
        "BP": [
            {
                "time": 1565395200,
                "DBP": 60,
                "SBP": 90
            }
        ],
        "HR": [
            {
                "time": 1565395200,
                "data": 60
            }
        ],
        "RR": [
            {
                "time": 1565395200,
                "data": 60
            }
        ],
        "BT": [
            {
                "time": 1565395200,
                "data": 60
            }
        ],
        "Urine": [
            {
                "time": 1565395200,
                "data": 60
            }
        ],
        "Suger": [
            {
                "time": 1565395200,
                "data": 60
            }
        ],
        "SP": [
            {
                "time": 1565395200,
                "data": 60
            }
        ]
    }
}

const growdata = {
    Male_befor: [
        { y: 22, min: 420, max: 600 },
        { y: 23, min: 470, max: 700 },
        { y: 24, min: 510, max: 800 },
        { y: 25, min: 570, max: 900 },
        { y: 26, min: 610, max: 1040 },
        { y: 27, min: 700, max: 1200 },
        { y: 28, min: 790, max: 1340 },
        { y: 29, min: 870, max: 1520 },
        { y: 30, min: 1000, max: 1740 },
        { y: 31, min: 1120, max: 2000 },
        { y: 32, min: 1300, max: 2240 },
        { y: 33, min: 1500, max: 2500 },
        { y: 34, min: 1700, max: 2800 },
        { y: 35, min: 1960, max: 3040 },
        { y: 36, min: 2180, max: 3300 },
        { y: 37, min: 2400, max: 3500 },
        { y: 38, min: 2600, max: 3780 },
        { y: 39, min: 2810, max: 3980 },
        { y: 40, min: 3000, max: 4200 },
        { y: 41, min: 3200, max: 4440 },
        { y: 42, min: 3400, max: 4700 },
        { y: 43, min: 3600, max: 5000 },
        { y: 44, min: 3800, max: 5270 }
    ],
    FeMale_before: [
        { y: 22, min: 400, max: 580 },
        { y: 23, min: 430, max: 640 },
        { y: 24, min: 490, max: 730 },
        { y: 25, min: 550, max: 850 },
        { y: 26, min: 580, max: 1000 },
        { y: 27, min: 630, max: 1120 },
        { y: 28, min: 700, max: 1300 },
        { y: 29, min: 800, max: 1500 },
        { y: 30, min: 900, max: 1700 },
        { y: 31, min: 1050, max: 1910 },
        { y: 32, min: 1200, max: 2180 },
        { y: 33, min: 1400, max: 2400 },
        { y: 34, min: 1600, max: 2680 },
        { y: 35, min: 1850, max: 2930 },
        { y: 36, min: 2050, max: 3200 },
        { y: 37, min: 2300, max: 3490 },
        { y: 38, min: 2480, max: 3700 },
        { y: 39, min: 2680, max: 3900 },
        { y: 40, min: 2820, max: 4100 },
        { y: 41, min: 2980, max: 4300 },
        { y: 42, min: 3150, max: 4520 },
        { y: 43, min: 3300, max: 4740 },
        { y: 44, min: 3500, max: 5000 }
    ],
    Male_after: [
        { y: 0,min: 2500, max: 4300 },
        { y: 1,min: 2600, max: 4500 },
        { y: 2,min: 2800, max: 4900 },
        { y: 3,min: 3100, max: 5200 },
        { y: 4,min: 3400, max: 5600 },
        { y: 5,min: 3600, max: 5900 },
        { y: 6,min: 3800, max: 6300 }
    ],
    FeMale_after: [
        { y: 0,min: 2400, max: 4200 },
        { y: 1,min: 2500, max: 4400 },
        { y: 2,min: 2700, max: 4600 },
        { y: 3,min: 2900, max: 5000 },
        { y: 4,min: 3100, max: 5300 },
        { y: 5,min: 3300, max: 5600 },
        { y: 6,min: 3500, max: 5900 }
    ]
}





export { jsonResponse, centerrowdata, WardInfo, updatetime, ward_bed_information, ward_bed_lastData, labdata, eventdata, growdata };