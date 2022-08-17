const func =  [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

const separarEmailAdm = (array: any[]) => {
  let adminEmail: any[] = []
  array.filter((func) => {
    if (func.role === "admin") {
      adminEmail.push(func.email)
    }
  })
  return console.log(adminEmail)
}

separarEmailAdm(func)