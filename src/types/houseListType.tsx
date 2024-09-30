export type housesType = Root2[]

export interface Root2 {
    slug: string
    name: string
    members: Member[]
}

export interface Member {
    name: string
    slug: string
}
