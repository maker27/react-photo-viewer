export default function dateFormat(timestamp){
	const d = new Date(timestamp);
	const twoDigit = digit => ('0' + digit).slice(-2);
	return [
		twoDigit(d.getDate()),
		twoDigit(d.getMonth()+1),
		d.getFullYear()
	].join('.');
}