import axios from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios');

const mockResponse = {
  data: {
    id: 1,
    name: 'John Doe',
  },
};

describe('throttledGetDataFromApi', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });
  
  test('should create instance with provided base url', async () => {
    const url = 'https://jsonplaceholder.typicode.com';
    const relativePath = '/relativePath';

    const mockInstance = {
      get: jest.fn().mockImplementation(() => Promise.resolve({data: mockResponse}))
    };
    (axios.create as jest.Mock).mockImplementation(() => mockInstance);

    await throttledGetDataFromApi(relativePath);
    throttledGetDataFromApi.cancel();

    expect(axios.create).toHaveBeenCalledWith({ baseURL: url });
  });

  test('should perform request to correct provided url', async () => {
    const relativePath = '/relativePath';

    const mockInstance = {
      get: jest.fn().mockImplementation(() => Promise.resolve({data: mockResponse}))
    };
    (axios.create as jest.Mock).mockImplementation(() => mockInstance);

    await throttledGetDataFromApi(relativePath);
    throttledGetDataFromApi.cancel();

    expect(mockInstance.get).toHaveBeenCalledWith(relativePath);
  });

  test('should return response data', async () => {
    const relativePath = '/relativePath';

    const mockInstance = {
      get: jest.fn().mockImplementation(() => Promise.resolve({data: mockResponse}))
    };
    (axios.create as jest.Mock).mockImplementation(() => mockInstance);

    const data = await throttledGetDataFromApi(relativePath);
    throttledGetDataFromApi.cancel();

    expect(data).toBe(mockResponse);
  });
});
