export const SEARCH = 'SEARCH';

export function search(payload: string) {
    return {
        type: SEARCH,
        payload
    };
}
