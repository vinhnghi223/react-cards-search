import { useEffect, useState } from "react"
import { Projects } from "./mock"
import { Status } from "../utils/constants"
import { Card } from "../utils/model"
import { generateAutocompleteArray } from "../utils/autocompleteArrFactory"

export const useData = () => {

    const [cards, setCards] = useState<Card[]>([])
    const [autocompleteStrArr, setAutocomplete] = useState<string[]>([])
    const [loadingStatus, setLoadingStatus] = useState(Status.Default)

    useEffect(() => {
        setLoadingStatus(Status.Loading)
        
        setCards(Projects)
        setAutocomplete(generateAutocompleteArray(Projects))
        setLoadingStatus(Status.Success)

    }, [])

    return { cards, autocompleteStrArr, loadingStatus }
}