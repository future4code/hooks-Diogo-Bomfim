import { UserBusiness } from "../../src/business/UserBusiness"
import { HashGeneratorMock } from "./mocks/HashGeneratorMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { TokenGeneratorMock } from "./mocks/TokenGeneratorMock"
import { UserDatabaseMock } from "./mocks/UserDatabaseMock"


const idGenerator = new IdGeneratorMock()

const userBusiness = new UserBusiness(
new UserDatabaseMock(),
new HashGeneratorMock(),
idGenerator,
new TokenGeneratorMock()
)


describe("getUserById", () => {
	
   test("Should catch error when id is not registered", async () => {
    expect.assertions(2)

    try {
      await userBusiness.getUserById("abc")
    } catch (error : any) {
      expect(error.statusCode).toBe(404)
      expect(error.message).toBe("User not found")
    }
  })
    
	
  test("Should return respective user when id is registered", async () => {
    expect.assertions(2)
    
    try {
      const getUserById = jest.fn(
        (id: string) => userBusiness.getUserById(id)
      )
        
      const result = await getUserById("id_mock_admin")

      expect(getUserById).toHaveBeenCalledWith("id_mock_admin")
      expect(result).toEqual({
        id: "id_mock_admin",
        name: "astrodev",
        email: "astrodev@gmail.com",
        role: "ADMIN",
      })
    } catch (error : any) {
      console.log(error.message)
    }
  })
})