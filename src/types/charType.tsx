export interface CharacterInfo {
    sentence: string
    character: Character
}

export interface Character {
    name: string
    slug: string
    house: House
}

export interface House {
    name: any
    slug: any
}
