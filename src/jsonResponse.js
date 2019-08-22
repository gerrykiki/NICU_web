
const jsonResponse = {
    "Userdata": {
        "user": [
            {
                "Name": "程子倩", //string
                "Channel": "Ch01", //Channel
                "Gender": "FeMale", //性別
                "Week": 2, //週數
                "id": "20190817001", //string
                "published": true, //使否公開中
                "publishednumber": 1,
                "Note":"隨時注意病人血壓狀況隨時注意病人血壓狀況",
                "detaildata":
                    [
                        {
                            "item": "Depends",
                            "time": 1565395200,
                            "data": true
                            //乎
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
                            "item": "TH",
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
                            "item": "Leaf",
                            "time": 1565395200,
                            "data": true
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
export { jsonResponse, centerrowdata };