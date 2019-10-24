import React from 'react';

const Month_format = (time) => {
    switch (time) {
        case 0:
            return "01";
        case 1:
            return "02";
        case 2:
            return "03";
        case 3:
            return "04";
        case 4:
            return "05";
        case 5:
            return "06";
        case 6:
            return "07";
        case 7:
            return "08";
        case 8:
            return "09";
        case 9:
            return "10";
        case 10:
            return "11";
        case 11:
            return "12";
        default:
            return null;
    }
};
const format_bednumber = (number) => {
    if (number < 10) {
        return "0" + number;
    }
    return number;
}

export { Month_format,format_bednumber }