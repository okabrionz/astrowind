export const SITE = {
	name: 'Dasteric',

	origin: 'https://www.dasteric.com',
	basePathname: '/',

	title: 'Dasteric | Nyaman &amp; Kekinian dengan Dasteric',
	description: 'Produsen Daster paling nyaman dipakai dan berkualitas. Di ciptakan dari seluruh kekuatan langit dan bumi.',

	googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};

export const BLOG = {
	disabled: false,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: 'post', // empty for /some-post, value for /pathname/some-post 
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
