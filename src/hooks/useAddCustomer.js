import { useState } from "react";

export const useAddCustomer = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] =  useState(false)

    const addCustomer = async (customer, bank, acc, password) => {
        setError(null)
        setIsPending(true)

        try {
             
        } catch (err) {
            console.log(err.message);
            setError(err.message)
            setIsPending(false)
        }
    }

    return { error, isPending, addCustomer}
}