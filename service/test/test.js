function getSomething(){
	return 'something'
}

async function testAsync(){
	return 'hello async';
	
}


async function test(){
	const v1 = await getSomething();
	const v2 = await testAsync();
	console.log(v1)
	console.log(v2)
	
}
//await :async await


//const result = testAsync();

//console.log(result)  //返回一个promise
//test();

function takeLongTime(){
	return new Promise(resolve=>{
		setTimeout(()=>resolve('long_time_value'),3000)
	})
}

async function test1(){
	const v = await takeLongTime()
	console.log(v)
}


test1();
