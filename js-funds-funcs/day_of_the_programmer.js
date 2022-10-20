function dayOfProgrammer(year) {
    
    let first_eight_month = 243;
    if (year < 1700 || year > 2700) {
        return "This year is out of range";
    }

    if (year > 1918 && (year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        first_eight_month = 244;
    }

    if (year < 1918 && year % 4 == 0) {
        first_eight_month = 244;
    }

    if (year == 1918){
        first_eight_month = 230;
    }

    return `${256 - first_eight_month}.09.${year}`;

}

console.log(dayOfProgrammer(1918));