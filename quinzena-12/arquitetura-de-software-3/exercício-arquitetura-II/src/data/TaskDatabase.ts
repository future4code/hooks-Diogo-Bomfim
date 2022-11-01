import { task } from "../types/task";
import { BaseDatabase } from "./BaseDatabase";

export class TaskDatabase extends BaseDatabase {

    private taskTable = 'Architecture_Task'

    public insertTask = async (
        task: task
    ) => {
        try {
            await TaskDatabase.connection(this.taskTable)
                .insert({
                    id: task.id,
                    title: task.title,
                    description: task.description,
                    deadline: task.deadline,
                    author_id: task.authorId
                })
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}
