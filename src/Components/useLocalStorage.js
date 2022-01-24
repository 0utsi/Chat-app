import { useState, useEffect } from 'react'

function getSavedMessage(key, initialMessage) {
	const savedMessage = JSON.parse(localStorage.getItem(key))
	if (savedMessage) return savedMessage

	if (initialMessage instanceof Function) return initialMessage()
	return initialMessage
}


export default function useLocalStorage(key, initialMessage) {

	const [message, setMessage] = useState(() => {
		return getSavedMessage(key, initialMessage)

	})

	useEffect(() => {

		localStorage.setItem(key, JSON.stringify(message))



	})

	return [message, setMessage]
}

