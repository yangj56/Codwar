const date0 = new Date(2020, 1, 14);
const date1 = new Date('Wed, 14 February 2020 00:00:00');
const date2 = new Date('Wed, 14 February 2020 00:00:00 UTC');
const date3 = new Date('14 February 2020 00:00:00 UTC+08');
const noneIsoDate = new Date('14 Feb 2020');
const isoDate = new Date('2020-02-14');
date0;
date1;
date2;
date3;
noneIsoDate;
isoDate;

// date formating
const firstValentineOfTheDecade = new Date(2020, 1, 14); // 1 for February
firstValentineOfTheDecade;
const enUSFormatter = new Intl.DateTimeFormat('en-US');
console.log(enUSFormatter.format(firstValentineOfTheDecade));
const longEnUSFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
});
/** 
1. if no dates are given all the dates will be in local time 00:00:00
2. timestamp is dangerous for dates before 1970, as it will be storing in negative number
3. if you use the ISO format (2020-02-14), even if you give only the date and not the time and time zone, it will automatically accept the time zone as UTC.

**/
