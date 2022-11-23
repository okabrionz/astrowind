/** */
export const getFormattedDate = (date) =>
	date
		? new Date(date).toLocaleDateString('id-id', {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
		  })
		: '';
