export function expensiveCompute() {
	const rows = []

	for (let i = 0; i < 10_000_000; i++) {
		rows.push(i)
	}

	return rows
}
