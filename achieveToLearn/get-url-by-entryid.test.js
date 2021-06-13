import { handleGetUrlByEntryID } from '../get-url-by-entryid';
import { getEntryUrl } from '../../../content/contentful-api/get-entry-url';

jest.mock('../../../common/config', () => {
    return { SAC_URL: 'https://example.com' };
});
jest.mock('../../../content/contentful-api/get-entry-url');

beforeEach(() => {
    // SAC_URL.mockImplementation = 'https://example.com';
    getEntryUrl.mockImplementation(() => {
        return '/fakeUrlPath/';
    });
});

describe('get-url-by-entryid and handleGetUrlByEntryID', () => {
    it('should return a valid response', async () => {
        let responseStatus = '';
        const mockRes = {
            status: function (responseStatusIn) {
                responseStatus = responseStatusIn;
                return this;
            },
            json: jest.fn()
        };

        await handleGetUrlByEntryID({ params: { entryID: 'abc123' } }, mockRes);

        expect(responseStatus).toStrictEqual(200);

        mockRes.json();
        expect(mockRes.json).toHaveBeenCalledWith({
            url: 'https://example.com/fakeUrlPath/',
            message: 'OK'
        });
    });

    it('should return an error', async () => {
        getEntryUrl.mockImplementation(() => {
            throw new Error('my Error');
        });

        const entryID = 'abc123';

        let responseStatus = '';
        const mockRes = {
            status: function (responseStatusIn) {
                responseStatus = responseStatusIn;
                return this;
            },
            json: jest.fn()
        };

        await handleGetUrlByEntryID({ params: { entryID } }, mockRes);

        expect(responseStatus).toStrictEqual(500);

        mockRes.json();
        expect(mockRes.json).toHaveBeenCalledWith({
            message: `Error occurred while getting url for entryId ${entryID}`,
            url: ''
        });
    });
});
