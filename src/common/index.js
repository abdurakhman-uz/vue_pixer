import { reactive } from "vue"

 export let user = reactive({
    username: '',
    password: '',
    gender: '',
    getAll: [
      {
        id: 1,
        username: "Toxirrrr",
        password: "12345678",
        gender: "male"
      },
      {
        id: 2,
        username: "Toxirrrr",
        password: "12345678",
        gender: "male"
      },
      {
        id: 3,
        username: "Toxirrrr",
        password: "12345678",
        gender: "male"
      },
      {
        id: 4,
        username: "Toxirrrr",
        password: "12345678",
        gender: "male"
      },
    ],
    users: [
      { id: 1, name: 'Oleg', age: 21 },
      { id: 2, name: 'Nastya', age: 24 },
      { id: 3, name: 'Guli', age: 27 }
    ]
  })