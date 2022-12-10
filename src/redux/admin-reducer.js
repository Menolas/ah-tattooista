/* "Client": {
  "fullName": { "regexp": "[A-Z][a-z]{5,10}" },
  "avatar": { "string": {} },
  "email": { "regexp": "[a-z]{5,10}@gmail.com" },
  "phone": { "int": { "min": 110010101, "max": 1000000000 } },
  "whatsapp": { "int": { "min": 110010101, "max": 1000000000 } },
  "insta": { "regexp": "@[a-z]{5,10}" },
  "createdAt": {
    "dateTime": {
      "min": "2022-01-01T00:00:00Z",
      "max": "2022-12-31T23:59:59Z"
    }
  }
}
*/

let initialState = {
  myClients: [],
  customersList: true,
  clientsList: false,
  pageSize: 5,
  totalCustomersCount: 20,
  currentPage: 1,
}

const adminReducer = (state = initialState, action) => {
  //debugger;

  switch (action.type) {
    
    default: return state;
    
  }
}

export default adminReducer;
