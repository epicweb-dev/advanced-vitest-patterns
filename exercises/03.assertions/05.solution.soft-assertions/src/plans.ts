export type PlanKind = 'monthly' | 'yearly'

export class Plan {
	public name: string
	public kind: PlanKind
	public state: 'active' | 'cancelled'
	public chargeAmount: number
	public endsAt?: string

	constructor(options: {
		name: string
		kind: PlanKind
		chargeAmount: number
		endsAt?: string
	}) {
		this.name = options.name
		this.kind = options.kind
		this.chargeAmount = options.chargeAmount
		this.state = 'active'
		this.endsAt = options.endsAt
	}

	public cancel() {
		if (this.state !== 'active') {
			return
		}

		const today = new Date()
		today.setUTCMonth(today.getUTCMonth() + 1, 1)

		this.endsAt = today.toISOString()
	}
}

export class TrialPlan extends Plan {
	constructor() {
		super({
			name: 'Trial',
			kind: 'monthly',
			chargeAmount: 0,
		})
	}
}

export class UnlimitedPlan extends Plan {
	constructor() {
		super({
			name: 'Unlimited',
			kind: 'yearly',
			chargeAmount: 250,
		})
	}
}
