/**
 * @module  get-ext
 *
 * Return file extension from path string
 */

module.exports = extname;

//get extension of a file
function extname (str) {
	var slug = str.split(/\/|\\/).slice(-1)[0];
	var idx = slug.lastIndexOf('.');
	if (idx <= 0) return '';
	var ext = slug.slice(idx);
	return ext;
}
