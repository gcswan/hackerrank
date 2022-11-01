function roomWithMostAppointments(apps, rooms) {
    // app = [time, duration]
    // r = [#ofApps, nextAvailable]
    let r = new Array(rooms).fill([0,0])
    
    for (let i = 0; i < apps.length; i++) {
        console.log('app: ', i, ' ', apps[i])
        let earliest = 0
        let booked = false
        
        for (let j = 0; j < r.length; j++) {
            
            if (booked === false && r[j][1] <= apps[i][0]) {
                // increment number of apps for room and set next time available by adding duration to scheduled time
                r[j] = [r[j][0] + 1, apps[i][0] + apps[i][1]]
                booked = true
            }

             // keep track of earliest available room
            if (r[j][1] < r[earliest][1]) {
                earliest = j;
            }
            console.log('j: ', j, 'room: ', r[j], 'apps: ', r[j][0], 'next available: ', r[j][1], 'earliest:', earliest)
            console.log('------')
        }

        if (booked !== true) {
            // schedule app for earliest available room
            r[earliest] = [r[earliest][0] + 1, + r[earliest][1] + apps[i][1]]
            console.log('pushed: ', earliest, ':', r[earliest])
        }
        console.log({r, booked})
        console.log('==========================')
    }

    let mostApps = 0;
    for (let k = 0; k < r.length; k++) {
        if (r[k][0] > r[mostApps][0]) mostApps = k
    }
    
    return mostApps;
}



const apps = [[0,1], [0,1], [0,1], [1,2], [1,2], [2,1], [2,2], [4, 1], [4,1], [4,1], [5,2], [5,1], [5,1], [7,1], [7,1], [8,1], [6,1], [7,1], [8,2], [8,1], [9,2], [9,1], [10,1], [10,1]]

console.log(roomWithMostAppointments(apps, 3))