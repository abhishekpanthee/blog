interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'abhishekpanthee', // Site author
	title: 'Tech Blogs', // Site title.
	description: 'Tech Blogs : Your Hub for Software Development, Data Science, AI, Cybersecurity, Cloud Computing, and More', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 10// Number of posts per page
}
