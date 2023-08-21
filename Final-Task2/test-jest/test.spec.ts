// #### Task 2 💻
// - Создать тестовый фреймворк для API (интеграционных) тестов для web приложения https://jsonplaceholder.typicode.com/:
// 	- реализовать по 5 тестов на каждый тип метода запроса
// 	- тестовый фреймворк: Jest + superAgent

import superagent from "superagent"

describe("Test suite", () => {
    const expectObject : {userId:number, id:number, title:string, body:string} = 
        {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          }
    test("Test 1 - Get all properties", async () =>{
        let response : any
        try {
            response = await superagent.get('https://jsonplaceholder.typicode.com/posts/1');
        }
        catch (err:any){
            console.log(err.message);
        }
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expectObject);
        console.log(response.body)
    })
    test("Test 2 - Get - title", async () =>{
        let response : any
        try {
            response = await superagent.get('https://jsonplaceholder.typicode.com/posts/1');
        }
        catch (err:any){
            console.log(err.message);
        }
        expect(response.status).toBe(200);
        expect(response.body.title).toEqual(expectObject.title)
    })
    test("Test 3 - Get - userId", async () =>{
        let response : any
        try {
            response = await superagent.get('https://jsonplaceholder.typicode.com/posts/1');
        }
        catch (err:any){
            console.log(err.message);
        }
        expect(response.status).toBe(200);
        expect(response.body.userId).toEqual(expectObject.userId);
    })
    it("Test 4 - Get status with query", async () => {
    const response = await superagent.get("https://jsonplaceholder.typicode.com/posts").query({id : 2});
    expect(response.status).toBe(200);
    })
    it("Test 5 - Get status", async () => {
        const response = await superagent.get("https://jsonplaceholder.typicode.com/posts/1");
        expect(response.status).toBe(200);
    })
    it("Test 1 - Post status", async () => {
        const response = await superagent
        .post('https://jsonplaceholder.typicode.com/posts')  
        .set("Content-type", "application/json")
        .send({body: "Hello", title:"post78"})
         expect(response.statusCode).toEqual(201);
    })
    it("Test 2 - Post - body", async () => {
        const response = await superagent.post('https://jsonplaceholder.typicode.com/posts')  
        .set("Content-type", "application/json")
        .send({body: "Hello", title:"post78"})
         expect(response.body.body).toBeTruthy;
    })
    it("Test 3 - Post user with existing id", async () => {
        const response = await superagent
        .post('https://jsonplaceholder.typicode.com/posts')  
        .set("Content-type", "application/json")
        .send({id: 1, userId: 1, title: "1", body: "1"})
         expect(response.body).toBeTruthy;
    })
    it("Test 4 - Post user with wrong data type", async () => {
        const response = await superagent
        .post('https://jsonplaceholder.typicode.com/posts/')  
        .set("Content-type", "application/json")
        .send({id: "1", userId: "4", title: 6, body: 6})
         expect(response.body).toBeFalsy;
    })
    it("Test 5 - Post user with only spaces in parameters", async () => {
        const response = await superagent
        .post('https://jsonplaceholder.typicode.com/posts/')  
        .set("Content-type", "application/json")
        .send({id: " ", userId: " ", title: " ", body: " "})
         expect(response.body).toBeFalsy;
    })
    it("Test 1 - Put status", async () => {
        const response = await superagent
        .put('https://jsonplaceholder.typicode.com/posts/1')  
        .set("Content-type", "application/json")
        .send({id: 1, userid: 1, body: "Hello", title:"post1"})
         expect(response.statusCode).toEqual(200);
    })
    it("Test 2 - Put body", async () => {
        const response = await superagent
        .put('https://jsonplaceholder.typicode.com/posts/1')  
        .set("Content-type", "application/json")
        .send({body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"})
         expect(response.body.body).toEqual(expectObject.body);
    })
    it("Test 3 - Put title", async () => {
        const response = await superagent
        .put('https://jsonplaceholder.typicode.com/posts/1')  
        .set("Content-type", "application/json")
        .send({title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"})
         expect(response.body.title).toEqual(expectObject.title);
    })
    it("Test 4 - Put empty title", async () => {
        const response = await superagent
        .put('https://jsonplaceholder.typicode.com/posts/1')  
        .set("Content-type", "application/json")
        .send({title: ""})
         expect(response.body.title).toBeFalsy;
    })
    it("Test 5 - Put wrong title type", async () => {
        const response = await superagent
        .put('https://jsonplaceholder.typicode.com/posts/1')  
        .set("Content-type", "application/json")
        .send({title: 6})
         expect(response.body.title).toBeFalsy;
    })
    it("Test 1 - Patch status code", async () => {
        const response = await superagent
        .patch('https://jsonplaceholder.typicode.com/posts/1')  
        .set("Content-type", "application/json")
        .send({title:"post100"})
         expect(response.statusCode).toEqual(200);
    })
    it("Test 2 - Patch title", async () => {
        const response = await superagent
        .patch('https://jsonplaceholder.typicode.com/posts/1')  
        .set("Content-type", "application/json")
        .send({title:"post100"})
         expect(response.body.title).toEqual("post100");
    })
    it("Test 3 - Patch body", async () => {
        const response = await superagent
        .patch('https://jsonplaceholder.typicode.com/posts/1')  
        .set("Content-type", "application/json")
        .send({body:"post1001"})
         expect(response.body.body).toEqual("post1001");
    })
    it("Test 4 - Patch with empty body", async () => {
        const response = await superagent
        .patch('https://jsonplaceholder.typicode.com/posts/1')  
        .set("Content-type", "application/json")
        .send({body:""})
         expect(response.body.body).toBeFalsy
    })
    it("Test 5 - Patch with wrong body type", async () => {
        const response = await superagent
        .patch('https://jsonplaceholder.typicode.com/posts/1')  
        .set("Content-type", "application/json")
        .send({body:6})
         expect(response.body.body).toBeFalsy
    })
    it("Test 1 - Delete status", async () => {
        const response = await superagent
        .delete('https://jsonplaceholder.typicode.com/posts/78')  
         expect(response.statusCode).toEqual(200);
    })
    it("Test 2 - Delete check that post is deleted", async () => {
        const response = await superagent
        .delete('https://jsonplaceholder.typicode.com/posts/1')  
         expect(response).toBeFalsy;
    })  
    it("Test 3 - Delete check that post properties are deleted (title)", async () => {
        const response = await superagent
        .delete('https://jsonplaceholder.typicode.com/posts/1')  
         expect(response.body.title).toEqual(undefined);
    })  
    it("Test 4 - Delete check that post properties are deleted (body)", async () => {
        const response = await superagent
        .delete('https://jsonplaceholder.typicode.com/posts/1')  
         expect(response.body.body).toEqual(undefined);
    })  
    it("Test 5 - Delete check that method does not delete other posts", async () => {
        let response = await superagent
        .delete('https://jsonplaceholder.typicode.com/posts/1')  
        response = await superagent.get('https://jsonplaceholder.typicode.com/posts/2')
        expect(response.body.title).toBeTruthy
    }) 
})