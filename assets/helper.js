function getToday() {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const d = new Date();
    let day = weekday[d.getDay()];
    let time = new Date();
    time = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    document.getElementById("today").innerHTML = `${day} ${time}`;

    return day
}

let weekDay = getToday();

MY_AUTH_USER = '1'

// # ss      dur-ogbt-zdy
// # flat    pfs-cpqc-fmq
// # cn      mwz-acxx-apm
// # mm      dqp-muhy-fde
// # mss     isf-nnjj-joj
// # dm      nec-ycwt-ymn


function getDetails(name){

    switch(name) {
        case 'CN':
            courseName = "CST 303 Computer Networks (CN)"
            meetCode = "mwz-acxx-apm"
            return [courseName, meetCode]

        case 'SS':
            courseName  = "CST 305 System Software (SS)"
            meetCode = "dur-ogbt-zdy"
            return [courseName, meetCode]

        case 'DM':
            courseName = "MCN 301 Disaster Management (DM)"
            meetCode = "nec-ycwt-ymn"
            return [courseName, meetCode]

        case 'FLAT':
            courseName = "CST 301 Formal Languages and Automata Theory (FLAT)"
            meetCode = "pfs-cpqc-fmq"
            return [courseName, meetCode]

        case 'MM':
            courseName = "CST 307 Microprocessors and Microcontrollers (MM)"
            meetCode = "dqp-muhy-fde"
            return [courseName, meetCode]

        case 'MSS':
            courseName = "CST 309 Management of Software Systems (MSS)"
            meetCode = "isf-nnjj-joj"
            return [courseName, meetCode]

        case 'DBMSLAB':
            courseName = "CSL 333 Database Management System Lab (DBMS Lab)"
            meetCode = "isf-nnjj-joj"
            return [courseName, meetCode]
    }
}

TIME_TABLE = {
    "Monday":['CN', 'SS', 'DM', 'FLAT', 'MM'],
    "Tuesday": ['SS', 'CN', 'FLAT', 'MM', "MSS"],
    "Wednesday":['MM', 'FLAT', 'CN', 'DBMSLAB', 'MSS'],
    "Thursday":['SS', 'CN', 'MSS', "FLAT", 'MM'],
    "Friday":['FLAT', 'CN', 'SS', 'MM', 'DM'],
}

function getTime(v) {
    switch(v) {
        case 0:
            return '09.00 - 09.50 AM'

        case 1:
            return '10.00 - 10.50 AM'

        case 2:
            return '11.00 - 11.50 AM'

        case 3:
            return '12.00 - 12.50 AM'

        case 4:
            return '02.00 - 02.50 PM'
    }
}

function display() {
    for(let i=0; i<5; i++) {
        courseName = getDetails(TIME_TABLE[weekDay][i])[0]
        meetCode = getDetails(TIME_TABLE[weekDay][i])[1]
        document.getElementById(`class${i}`).innerHTML = `${courseName}`
        document.getElementById(`class${i}tnm`).innerHTML = `${getTime(i)} &nbsp;<b> &middot;</b> &nbsp; ${meetCode}`;
        document.getElementById(`class${i}link`).href=`http://meet.google.com/${meetCode}?pli=1&authuser=${MY_AUTH_USER}`
    }
}

display();