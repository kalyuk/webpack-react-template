export const MAIN_SET_SETTINGS = 'MAIN_SET_SETTINGS';

export function setSettings(data) {
  return {
    type: MAIN_SET_SETTINGS,
    payload: data
  };
}
