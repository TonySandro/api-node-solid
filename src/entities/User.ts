import { uuid } from "uuidv4"

export class User {
    public readonly id: string

    public name: string
    public email: string
    public password: string

    //props: Omit<User, 'id'> Diz que vai receber todas as propriedades, menos a ID
    constructor(props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props)

        if (!id) {
            this.id = uuid()
        }
    }
}