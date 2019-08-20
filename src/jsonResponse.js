
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
                "detaildata": {
                    "Depends": true, //乎
                    "TPN": true,
                    "NPO": false,
                    "TH": true, //透
                    "Anti": false, //抗
                    "Leaf": false, //葉
                },
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