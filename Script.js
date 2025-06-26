console.log(working)
let time =19; 
let name = 'saravanan';
// if(time < 12){
    // console.log('morning')
    //}else{
        //console.log('night')
        //}
        
        //else if
        if (time <12){
            console.log('Good morning');
        } else if (time < 18) {
            console.log('Good Afternoon');
        } else {
            console.log('Good Night')
        }
        if (name == 'sanjay') {
            console.log('Good Morning Mentor');
        } else {
            console.log('Couldn"t identify you')

        //for loop
        for (let i = 0; i <= 5; i + 1) {
             //i = 5
            console.log(i); // 0, 1, 2, 3, 4
        }
         for (let i = 0; i <= 5; i + 1) {
             //i = 5
            console.log(i); // 0, 1, 2, 3, 4
        }     
        console.log('task');
        // console.log('Number', 1, 'ODD');
        // console.log('Number', 2, 'EVEN');
        //STARTING FROM 1 to 10
        
        for (let i = 1; i <= 10; i++) {
            if (i % 2 == 0) {
                console.log('Number', i, 'Even');
                } else {
                console.log('Number', i, 'ODD');