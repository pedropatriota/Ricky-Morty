import { rest } from 'msw';
import { characterMock, characterByIdMock } from './mockData';

export const handlers = [
	rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
		return res(ctx.json(characterMock));
	}),
	rest.get('https://rickandmortyapi.com/api/character/1', (req, res, ctx) => {
		return res(ctx.json(characterByIdMock));
	})
];
