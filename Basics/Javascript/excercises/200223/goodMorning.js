const GoodMorning = hour => {
    while (hour < 20) {
        if(hour < 12) {
            console.log('Good morning at ' + hour)
        } else if (hour > 11) {
            console.log('Good afternoon at ' + hour)
        }

        hour++;
    }
}

GoodMorning(4)