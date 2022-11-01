import { TaskDatabase } from "../data/TaskDatabase"
import { generateId } from "../services/generateId"
import { InvalidRequest } from "../error/InvalidRequest"

export class TaskBusiness {

   public createTask = async (input: any) => {
      try {
         const { title, description, deadline, authorId } = input

         if (!title || !description || !deadline || !authorId) {
            throw new InvalidRequest
         }

         const id = generateId()

         const taskDatabase = new TaskDatabase()

         await taskDatabase.insertTask({
            id,
            title,
            description,
            deadline,
            authorId,
         })

      } catch (error: any) {
         throw new Error(error.message)
      }
   }
}
