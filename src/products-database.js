import carrotImage from './images/carrots.jpg';
import appleImage from './images/green-apples.jpg';

const products = {
	vegetable1: {
		index: 1,
		name: 'Carrot',
		image: carrotImage,
		desc: 'Everyone’s favorite white fish. We will cut it to the size you need and ship it.',
		price: 12,
		status: 'available'
	},

	vegetable2: {
		index: 2,
		name: 'Green apples',
		image: appleImage,
		desc: 'These tender, mouth-watering beauties are a fantastic hit at any dinner party.',
		price: 10,
		status: 'available'
	}
};

export default products;
