export interface SkillData {
	_id: string
	name: string
	icon_url: string
	slug: string
	createdAt: string
	updatedAt: string
}

export interface SkillDataList {
	currentPage: 1
	totalPages: 24
	results: SkillData[]
}
