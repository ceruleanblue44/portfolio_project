export const fetchSvg = async (color = '') => {
	const fileName = color ? `headphones-${color}.svg` : 'headphones.svg'
	const filePath = `/assets/svg/${fileName}`

	try {
		const response = await fetch(filePath)
		if (!response.ok) throw new Error(`Failed to load SVG: ${response.statusText}`)
		return await response.text()
	} catch (error) {
		console.error(error)
		return ''
	}
}
