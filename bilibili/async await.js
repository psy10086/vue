const url = 'www.gorest.con.in/public/v1/users';

fetch( `${url}/1/` )
    .then( response=> response.json() )
    .then( json => json.data )
    .then( data => console.log(data.name) )

fetch( `${url}/2/` )
    .then( response=> response.json() )
    .then( json => json.data )
    .then( data => console.log(data.name) )

fetch( `${url}/3/` )
    .then( response=> response.json() )
    .then( json => json.data )
    .then( data => console.log(data.name) )

// =>

let bb = async () => {
    const url = 'www.gorest.con.in/public/v1/users';
    let response1 = await fetch(`${url}/1`);
    let json1 = await response1.json();
    let name1 = await json1.data.name;

    let response2 = await fetch(`${url}/2`);
    let json2 = await response2.json();
    let name2 = await json2.data.name;
    console.log(name1,name2)
}
bb()

//=>

let cc = async () => {
    const url = 'www.gorest.con.in/public/v1/users';
    // 捕获异常
    try {
        let response = await Promise.all(
            // 使用promise.all可以并行处理
            [fetch(`${url}/1`), fetch(`${url}/2`), fetch(`${url}/3`)]
        );
        let jsons = response.map(response => response.json());
        // 因为调用json()方法后会返回promise
        // 所以还要用一次promise all
        // 并且用await拿到promise执行成功的结果
        let values = await Promise.all(jsons);
        values.map(values=>{
            console.log(values.data.name)
        })
    } catch (error){
        console.log(error)
    }
}
cc();