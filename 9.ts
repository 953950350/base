class Pet {
    private type: string

    constructor(type: string) {
        this.type = type
    }

    getPetType():string {
        return this.type
    }
}

class Dog extends Pet {
    constructor() {
        super('dog')
    }
}

class Cat extends Pet {
    constructor() {
        super('cat')
    }
}

class ArrayQueue<T> {
    private items: T[]
    private head: number
    private tail: number
    private size: number

    constructor(size) {
        this.items = Array(size)
        this.head = 0
        this.tail = 0
        this.size = 0
    }

    isEmpty():boolean {
        return !!this.size
    }

    getSize():number {
        return this.size
    }

    enqueue(item: T):boolean {
        if (this.size === this.items.length) return false
        this.items[this.tail] = item
        this.tail = this.tail + 1 === this.items.length ? 0 : this.tail + 1
        this.size++
        return true
    }
    
    dequeue():T {
        if (!this.size) return null
        let ret = this.items[this.head]
        this.head = this.head + 1 === this.items.length ? 0 : this.head + 1
        this.size--
        return ret
    }

    peek():T {
        if (!this.size) return null
        return this.items[this.head]
    }
}

class PetEnter {
    private pet:Pet
    private count:number

    constructor(pet:Pet, count:number) {
        this.pet = pet
        this.count = count
    }

    getPet():Pet {
        return this.pet
    }
    getCount():number {
        return this.count
    }
    getEnterPetType():string {
        return this.pet.getPetType()
    }
}


class DogCatQueue {
    private dogQueue: ArrayQueue<PetEnter>
    private catQueue: ArrayQueue<PetEnter>
    private count: number

    constructor() {
        this.dogQueue = new ArrayQueue(100)
        this.catQueue = new ArrayQueue(100)
        this.count = 0
    }

    add(item: Pet) {
        let petEnter: PetEnter = new PetEnter(item, this.count++)
        if (petEnter.getEnterPetType() === 'cat') {
            this.catQueue.enqueue(petEnter)
        } else {
            this.dogQueue.enqueue(petEnter)
        }
    }

    poolAll(): Pet {
        let cat:PetEnter = this.catQueue.peek()
        let dog:PetEnter = this.dogQueue.peek()
        if (!cat && !dog) return null
        if (cat && !dog) return this.pollCat()
        if (dog && !cat) return this.pollDog()
        if (cat.getCount() < dog.getCount()) {
            return this.pollCat()
        } else {
            return this.pollDog()
        }
    }

    pollDog(): Dog {
        const dog = this.dogQueue.dequeue()
        return dog && dog.getPet()
    }

    pollCat(): Cat {
        const cat = this.catQueue.dequeue()
        return cat && cat.getPet()
    }

    isDogEmpty():boolean {
        return this.dogQueue.isEmpty()
    }

    isCatEmpty():boolean {
        return this.catQueue.isEmpty()
    }

    isEmpty():boolean {
        return this.isDogEmpty() && this.isCatEmpty()
    }

}