const currency = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' })

export const formatPrice = (value) => currency.format(value)
