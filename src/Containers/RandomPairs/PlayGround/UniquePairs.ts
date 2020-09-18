class Pair {
    first: string
    second: string

    constructor(first: string, second: string) {
        this.first = first
        this.second = second
    }
}

const random = (length: number) => (Math.random() - 0.5)

// const pairFrom = (arr: Array<string>) => {
//     if (arr.length === 1) return new Pair(arr[0].trim(), '')
//     else return new Pair(arr[0].trim(), arr[1].trim())
// }

const shuffle = (individuals: Array<string>): Array<string> =>
    individuals.length === 1 ? individuals : individuals
        .sort((a, b) => random(individuals.length))
        .slice(0, 1)
        .concat(shuffle(individuals.slice(1)))


export function pairsFrom(individuals: Array<string>): Array<string> {
    const shuffled = shuffle(individuals)
    if (shuffled.length === 0) return []
    const result: Array<Pair> = []
    const size = shuffled.length - 1
    for (let i = 0; i <= size; i += 2) {
        if ((i + 1) > size) result.push(new Pair(shuffled[i], ''))
        else result.push(new Pair(shuffled[i], shuffled[i + 1]))
    }
    return result.map(pair => {
        if (pair.second === '') return `${pair.first}`
        else return `${pair.first} and ${pair.second}`
    })
}

export const singleFrom = (pairs: Array<string>): Array<string> =>
    pairs
        .flatMap(decouple)
        .filter(single => single !== '')

export const decouple = (pair: string): Array<string> =>
    pair
        .split("and")
        .map(single => single.trim())

const UniquePairs = {
    pairsFrom,
    singleFrom,
}

export default UniquePairs