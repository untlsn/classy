import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

const dateFormat = (date: Date | Dayjs) => dayjs(date).format('YYYY-MM-DD');

export default dateFormat;
