import { DateTime } from 'luxon';

export const formatDate = (date: string, fromFormat: string): string => {
    return DateTime.fromFormat(date.trim(), fromFormat).toRFC2822() ?? '';
};