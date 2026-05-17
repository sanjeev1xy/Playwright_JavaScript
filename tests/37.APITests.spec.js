const{test,expect}=require("@playwright/test")
var userid;

test("Get User",async({request})=>
{
    const response=await request.get("https://reqres.in/api/users?page=2");
    console.log(await response.json());
    expect(response.status()).toBe(200);
});
test("create User",async({request})=>
{
    const response=await request.post("https://reqres.in/api/users",
{
        data:{"name":"sanjeev","job":"trainer1"},
        headers:{"Accept":"application/json","x-api-key":"reqres-free-v1"}
});
console.log(await response.json());
expect(response.status()).toBe(201);

var res=await response.json();
userid=res.id;
});
test("Update User",async({request})=>
{
    const response=await request.put("https://reqres.in/api/users/438"+userid,
{
        data:{"name":"sanjeev1","job":"trainer123"},
        headers:{"Accept":"application/json","x-api-key":"reqres-free-v1"}
});
console.log(await response.json());
expect(response.status()).toBe(200);
});
test("Delete User",async({request})=>
{
    const response=await request.delete("https://reqres.in/api/users/"+userid,
{
        headers:{"Accept":"application/json","x-api-key":"reqres-free-v1"}
});
expect(response.status()).toBe(204);
});


