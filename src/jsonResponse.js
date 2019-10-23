// Get api

//資料更新時間
const updatetime = {
    'time':1567051200000
}

//病床總覽 (Get all bed from ward)
const ward_bed_information = [
    {
        "BedNumber":"01", 
        "HISID":"123456789",  
        "Name":"劉嘉慶",
        "IDNumber":"A123456798",
        "Gender":"female",
        "Birthday":1566287810473,
        "Height":90,
        "Weight":700,
        "Diff_Weight":5,
        "Reports":3,
        "Non_Reports":1,
        "Remarks":"TEXT",
        "GAWeek":20,
        "GADay":2,
        "Pregnant_Week":30,
        "Pregnant_Day":6,
        "ImportantMatters":[ 
                            {
                                "Content":"TEXT"
                            }
                        ]
    }
]

//Ward_bed_vitalData_last POST
const ward_bed_lastData = [
    {
        "MedicalNumber":"123456789",
        "Data":{
            "HR":120,
            "ABP1":45,
            "ABP2":30,
            "ABP3":35,
            "SpO2":96,
            "BT":37.5,
            "RR":22
        },
        "Status":{
            "Ventilator":true,
            "TPN":true,
            "NPO":false,
            "ECMO":false,
            "Antibiotics":false,
            "Hemodialysis":false,
            "Foley":false,
            "Drain":false
        }
    },
    {
        "MedicalNumber":"987654321",
        "Data":{
            "HR":120,
            "ABP1":45,
            "ABP2":30,
            "ABP3":35,
            "SpO2":96,
            "BT":37.5,
            "RR":22
        }
    },
    {
        "MedicalNumber":"123454321",
        "Data":{
            "HR":120,
            "ABP1":45,
            "ABP2":30,
            "ABP3":35,
            "SpO2":96,
            "BT":37.5,
            "RR":22
        }
    }
]

function simulate_vitaldata_day() {

    var dataset = []; //建立空的資料陣列
    for (let i = 0; i < 24; i++) {
        const data = Math.floor(Math.random() * 50) + 50;
        let min = 30;
        let max = 60;
        if (i > 18) {
            min = 50;
            max = 80;
        }
        dataset.push({
            Data: data,
            Min: min,
            Max: max
        })
    }
    return dataset;
}

const WardInfo = {
    UpdateTime:1567051200000,
    Director:"林又新",
    HeadNurse:"鄭麗貞",
    BedTotal:12,
    SignBed:7,
    EmptyBed:9,
    TransferBed:8,
    NewPatient:2,
    Ventilator:1,
    NPO:7,
    TPN:4,
    ECMO:8,
    Antibiotics:6,
    Hemodialysis:1,
    Announcement:[
        {
            time:1567051200000,
            text:"7/10 王大明醫師請假，下午請李小華醫師cover ，6/30XXX醫師留"
        },
        {
            time:1567051250000,
            text:"「超音波用完請記得歸還原位」"
        },
        {
            time:1567051290000,
            text:"「6月起擴大公費施打B型肝炎免疫球蛋白」"
        }
    ]
}

const jsonResponse = {
    "Userdata": {
        "user":  [
            {
                "Name": "程子倩", //string
                "Channel": "Ch01", //Channel
                "Gender": "FeMale", //性別
                "Week": 2, //週數
                "id": "20190817001", //string
                "published": true, //是否公開中
                "publishednumber": 1,
                "Note":"隨時注意病人血壓狀況隨時注意病人血壓狀況",
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
                            "item": "HD",
                            "time": 1565395200,
                            "data": true
                            //透
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
                    "Weight": 5000,
                    "WeightDif": 700,
                    "RowData": [
                        {
                            "time": 1565395200,
                            "item": "DBP",
                            "data": 60
                        },
                        {
                            "time": 1565395200,
                            "item": "SBP",
                            "data": 90
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
                            "item": "SP",
                            "data": 90
                        }
                    ]
                }
            },
            {
                "Name": "程子", //string
                "Channel": "Ch01", //Channel
                "Gender": "FeMale", //性別
                "Week": 2, //週數
                "id": "20190817002", //string
                "published": true, //是否公開中
                "publishednumber": 1,
                "Note":"隨時注意病人血壓狀況隨時注意病人血壓狀況",
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
                            "item": "HD",
                            "time": 1565395200,
                            "data": true
                            //透
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
                    "Weight": 5000,
                    "WeightDif": 700,
                    "RowData": [
                        {
                            "time": 1565395200,
                            "item": "DBP",
                            "data": 60
                        },
                        {
                            "time": 1565395200,
                            "item": "SBP",
                            "data": 90
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
                            "item": "SP",
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
export { jsonResponse, centerrowdata, WardInfo, updatetime, ward_bed_information, ward_bed_lastData };