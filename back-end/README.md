# Simple REST-API with nodejs

## **How to install**

1. run  `npm install` to install the packages needed.
2. run `node server.js` to create a local node server.
3. make your **http request**.
   
## **API endpoints**

**base url:  http://127.0.0.1:3000/**
<table border='2'>
    <tr>
        <th>method/type</th>
        <th>path</th>
        <th>Parameters</th>
        <th>Responses</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>POST</td>
        <td>users/register</td>
        <td>user object ex: {"name":"dummy name","username":"dummy username","email":"dummyemail@gmail.com","password":"mypassword"}</td>
        <td>200 status, registered user</td>
        <td>this path is for registering a user to the db </td>
    </tr>
    <tr>
        <td>POST</td>
        <td>users/login</td>
        <td>login infos {"email":"dummyemail@gmail.com","password":"mypassword"}</td>
        <td>200 status, user info</td>
        <td>this path used for login</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>campaigns/list</td>
        <td>none</td>
        <td>campaigns list</td>
        <td>this path used to list all of the campaigns available</td>
    </tr>
</table>