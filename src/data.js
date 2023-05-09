import { v4 as uuidv4 } from 'uuid';

export const data = [
	{
		id: uuidv4(),
		title: 'Life lessons with Katie Zaferes',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
		price: 136,
		coverImg: 'person1.png',
		stats: {
			rating: 5.0,
			reviewCount: 6,
		},
		location: 'Online',
		openSpots: 27,
	},

	{
		id: uuidv4(),
		title: 'Learn wedding photography',
		description:
			'Lorem ipsum dolor sit amet,  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
		price: 125,
		coverImg: 'person2.png',
		stats: {
			rating: 5.0,
			reviewCount: 30,
		},
		location: 'Online',
		openSpots: 16,
	},

	{
		id: uuidv4(),
		title: 'Group Mountain Biking',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
		price: 50,
		coverImg: 'person3.jpg',
		stats: {
			rating: 4.8,
			reviewCount: 2,
		},
		location: 'Online',
		openSpots: 0,
	},
];
