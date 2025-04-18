import { describe, expect, test } from 'vitest';
import { formatDate } from './matching-list';
import { getFilterNameFromParam } from './matching-list';
import { getFilterParamFromName } from './matching-list';

describe('matching-list-utils', () => {
  test.each([
    ['2025-04-18T12:00:00Z', '2025년 4월 18일'],
    ['2025-04-19T00:00:00Z', '2025년 4월 19일'],
  ])('formatDate(%s) ➜ %s', (iso, pretty) => {
    expect(formatDate(iso)).toBe(pretty);
  });
  test.each([
    ['all', '전체'],
    ['in-progress', '매칭 진행 중'],
    ['finished', '매칭 종료'],
    ['halted', '매칭 중단'],
    ['unknown', '전체'],
  ])(`getFilterNameFromParam(%s) ➜ %s`, (filter, label) => {
    expect(getFilterNameFromParam(filter)).toBe(label);
  });
  test.each([
    ['전체', 'all'],
    ['매칭 진행 중', 'in-progress'],
    ['매칭 종료', 'finished'],
    ['매칭 중단', 'halted'],
    ['unknown', 'all'],
  ])('getFilterParamFromName(%s) ➜ %s', (label, param) => {
    expect(getFilterParamFromName(label)).toBe(param);
  });
});
